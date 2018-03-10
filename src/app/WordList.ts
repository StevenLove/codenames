import { Randomizer } from "./Randomizer";


const codenamesList: string[] = [
    "Hollywood",
    "Well",
    "Foot",
    "New York",
    "Spring",
    "Court",
    "Tube",
    "Point",
    "Tablet",
    "Slip",
    "Date",
    "Drill",
    "Lemon",
    "Bell",
    "Screen",
    "Fair",
    "Torch",
    "State",
    "Match",
    "Iron",
    "Block",
    "France",
    "Australia",
    "Limousine",
    "Stream",
    "Glove",
    "Nurse",
    "Leprechaun",
    "Play",
    "Tooth",
    "Arm",
    "Bermuda",
    "Diamond",
    "Whale",
    "Comic",
    "Mammoth",
    "Green",
    "Pass",
    "Missile",
    "Paste",
    "Drop",
    "Pheonix",
    "Marble",
    "Staff",
    "Figure",
    "Park",
    "Centaur",
    "Shadow",
    "Fish",
    "Cotton",
    "Egypt",
    "Theater",
    "Scale",
    "Fall",
    "Track",
    "Force",
    "Dinosaur",
    "Bill",
    "Mine",
    "Turkey",
    "March",
    "Contract",
    "Bridge",
    "Robin",
    "Line",
    "Plate",
    "Band",
    "Fire",
    "Bank",
    "Boom",
    "Cat",
    "Shot",
    "Suit",
    "Chocolate",
    "Roulette",
    "Mercury",
    "Moon",
    "Net",
    "Lawyer",
    "Satellite",
    "Angel",
    "Spider",
    "Germany",
    "Fork",
    "Pitch",
    "King",
    "Crane",
    "Trip",
    "Dog",
    "Conductor",
    "Part",
    "Bugle",
    "Witch",
    "Ketchup",
    "Press",
    "Spine",
    "Worm",
    "Alps",
    "Bond",
    "Pan",
    "Beijing",
    "Racket",
    "Cross",
    "Seal",
    "Aztec",
    "Maple",
    "Parachute",
    "Hotel",
    "Berry",
    "Soldier",
    "Ray",
    "Post",
    "Greece",
    "Square",
    "Mass",
    "Bat",
    "Wave",
    "Car",
    "Smuggler",
    "England",
    "Crash",
    "Tail",
    "Card",
    "Horn",
    "Capital",
    "Fence",
    "Deck",
    "Buffalo",
    "Microscope",
    "Jet",
    "Duck",
    "Ring",
    "Train",
    "Field",
    "Gold",
    "Tick",
    "Check",
    "Queen",
    "Strike",
    "Kangaroo",
    "Spike",
    "Scientist",
    "Engine",
    "Shakespeare",
    "Wind",
    "Kid",
    "Embassy",
    "Robot",
    "Note",
    "Ground",
    "Draft",
    "Ham",
    "War",
    "Mouse",
    "Center",
    "Chick",
    "China",
    "Bolt",
    "Spot",
    "Piano",
    "Pupil",
    "Plot",
    "Lion",
    "Police",
    "Head",
    "Litter",
    "Concert",
    "Mug",
    "Vacuum",
    "Atlantis",
    "Straw",
    "Switch",
    "Skyscraper",
    "Laser",
    "Scuba Diver",
    "Africa",
    "Plastic",
    "Dwarf",
    "Lap",
    "Life",
    "Honey",
    "Horseshoe",
    "Unicorn",
    "Spy",
    "Pants",
    "Wall",
    "Paper",
    "Sound",
    "Ice",
    "Tag",
    "Web",
    "Fan",
    "Orange",
    "Temple",
    "Canada",
    "Scorpion",
    "Undertaker",
    "Mail",
    "Europe",
    "Soul",
    "Apple",
    "Pole",
    "Tap",
    "Mouth",
    "Ambulance",
    "Dress",
    "Ice Cream",
    "Rabbit",
    "Buck",
    "Agent",
    "Sock",
    "Nut",
    "Boot",
    "Ghost",
    "Oil",
    "Superhero",
    "Code",
    "Kiwi",
    "Hospital",
    "Saturn",
    "Film",
    "Button",
    "Snowman",
    "Helicopter",
    "Loch Ness",
    "Log",
    "Princess",
    "Time",
    "Cook",
    "Revolution",
    "Shoe",
    "Mole",
    "Spell",
    "Grass",
    "Washer",
    "Game",
    "Beat",
    "Hole",
    "Horse",
    "Pirate",
    "Link",
    "Dance",
    "Fly",
    "Pit",
    "Server",
    "School",
    "Lock",
    "Brush",
    "Pool",
    "Star",
    "Jam",
    "Organ",
    "Berlin",
    "Face",
    "Luck",
    "Amazon",
    "Cast",
    "Gas",
    "Club",
    "Sink",
    "Water",
    "Chair",
    "Shark",
    "Jupiter",
    "Copper",
    "Jack",
    "Platypus",
    "Stick",
    "Olive",
    "Grace",
    "Bear",
    "Glass",
    "Row",
    "Pistol",
    "London",
    "Rock",
    "Van",
    "Vet",
    "Beach",
    "Charge",
    "Port",
    "Disease",
    "Palm",
    "Moscow",
    "Pin",
    "Washington",
    "Pyramid",
    "Opera",
    "Casino",
    "Pilot",
    "String",
    "Night",
    "Chest",
    "Yard",
    "Teacher",
    "Pumpkin",
    "Thief",
    "Bark",
    "Bug",
    "Mint",
    "Cycle",
    "Telescope",
    "Calf",
    "Air",
    "Box",
    "Mount",
    "Thumb",
    "Antarctica",
    "Trunk",
    "Snow",
    "Penguin",
    "Root",
    "Bar",
    "File",
    "Hawk",
    "Battery",
    "Compound",
    "Slug",
    "Octopus",
    "Whip",
    "America",
    "Ivory",
    "Pound",
    "Sub",
    "Cliff",
    "Lab",
    "Eagle",
    "Genius",
    "Ship",
    "Dice",
    "Hood",
    "Heart",
    "Novel",
    "Pipe",
    "Himalayas",
    "Crown",
    "Round",
    "India",
    "Needle",
    "Shop",
    "Watch",
    "Lead",
    "Tie",
    "Table",
    "Cell",
    "Cover",
    "Czech",
    "Back",
    "Bomb",
    "Ruler",
    "Forest",
    "Bottle",
    "Space",
    "Hook",
    "Doctor",
    "Ball",
    "Bow",
    "Degree",
    "Rome",
    "Plane",
    "Giant",
    "Nail",
    "Dragon",
    "Stadium",
    "Flute",
    "Carrot",
    "Wake",
    "Fighter",
    "Model",
    "Tokyo",
    "Eye",
    "Mexico",
    "Hand",
    "Swing",
    "Key",
    "Alien",
    "Tower",
    "Poison",
    "Cricket",
    "Cold",
    "Knife",
    "Church",
    "Board",
    "Cloak",
    "Ninja",
    "Olympus",
    "Belt",
    "Light",
    "Death",
    "Stock",
    "Millionaire",
    "Day",
    "Knight",
    "Pie",
    "Bed",
    "Circle",
    "Rose",
    "Change",
    "Cap",
    "Triangle"
]

