
const nimet = []

const lukumaara = prompt("anna osallistujien lukumäärä: ")

for (let i = 0; i < lukumaara; i++) {
    nimet.push(prompt("anna osallistujien nimet: "))
}

nimet.sort()

var html = " ";
for(var i=0; i<nimet.length; i++) {
    html += "<li>" + nimet[i] + "</li>"; 
}

document.getElementById("tehtava").innerHTML = html;
    
nimet.sort()

console.log(html)

