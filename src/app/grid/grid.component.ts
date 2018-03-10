import { Component, OnInit } from '@angular/core';
import { GridItem } from '../GridItem';
import { WordList } from '../WordList';
import { Randomizer } from '../Randomizer';
import { SeedService } from '../shared/seed.service';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [SeedService]
})


// const makeGridItem = 

export class GridComponent implements OnInit {

  targets: GridItem[] = [];
  items: GridItem[] = [];
  revealAll:boolean = false;
  seed: string;
  firstTeam;

  getGameModeName = () => WordList.getWordListName();
  
  // toggleRevealAll = () => {
  //   this.revealAll = !this.revealAll;
  //   console.log(this.revealAll,"reveal all called");
  // }

  cycleTeam = (item:GridItem) => {
    const nextTeam = team => {
      if(team == "None") return "Red";
      if(team == "Red") return "Blue";
      if(team == "Blue") return "Gray";
      if(team == "Gray") return "Black";
      if(team == "Black") return "None";
    }
    item.team = nextTeam(item.team);
    if(item.team != "None") item.revealed = true;
    else item.revealed = false;
  }

  toggleRevealItem = (item:GridItem) => {
      item.revealed = !item.revealed;
  }

  clickItem = (item:GridItem) => {
    if(this.isSpymaster){
      this.toggleRevealItem(item);
    }
    else{
      this.cycleTeam(item);
    }
  }


  createGrid = (seed:string) => {
    this.items = [];
    this.revealAll = false;
    this.targets = [];



    Randomizer.setSeed(seed);
    let numWords = 25;
    let teams = {
      Red:8,
      Blue:8,
      Gray:7,
      Black:1,
      Green:0
    }


    if(this.modeName == "codenames"){
      WordList.useCodenamesList();
    }
    
    if(this.modeName == "undercover"){
      WordList.useUnderCoverList();
    }

    if(this.modeName == "duet"){
      WordList.useDuetList();
    }

    /* initialize grid items with random words */
    WordList.getRandomWords(numWords).forEach(desc=>{
      this.items.push({description:desc,team:"None",revealed:false,trueTeam:"None"})
    })

    const generateDuetKeyCards = (numItems) => {
      let indices = Randomizer.shuffledIndices(numItems);
      let colors = new Array(numItems);
      
      indices.forEach(index=>{
        colors[index] = {a:"Black",b:"Green"};
      })

    }

    /* assign teams to each grid item */
    const generateKeyCard = (numItems) => {
      let indices = Randomizer.shuffledIndices(numItems);
      let colors = new Array(numItems);
      /* determine first player team */
      const firstPlayerTeams = ["Red","Blue"];
      this.firstTeam = Randomizer.elementFromArray(firstPlayerTeams);
      /* add 1 to team of first player */
      teams[this.firstTeam] += 1;
      /* determine which items get which team */
      const reds = indices.splice(0,teams.Red);
      const blues = indices.splice(0,teams.Blue);
      const civilians = indices.splice(0,teams.Gray);
      const assassins = indices.splice(0,teams.Black);
      const greens = indices.splice(0,teams.Green);
      /* combine into one array */
      reds.forEach(     index=>colors[index]="Red");
      blues.forEach(    index=>colors[index]="Blue");
      civilians.forEach(index=>colors[index]="Gray");
      assassins.forEach(index=>colors[index]="Black");
      greens.forEach(   index=>colors[index]="Green");
      return colors;
    }
    /* assign key card's colors to all the grid items */
    generateKeyCard(numWords).forEach((color,index)=>this.items[index].trueTeam = color);
  }

  setSeed = (seed:string) => {
    console.log("setSeed in grid component",seed);
    // this.ss.setSeed(seed);
    this.seed = seed;
    this.createGrid(seed);
  }




  isSpymaster:boolean = false;
  identityConfirmed:boolean = false;

  setSpymaster = () => {
    this.isSpymaster = true;
    this.identityConfirmed = true;
    this.items.forEach(item=>{
      item.team=item.trueTeam;
      item.revealed = false;
    });
  }
  setNotSpymaster = () => {
    this.isSpymaster = false;
    this.identityConfirmed = true;
  }

  claimToBeSpymaster = () =>{
    if(confirm("Are you sure you're a Spymaster?")) {
      this.setSpymaster();
    }
  }
  claimToNotBeSpymaster = this.setNotSpymaster;


  private refreshGrid = () => this.createGrid(this.seed);
  private DEFAULTMODE = "codenames";
  modeName:string;

  chooseMode = (value) => {
    console.log("choose mode",value,this.modeName);
    document.querySelector("#gameChooser > [value=" + value +"]").setAttribute("selected","true");
    this.storeListName(value);
    this.modeName = value;
    this.refreshGrid();
  }
  private storeListName = name => {
      console.log("storing list name ",name);
      window.sessionStorage.setItem("listName",name);
  }
  private chooseAppropriateDefaultList = () => {
      let stored = window.sessionStorage.getItem("listName");
      console.log("stored",stored);
      if(stored){
          this.chooseMode(stored);
      }
      else{
          this.chooseMode(this.DEFAULTMODE);
      }
  }

  /* timer */
  timeSinceLastChange = 0;
  private timerStarted = false;
  flipTimer = () => {
    this.timeSinceLastChange = 0;
    if(!this.timerStarted){
      window.setInterval(this.updateTimer,1000);
      this.timerStarted = true;
    }
  }
  private updateTimer = () => {
    ++this.timeSinceLastChange;
  }



  
  ss: SeedService;
  constructor(ss: SeedService) {
    this.ss = ss;
  }

  ngOnInit() {
    // Will fire everytime other component use the setter this.ss.setLogged()
    this.ss.getSeed().subscribe(this.setSeed);
    this.setSeed(this.ss.initialSeed);
    this.chooseAppropriateDefaultList();
 }

}
