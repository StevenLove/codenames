import { Randomizer } from "./Randomizer";
import { GridItem } from "./GridItem";
import { WordList } from "./WordList";

export class Grid{
    targets: GridItem[] = [];
    items: GridItem[] = [];

    create= () => {
        this.items = [];
        this.targets = [];
    

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
    
    toggleRevealItem = (item:GridItem) => {
        item.revealed = !item.revealed;
    }

}