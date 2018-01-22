import { Component, OnInit } from '@angular/core';
import { GridItem } from '../GridItem';
import { WordList } from '../WordList';
import { Randomizer } from '../Randomizer';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})


// const makeGridItem = 

export class GridComponent implements OnInit {

  targets: GridItem[] = [];
  items: GridItem[] = [];
  revealAll:boolean = false;
  seed: string;
  
  toggleRevealAll = () => {
    this.revealAll = !this.revealAll;
    console.log(this.revealAll,"reveal all called");
  }
  toggleRevealItem = (item:GridItem) => {
    item.revealed = !item.revealed;
  }



  createGrid = (seed:string) => {
    this.items = [];
    this.revealAll = false;
    this.targets = [];



    Randomizer.setSeed(seed);

    WordList.getRandomWords(20).forEach(desc=>{
      this.items.push({description:desc,team:"Not Set",revealed:false})
    })
    console.log(this.items);

    const generateTargets = () => {
      let indices = new Array(20).fill(0).map((val,index)=>index);
      indices = Randomizer.shuffle(indices);
      const teams = ["Red","Blue"];
      const team = Randomizer.elementFromArray(teams);
      const numReds = team == "Red"?8:7;
      const numBlues = team == "Blue"?8:7;
      const reds = indices.splice(0,numReds);
      const blues = indices.splice(0,numBlues);
      const civilians = indices.splice(0,4);
      const assassin = indices[0];
      
      reds.forEach(index=>this.items[index].team="Red");
      blues.forEach(index=>this.items[index].team="Blue");
      civilians.forEach(index=>this.items[index].team="Gray");
      this.items[assassin].team="Black";
    }

    generateTargets();
  }

  setSeed = (seed:string) => {
    console.log("setSeed",seed);
    this.createGrid(seed);
    this.seed=seed;
  }

  

  constructor() {

    const generateInitialSeed = () => {
      const timeBasedSeed = Randomizer.generateSeedFromTime();
      Randomizer.setSeed(timeBasedSeed);
      const friendlySeed = WordList.getRandomWords(2).join("");
      return friendlySeed
    }

    this.setSeed(generateInitialSeed());

    
    
    
  }

  ngOnInit() {
  }

}
