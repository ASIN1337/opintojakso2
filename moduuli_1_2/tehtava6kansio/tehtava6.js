
let numero=0;


let vahvistus = confirm("lasketaanko neliöjuuri? ");
if (vahvistus==true){
    numero = prompt("anna numero: ");
    let neliöjuuri = Math.sqrt(numero);

    if (numero>0){
        document.querySelector("#neliöjuuri").innerHTML = "numeron neliöjuuri on: " + neliöjuuri;
    }
    if (numero < 0){
        document.querySelector("#miinus").innerHTML = "negatiivisen luvun neliöjuurta ei ole määritelty"
    }
    if (numero==null){    
        document.querySelector("#kylläei").innerHTML = "neliöjuurta ei lasketa"
    }
} if (vahvistus==false){
    document.querySelector("#cei").innerHTML = "neliöjuurta ei lasketa"
}





console.log(numero)