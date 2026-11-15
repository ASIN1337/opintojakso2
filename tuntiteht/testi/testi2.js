"use strict";

const students = ["student1", "student2", "student3"];

const kohde = document.getElementById("target")

for(var i = 0; i < students.length; i++);
var vaihtoehto = document.createElement("option");
vaihtoehto.innerHTML = students[i];
vaihtoehto.value = students[i];
kohde.appendChild(vaihtoehto);