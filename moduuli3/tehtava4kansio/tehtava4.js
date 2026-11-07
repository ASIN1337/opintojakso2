const luvut = []

const kysymys = prompt("anna luku ja kun olet valmis syötä luku nolla: ")

while (true) {
    let a = prompt("anna numero ja kun olet valmis syötä numero nolla: ");
    a = Number.parseInt(a);
    if (a == 0) {
        break
    }
    luvut.push(a)
}

luvut.sort().reverse()

var lista = " ";
for (var i=0; i<luvut.length; i++) {
    lista += "<ul>" + luvut[i] + "</ul>";
}

luvut.sort().reverse()

document.getElementById("lista").innerHTML = lista;

console.log(luvut)
