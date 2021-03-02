// Author LR 3/2/2021 

let charName = "Julius";

console.log (`Welcome to the game ${charName}!`);

var ATK = 10
var DEF = 26
var ENE = 2

let class1 = `Jedi`
let class2 = `Bounty Hunter`
let class3 = `Sith`

let atkJedi = ATK * 2; let defJedi = DEF * 3; let spJedi = `Jedi Mind Trick`
let atkBounty = ATK + 2 / ENE; 
if (ENE > 3) {
let defBounty = DEF - 5
} else {
let defBounty = DEF
};
let spBounty = `Jetpack`;
let atkSith = ATK ** ENE; 
if (class3 == class1){
let defSith = DEF - 1/2
} else {
let defSith = DEF - 1/4
};
let spSith = `Force Choke`

var opATK = 5
var opDEF = 10

if (atkJedi || atkBounty || atkSith && defJedi || defBounty || defSith > opATK){
console.log (`${charName} won!`)
} else {
    console.log (`${charName} fainted!`)
};
