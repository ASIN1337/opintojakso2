
const koirat = []

for (let i=0; i < 6; i++){
    koirat.push(prompt("anna koiran nimi: "))
}

koirat.sort().reverse()

var lista = " ";
for (var i=0; i<koirat.length; i++) {
    lista += "<ul>" + koirat[i] + "</ul>";
}

document.getElementById("lista").innerHTML = lista;

koirat.sort().reverse()

console.log(koirat)