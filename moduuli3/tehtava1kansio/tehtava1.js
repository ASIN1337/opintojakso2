

const numerot = [];
const uudetnumerot = [];


for (let i = 0; i < 5; i++) {
    numerot.push(prompt("anna luku: "))
}

function pvastainen () {
var uudetnumerot = [];
for (var i = numerot.length - 1; i >= 0; i--){
    uudetnumerot.push(numerot[i]);
}
return uudetnumerot;
}

pvastainen(numerot)

console.log(numerot);