const undercoverList: string[] = [
    "Horse",
    "Sauna",
    "Hooker",
    "Stool",
    "Mouth",
    "Touchdown",
    "Snake",
    "Whiskey",
    "Pickle",
    "Hose",
    "Legend",
    "Blush",
    "Dick",
    "Cock",
    "Alcohol",
    "Sausage",
    "Pecker",
    "Straight",
    "Sore",
    "Toy",
    "Black",
    "White",
    "Period",
    "Couch",
    "Juice",
    "Bra",
    "Dame",
    "Chick",
    "Bitch",
    "Score",
    "Sheep",
    "Strap",
    "Mattress",
    "Train",
    "Bondage",
    "Wiener",
    "Penis",
    "Furry",
    "Joystick",
    "Apples",
    "Condom",
    "Bisexual",
    "Hole",
    "Secretary",
    "Roll",
    "Strip",
    "Freak",
    "Tramp",
    "Foreskin",
    "Wine",
    "Pee",
    "Experiment",
    "Johnson",
    "Banana",
    "Clam",
    "Blow",
    "Balloon",
    "Semen",
    "Regret",
    "Stripper",
    "Homerun",
    "Trim",
    "Bar",
    "Wood",
    "Paddle",
    "Cowgirl",
    "John",
    "Candle",
    "Cigarette",
    "Cigar",
    "Knob",
    "Sex",
    "Gang",
    "Stud",
    "Screw",
    "Trousers",
    "Safe",
    "Girl",
    "Package",
    "Grope",
    "Jewels",
    "Beach",
    "Chubby",
    "Beef",
    "Bender",
    "Shaft",
    "Peaches",
    "Swallow",
    "Flower",
    "Trunk",
    "Sack",
    "Job",
    "Onion",
    "Bowl",
    "Jerk",
    "Crap",
    "Bush",
    "Box",
    "Mushroom",
    "Shame",
    "Couple",
    "Sweat",
    "Strobe",
    "Tubesteak",
    "Rug",
    "Butt",
    "Nylon",
    "Lick",
    "Hotel",
    "Boy",
    "Boob",
    "Biscuits",
    "Fatty",
    "Share",
    "Slut",
    "Swimmers",
    "Pound",
    "Tuna",
    "Roach",
    "Brownie",
    "Nuts",
    "Blonde",
    "Horny",
    "Catcher",
    "Body",
    "Dominate",
    "Mole",
    "Shave",
    "Orgasm",
    "Taboo",
    "Roof",
    "Twig",
    "Red",
    "Lube",
    "Nude",
    "Eat",
    "Hooters",
    "Legs",
    "Behind",
    "Olive",
    "Brown",
    "Shower",
    "Oyster",
    "Taco",
    "Salad",
    "Udders",
    "Rave",
    "Inch",
    "Nipple",
    "Gay",
    "High",
    "Booze",
    "Beaver",
    "Pussy",
    "Ice",
    "Skank",
    "Melons",
    "Tail",
    "Rack",
    "Uranus",
    "Queer",
    "Lingerie",
    "Needle",
    "Escort",
    "Herb",
    "Bear",
    "Beans",
    "Log",
    "Hamster",
    "Skirt",
    "Gigolo",
    "Tap",
    "Pie",
    "Vasectomy",
    "Queen",
    "Group",
    "Necklace",
    "Commando",
    "Headlights",
    "Ashes",
    "Bacon",
    "Goose",
    "Pillows",
    "Smell",
    "Latex",
    "Tavern",
    "Smegma",
    "Vegas",
    "Queef",
    "Hot",
    "Navel",
    "Gag",
    "Headboard",
    "Bed",
    "Ass",
    "Caboose",
    "Carpet",
    "Smoke",
    "Cuffs",
    "Teabag",
    "Shot",
    "Vein",
    "Purple",
    "Gash",
    "Nail",
    "Hand",
    "Head",
    "Chaps",
    "Animal",
    "Coozie",
    "Fish",
    "Snatch",
    "Rookie",
    "Tease",
    "Snort",
    "Vibrator",
    "Pucker",
    "Film",
    "Mug",
    "Bang",
    "Hammer",
    "Grandma",
    "Grass",
    "Sniff",
    "Prick",
    "Tent",
    "Baked",
    "Video",
    "Pub",
    "G-Spot",
    "Movie",
    "Jazz",
    "Friction",
    "Eyes",
    "Drunk",
    "Softballs",
    "Kitty",
    "Tequila",
    "Bottom",
    "Vinyl",
    "Prostate",
    "Chains",
    "Motorboat",
    "Crabs",
    "French",
    "Hurl",
    "Cheek",
    "Solo",
    "Lizard",
    "Threesome",
    "Breast",
    "Virgin",
    "Prison",
    "Donkey",
    "Monkey",
    "Douche",
    "Freckles",
    "Bond",
    "Keg",
    "Spank",
    "Boxers",
    "Throat",
    "Pinch",
    "Vodka",
    "Pot",
    "Lips",
    "Mom",
    "Finger",
    "Fluff",
    "Bling",
    "Rectum",
    "Speed",
    "Missionary",
    "Tickle",
    "Sin",
    "Vomit",
    "Porn",
    "Cuddle",
    "Moist",
    "Manboobs",
    "Flash",
    "Dildo",
    "Cocktail",
    "Sperm",
    "Emission",
    "tie",
    "Diarrhea",
    "Wad",
    "Pork",
    "Bottle",
    "Mixer",
    "Crack",
    "Fist",
    "Club",
    "Cucumber",
    "Spoon",
    "Seed",
    "Tip",
    "Intern",
    "Wang",
    "Pole",
    "Champagne",
    "Milk",
    "Loose",
    "Fire",
    "Choke",
    "Noodle",
    "Spread",
    "Doggy",
    "Tit",
    "Beer",
    "Waste",
    "Poker",
    "Gerbil",
    "Member",
    "Bartender",
    "Fetish",
    "Bone",
    "Motel",
    "Squirt",
    "Lotion",
    "Tongue",
    "Flesh",
    "Watch",
    "Player",
    "Balls",
    "Meat",
    "Cream",
    "Fecal",
    "Rubber",
    "Kinky",
    "Stalker",
    "Bust",
    "Tool",
    "Skid",
    "Wax",
    "Pitcher",
    "Knees",
    "Martini",
    "Lobster",
    "Feather",
    "Booty",
    "Joint",
    "Steamy",
    "Mesh",
    "Top",
    "Facial",
    "Weed",
    "Pipe",
    "Cherry",
    "Lust",
    "Knockers",
    "Fantasy",
    "Hump",
    "Poop",
    "Stiff",
    "Nurse",
    "Torture",
    "Bong",
    "Wench",
    "Pink",
    "Gangbang",
    "Love",
    "Coyote",
    "Drill",
    "Acid",
    "Line",
    "Stiletto",
    "Turd",
    "Touch",
    "Daddy",
    "Wet",
    "Pimp",
    "Hell",
    "Liquor",
    "Burn",
    "Drag",
    "Cougar",
    "Briefs",
    "Stones",
    "Naked",
    "Orgy",
    "Chest",
    "Whip",
    "Pig",
    "Jugs",
    "Lighter",
    "Cannons",
    "Down",
    "Clap"
]

