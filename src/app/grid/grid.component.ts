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
  
  toggleRevealAll = () => {
    this.revealAll = !this.revealAll;
    console.log(this.revealAll,"reveal all called");
  }

  cycleTeam = (item:GridItem) => {
    const nextTeam = team => {
      if(team == "Red") return "Blue";
      if(team == "Blue") return "Gray";
      if(team == "Gray") return "Black";
      if(team == "Black") return "Red";
    }
    if(!item.revealed){
      item.revealed = true;
      item.team = "Red";
    }
    else if(item.team == "Black"){
      item.revealed = false;
    }
    else{
      item.team = nextTeam(item.team);
    }
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
      this.items.forEach(item=>item.team = item.trueTeam);
    }

    generateTargets();
  }

  setSeed = (seed:string) => {
    console.log("setSeed in grid component",seed);
    // this.ss.setSeed(seed);
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

  

  constructor(private ss: SeedService) {
    
  }

  ngOnInit() {
    // Will fire everytime other component use the setter this.ss.setLogged()
    this.ss.getSeed().subscribe(this.setSeed);
    this.setSeed(this.ss.initialSeed);
 }

}
