const max = 200;
const objectList1 = [];
const objectList2 = [];
const numberOfObjects = 15;

let numOne1;
let numTwo1;
let numOne2;
let numTwo2;

for (let i = 0; i < numberOfObjects; i++) {
  numOne1 = Math.floor(Math.random() * max + 1);
  numTwo1 = Math.floor(Math.random() * (numOne1 - 1));

  numOne2 = Math.floor(Math.random() * max + 1);
  numTwo2 = Math.floor(Math.random() * (numOne2 - 1));

  const newObject1 = {
    date: numOne1 + " - " + numTwo1 + " =   _______",
    name: numOne2 + " - " + numTwo2 + " = _______",
  };

  const newObject2 = {
    date: numOne1 + " - " + numTwo1 + "   =   " + (numOne1 - numTwo1),
    name: numOne2 + " - " + numTwo2 + "   =   " + (numOne2 - numTwo2),
  };
  objectList1.push(newObject1);
  objectList2.push(newObject2);
}

const items1 = objectList1;
const items2 = objectList2;

function loadTableData(items, id) {
  const table = document.getElementById(id);
  items.forEach((item) => {
    let row = table.insertRow();
    let date = row.insertCell(0);
    date.innerHTML = item.date;
    let name = row.insertCell(1);
    name.innerHTML = item.name;
  });
}
loadTableData(items1, "testBody1");
loadTableData(items2, "testBody2");
loadTableData([]);
