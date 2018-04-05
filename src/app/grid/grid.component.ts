import { Component, OnInit } from '@angular/core';
import { GridItem } from '../GridItem';
import { WordList } from '../WordList';
import { Randomizer } from '../Randomizer';
import { SeedService } from '../shared/seed.service';
import { Emoji } from "../Emoji";


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
  rows = 5;
  cols = 5;

  getItemWidth = () => {
    return 100/this.cols - 0.5;
  }
  getItemHeight = () => {
    return 85/this.rows;
  }

  
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

  clickItem = (item:GridItem,event) => {
    if(this.isSpymaster){
      this.toggleRevealItem(item);
    }
    else{
      this.cycleTeam(item);
    }
    this.flipTimer();
    event.preventDefault();
    event.stopPropagation();
    return false;
  }


  createGrid = (seed:string) => {
    this.items = [];
    this.revealAll = false;
    this.targets = [];

    seed = seed.toLowerCase(); // case insensitive

    Randomizer.setSeed(seed);
    let numWords = 25;
    const normalTeams = {
      Red:8,
      Blue:8,
      Gray:7,
      Black:1,
      Green:0
    }
    const picturesTeams = {
      Red:7,
      Blue:7,
      Gray:4,
      Black:1,
      Green:0
    }
    let teams = normalTeams;

    this.rows = 5;
    this.cols = 5;

    if(this.modeName == "codenames"){
      WordList.useCodenamesList();
    }
    
    if(this.modeName == "undercover"){
      WordList.useUnderCoverList();
    }

    if(this.modeName == "duet"){
      WordList.useDuetList();
    }
    
    if(this.modeName == "emoji"){
      WordList.useEmojiList();
      teams = picturesTeams;
      this.rows = 4;
      numWords = 20;
    }
    if(this.modeName == "paintings"){
      WordList.usePaintingsList();
      teams = picturesTeams;
      this.rows = 4;
      numWords = 20;
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
    // setTimeout(this.setSizes,1);
  }

  setSeed = (seed:string) => {
    console.log("setSeed in grid component",seed);
    // this.ss.setSeed(seed);
    let len = seed.length;
    let calculatedVw = Math.floor(50 - (1.1) * (len+6));
    let maxVw = 30;
    let vw = Math.min(maxVw,calculatedVw);
    let el = document.querySelector('#seedLabel');
    // console.log("style",el.getAttribute("style"));
    el.setAttribute("style","left: "+vw+"vw");
    // el.style.left = vw+"vw";
    console.log(vw);
    this.seed = seed;
    this.createGrid(seed);
  }

  showChillTunes = false;

  // window.setInterval(()=>{
  //   twemoji.parse(document.body,{size:72});
  // },2000);


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
  private setSizes = () => {
    /* set sizes */
    let gridItems = Array.from(document.querySelectorAll(".gridItemDiv"));
    // gridItems = Array.from(gridItems);
    if(gridItems.length > 0){
      gridItems.forEach(item=>{
        let html:HTMLElement = item as HTMLElement;
        console.log("width",this.getItemHeight())
        html.style.width = this.getItemWidth()+"vw";
        html.style.height = this.getItemHeight()+"vh";
      })
    }
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
    // twemoji.parse(document.body,{size:72});
  }

/* scoreboard */
  getRedMaxScore = () => {
    let max = 7;
    if(!["emoji","paintings"].includes(this.modeName)) ++max;
    if(this.firstTeam == "Red") ++max;
    return max;
  }
  getBlueMaxScore = () => {
    let max = 7;
    if(!["emoji","paintings"].includes(this.modeName)) ++max;
    if(this.firstTeam == "Blue") ++max;
    return max;
  }
  getRedScore = () => {
    return this.items.filter(item=>item.team=="Red" && item.revealed).length;
  }
  getBlueScore = () => {
    return this.items.filter(item=>item.team=="Blue" && item.revealed).length;;
  }

  // re = require("random-emoji");
  // console.log(re);
  // res = re.random({count:2});
  // console.log(res);
  
  ss: SeedService;
  constructor(ss: SeedService) {
    this.ss = ss;
  }

  ngOnInit() {
    // Will fire everytime other component use the setter this.ss.setLogged()
    this.ss.getSeed().subscribe(this.setSeed);
    this.setSeed(this.ss.initialSeed);
    this.chooseAppropriateDefaultList();
    console.log("emoji",Emoji.ultron);

 }

}
