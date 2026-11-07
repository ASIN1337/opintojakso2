const luvut = []


while (true) {
    let a = prompt("anna numero ja kun olet valmis syötä numero nolla: ");
    a = Number.parseInt(a);
    if (a == 0) {
        break
    }
    luvut.push(a)
}

luvut.sort((a, b) => a - b );
luvut.reverse();

var lista = " ";
for (var i=0; i<luvut.length; i++) {
    lista += "<ul>" + luvut[i] + "</ul>";
}

luvut.sort((a, b) => a - b);
luvut.reverse();

document.getElementById("lista").innerHTML = lista;

console.log(luvut)
