'use strict';

const kohde = document.getElementById("target");
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

for (const student of students) {
  let vaihtoehto = document.createElement("option");
  vaihtoehto.textContent = `${student.name}`;
  vaihtoehto.value = `${student.id}`;
  kohde.appendChild(vaihtoehto);

}

