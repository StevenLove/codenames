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

    if(this.modeName == "codenames")WordList.useCodenamesList();
    if(this.modeName == "duet")WordList.useDuetList();
    if(this.modeName == "undercover")WordList.useUnderCoverList();

    WordList.getRandomWords(25).forEach(desc=>{
      this.items.push({description:desc,team:"Not Set",revealed:false,trueTeam:"Not Set"})
    })
    console.log(this.items);

    const generateTargets = () => {
      let indices = new Array(25).fill(0).map((val,index)=>index);
      indices = Randomizer.shuffle(indices);
      const teams = ["Red","Blue"];
      this.firstTeam = Randomizer.elementFromArray(teams);
      const numReds = this.firstTeam == "Red"?9:8;
      const numBlues = this.firstTeam == "Blue"?9:8;
      const numCivilians = 7;

      const reds = indices.splice(0,numReds);
      const blues = indices.splice(0,numBlues);
      const civilians = indices.splice(0,numCivilians);
      const assassin = indices[0];
      
      reds.forEach(index=>this.items[index].trueTeam="Red");
      blues.forEach(index=>this.items[index].trueTeam="Blue");
      civilians.forEach(index=>this.items[index].trueTeam="Gray");
      this.items[assassin].trueTeam="Black";
      this.items.forEach(item=>item.team = "None");
    }

    generateTargets();
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

  modeName:string = "codenames";

  chooseMode = (value) => {
    console.log("choose mode",value,this.modeName);
    this.modeName = value;
    this.refreshGrid();
  }



  
  ss: SeedService;
  constructor(ss: SeedService) {
    this.ss = ss;
  }

  ngOnInit() {
    // Will fire everytime other component use the setter this.ss.setLogged()
    this.ss.getSeed().subscribe(this.setSeed);
    this.setSeed(this.ss.initialSeed);
 }

}
