

const numerot = [];
const uudetnumerot = [];


for (let i = 0; i < 5; i++) {
   const luvut = prompt("anna luku: ");
   numerot.push(luvut)
}

for (let i = 0; i < 5; i++){
    const pvastainen = numerot.pop();
    uudetnumerot.push(pvastainen)
}

console.log(numerot);

document.querySelector("#tehtava").innerHTML = uudetnumerot
