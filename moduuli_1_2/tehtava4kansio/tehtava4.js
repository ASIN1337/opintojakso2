
const käyttäjänimi = prompt("anna nimi: ");
tupa = Math.floor(Math.random() * 4) + 1;
if (tupa==1){
    document.querySelector("#teksti").innerHTML = käyttäjänimi + "," + " " + "sinä olet " + "Rohkelikko"
}
if (tupa==2){
    document.querySelector("#teksti").innerHTML = käyttäjänimi + "," + " " + "sinä olet " + "Luihuinen"
}
if (tupa==3){
    document.querySelector("#teksti").innerHTML = käyttäjänimi + "," + " " + "sinä olet " + "Puuskupuh"
}
if (tupa==4){
    document.querySelector("#teksti").innerHTML = käyttäjänimi + "," + " " + "sinä olet " + "Korpinkynsi"
}



