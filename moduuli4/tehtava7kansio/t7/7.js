var kuva = document.querySelector("#target");

kuva.addEventListener(`mouseover`, function(){
    kuva.src = "img/picB.jpg"
})

kuva.addEventListener(`mouseout`, function(){
    kuva.src = "img/picA.jpg"
})
