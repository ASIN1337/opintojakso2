const luvut = []

while (true) {
    let luku = prompt("anna luku: ")
    if (luvut.includes(luku)) {
        console.log("luku on annettu jo")
        break
    }
    luvut.push(luku)
}

luvut.sort((a, b) => a - b)

console.log(luvut)  