import * as _ from "lodash";

console.log("emoji loaded");
// document.write('<script src="https://twemoji.maxcdn.com/twemoji.min.js"></script>');
    
var faces = _.range(128513,128592);
var transport = _.range(128640,128704)	
var food = _.range(parseInt("1F354",16),parseInt("1F373",16));
var activities = _.range(parseInt("1F3A3",16),parseInt("1F3CA",16));
var critters = _.range(parseInt("1F40C",16),parseInt("1F43E",16));
var morefaces = _.range(parseInt("1F466",16),parseInt("1F488",16));
var actionPacked = _.range(parseInt("1F525",16),parseInt("1F529",16))

var ultron:Array<any> = [];

// ultron = ultron.concat(faces);

ultron = ultron.concat(morefaces);		
// ultron = _.shuffle(ultron);		
ultron = ultron.concat(critters);		
// ultron = _.shuffle(ultron);		
ultron = ultron.concat(activities);		
// ultron = _.shuffle(ultron);		
// ultron = ultron.concat(transport);		
// ultron = _.shuffle(ultron);
ultron = ultron.concat(food);
// ultron = _.shuffle(ultron);
let removals:Array<any> = [
    "1F3C5","1F3B0","1F3A6","1F6BB","1F6BD","1F379","1F37A","1F37B","1F377","1F459","1F4A9",'1F489','1F46C','1F46D'
]
removals = removals.map(v=>parseInt(v,16));
ultron = _.compact(_.without(ultron,...removals))

ultron = ultron.map(code => {
    return code.toString(16);
})

export const Emoji = {
    ultron:ultron
}