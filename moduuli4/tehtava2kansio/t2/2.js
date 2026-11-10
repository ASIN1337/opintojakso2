const listaUL = document.createElement("ul");

const esine1 = document.createElement("li");
const esine2 = document.createElement("li");
const esine3 = document.createElement("li");

esine1.textContent = "first item";
esine2.textContent = "second item";
esine3.textContent = "third item";

listaUL.appendChild(esine1);
listaUL.appendChild(esine2);
listaUL.appendChild(esine3);

document.getElementById("target").appendChild(listaUL)