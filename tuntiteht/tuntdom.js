let timerID = null;


function startMakingBoxes (){
    console.log("starting making boxes..");
    timerID = setInterval(timedAction, 2000);
}

function stopMakingBoxes (){
    console.log("stopping making boxes...");
    clearInterval(timerID);
}

function deleteBox(evt){
    let parentDiv = evt.currentTarget.parentElement;
    parentDiv.removeChild(evt.currentTarget);
}

function timedAction() {
    let boxDiv= document.querySelector(".box");


let newPara = document.createElement("p");
newPara.textContent = "boxiboxi";
newPara.setAttribute("class", "div-green");
newPara.addEventListener("click", deleteBox)

boxDiv.appendChild(newPara);


}

let startButton = document.getElementById("start");
startButton.addEventListener("click", startMakingBoxes);

let endButton = document.getElementById("end");
endButton.addEventListener("click", stopMakingBoxes);

let paragraphs =document.getElementsByTagName("p");
console.log(paragraphs)