const duetList: string[] = [
    "Drum",
    "Bride",
    "Wagon",
    "Univerity",
    "Hit",
    "Ash",
    "Bass",
    "Astronaut",
    "Doll",
    "Nerve",
    "Coach",
    "Beam",
    "Spoon",
    "Country",
    "Nose",
    "King Arthur",
    "Stamp",
    "Camp",
    "Brain",
    "Leaf",
    "Tutu",
    "Coast",
    "Lunch",
    "Thunder",
    "Potato",
    "Desk",
    "Onion",
    "Elephant",
    "Anchor",
    "Cowboy",
    "Flood",
    "Mohawk",
    "Santa",
    "Pitcher",
    "Barbecue",
    "Leather",
    "Skates",
    "Musketeer",
    "Snap",
    "Saddle",
    "Genie",
    "Mark",
    "Shoulder",
    "Governor",
    "Manicure",
    "Anthem",
    "Halloween",
    "Newton",
    "Balloon",
    "Fiddle",
    "Craft",
    "Glacier",
    "Cake",
    "Rat",
    "Tank",
    "Blind",
    "Spirit",
    "Cable",
    "Swamp",
    "Einstein",
    "Hide",
    "Crystal",
    "Gear",
    "Kiss",
    "Pew",
    "Powder",
    "Turtle",
    "Bacon",
    "Sherlock",
    "Squash",
    "Book",
    "Razor",
    "Dressing",
    "Brick",
    "Brazil",
    "Tear",
    "Stable",
    "Bikini",
    "Pen",
    "Roll",
    "Christmas",
    "Rubber",
    "Bay",
    "Mother",
    "Kick",
    "Fog",
    "Radio",
    "Crab",
    "Cone",
    "Skull",
    "Wheelchair",
    "Egg",
    "Butter",
    "Werewolf",
    "Cherry",
    "Patient",
    "Dryer",
    "Drawing",
    "Boss",
    "Fever",
    "Banana",
    "Polish",
    "Knot",
    "Paint",
    "Storm",
    "Goldilocks",
    "Pillow",
    "Chain",
    "Moses",
    "Saw",
    "Brother",
    "Rail",
    "Rope",
    "Street",
    "Pad",
    "Captain",
    "Wish",
    "Axe",
    "Shorts",
    "Popcorn",
    "Castle",
    "Second",
    "Team",
    "Oasis",
    "Mess",
    "Miss",
    "Avalanche",
    "Texas",
    "Sun",
    "Letter",
    "Rust",
    "Wing",
    "Steel",
    "Ear",
    "Scroll",
    "Bunk",
    "Cane",
    "Venus",
    "Ladder",
    "Purse",
    "Sheet",
    "Napoleon",
    "Sugar",
    "Director",
    "Ace",
    "Scratch",
    "Bucket",
    "Caesar",
    "Disk",
    "Beard",
    "Bulb",
    "Bench",
    "Scarecrow",
    "Igloo",
    "Tuxedo",
    "Earth",
    "Ram",
    "Sister",
    "Bread",
    "Record",
    "Dash",
    "Greenhouse",
    "Drone",
    "Steam",
    "Biscuit",
    "Rip",
    "Notre Dame",
    "Lip",
    "Shampoo",
    "Cheese",
    "Sack",
    "Mountie",
    "Sumo",
    "Sahara",
    "Walrus",
    "Dust",
    "Hammer",
    "Cloud",
    "Spray",
    "St.Patrick",
    "Kilt",
    "Monkey",
    "Frog",
    "Dentist",
    "Rainbow",
    "Whistle",
    "Reindeer",
    "Kitchen",
    "Lemonade",
    "Slipper",
    "Floor",
    "Valentine",
    "Pepper",
    "Road",
    "Shed",
    "Bowler",
    "Milk",
    "Wheel",
    "Magazine",
    "Brass",
    "Tea",
    "Helmet",
    "Flag",
    "Troll",
    "Jail",
    "Sticker",
    "Puppet",
    "Chalk",
    "Bonsai",
    "Sweat",
    "Gangster",
    "Butterfly",
    "Story",
    "Salad",
    "Armor",
    "Smoke",
    "Cave",
    "Quack",
    "Break",
    "Snake",
    "Mill",
    "Gymnast",
    "Wonderland",
    "Driver",
    "Spurs",
    "Zombie",
    "Pig",
    "Cleopatra",
    "Toast",
    "Penny",
    "Ant",
    "Volume",
    "Lace",
    "Battleship",
    "Maracas",
    "Meter",
    "Sling",
    "Delta",
    "Step",
    "Joan of Arc",
    "Comet",
    "Bath",
    "Polo",
    "Gum",
    "Vampire",
    "Ski",
    "Pocket",
    "Battle",
    "Foam",
    "Rodeo",
    "Squirrel",
    "Salt",
    "Mummy",
    "Blacksmith",
    "Chip",
    "Goat",
    "Laundry",
    "Bee",
    "Tattoo",
    "Russia",
    "Tin",
    "Map",
    "Yellowstone",
    "Silk",
    "Hose",
    "Sloth",
    "Kung Fu",
    "Clock",
    "Bean",
    "Lightning",
    "Bowl",
    "Guitar",
    "Ranch",
    "Pearl",
    "Flat",
    "Virus",
    "Ice Age",
    "Coffee",
    "Marathon",
    "Attic",
    "Wedding",
    "Columbus",
    "Pop",
    "Sherwood",
    "Trick",
    "Nylon",
    "Locust",
    "Pacific",
    "Cuckoo",
    "Tornado",
    "Memory",
    "Jockey",
    "Minotaur",
    "Big Bang",
    "Page",
    "Sphinx",
    "Crusader",
    "Volcano",
    "Rifle",
    "Boil",
    "Hair",
    "Bicycle",
    "Jumper",
    "Smoothie",
    "Sleep",
    "Pentagon",
    "Groom",
    "River",
    "Farm",
    "Judge",
    "Viking",
    "Easter",
    "Mud",
    "Parrot",
    "Comb",
    "Salsa",
    "Eden",
    "Army",
    "Paddle",
    "Saloon",
    "Mona Lisa",
    "Mile",
    "Blizzard",
    "Quarter",
    "Jeweler",
    "Hamburger",
    "Glasses",
    "Sail",
    "Boxer",
    "Rice",
    "Mirror",
    "Ink",
    "Beer",
    "Tipi",
    "Makeup",
    "Microwave",
    "Hercules",
    "Sign",
    "Pizza",
    "Wool",
    "Homer",
    "Minute",
    "Sword",
    "Soup",
    "Alaska",
    "Baby",
    "Potter",
    "Shower",
    "Blade",
    "Noah",
    "Soap",
    "Tunnel",
    "Peach",
    "Dollar",
    "Tip",
    "Love",
    "Jellyfish",
    "Stethoscope",
    "Taste",
    "Fuel",
    "Mosquito",
    "Wizard",
    "Big Ben",
    "Garden",
    "Waitress",
    "Shoot",
    "Shell",
    "Lumberjack",
    "Medic",
    "Dream",
    "Blues",
    "Earthquake",
    "Pea",
    "Parade",
    "Sled",
    "Smell",
    "Computer",
    "Cow",
    "Peanut",
    "Window",
    "Mustard",
    "Sand",
    "Golf",
    "Crow",
    "Iceland",
    "Apron",
    "Violet",
    "Door",
    "Tiger",
    "Joker",
    "House",
    "Collar",
    "Hawaii",
    "Dwarf",
    "Pine",
    "Magician",
    "Frost",
    "Curry",
    "Bubble",
    "Wood"
]


const getRandomWord = () => {
    return Randomizer.elementFromArray(list);
}

const getRandomWords = (n:number) => {
    const result = Randomizer.elementsFromArray(list,n);
    console.log("resulting words",result);
    console.log("and random number",Randomizer.intInRangeInclusive(0,1000))
    return result;
}
let list = codenamesList;

const useUnderCoverList = () => list = undercoverList;
const useDuetList = () => list = duetList;
const useCodenamesList = () => list = codenamesList



const getWordListName = () => {
    if(list == undercoverList)return "Codenames: Undercover";
    if(list == duetList) return "Codenames: Duet";
    return "Codenames";
}


export const WordList = {
    getRandomWords:getRandomWords,
    getRandomWord:getRandomWord,
    useCodenamesList:useCodenamesList,
    useDuetList:useDuetList,
    useUnderCoverList:useUnderCoverList,
    getWordListName:getWordListName
}