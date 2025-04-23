function mathExampleGen() {
  // remove all rows of the tables if they are not empty
  // without this the tables doesn't refresh when  button is pushed
  if (document.getElementById("myTable") != "null") {
    var table = document.getElementById("myTable1");

    for (var i = table.rows.length - 1; i > 0; i--) {
      table.deleteRow(i);
    }

    var table = document.getElementById("myTable2");

    for (var i = table.rows.length - 1; i > 0; i--) {
      table.deleteRow(i);
    }
  }

  const max = document.getElementById("fname").value;
  const operation = document.getElementById("Operation").value;
  const objectList1 = [];
  const objectList2 = [];
  const numberOfObjects = 15;

  let numOne;
  let numTwo;
  let newObject1;
  let newObject2;

  for (let i = 0; i < numberOfObjects; i++) {
    numOne1 = Math.floor(Math.random() * max);
    numTwo1 = Math.floor(Math.random() * numOne1);

    numOne2 = Math.floor(Math.random() * max);
    numTwo2 = Math.floor(Math.random() * numOne2);

    if (operation === "addition") {
      newObject1 = {
        date: numOne1 + " + " + numTwo1 + " =   _______",
        name: numOne2 + " + " + numTwo2 + " = _______",
      };

      newObject2 = {
        date: numOne1 + " + " + numTwo1 + "   =   " + (numOne1 + numTwo1),
        name: numOne2 + " + " + numTwo2 + "   =   " + (numOne2 + numTwo2),
      };
    } else if (operation === "substraction") {
      newObject1 = {
        date: numOne1 + " - " + numTwo1 + " =   _______",
        name: numOne2 + " - " + numTwo2 + " = _______",
      };

      newObject2 = {
        date: numOne1 + " - " + numTwo1 + "   =   " + (numOne1 - numTwo1),
        name: numOne2 + " - " + numTwo2 + "   =   " + (numOne2 - numTwo2),
      };
    } else {
      newObject1 = {
        date: numOne1 + " - " + numTwo1 + " =   _______",
        name: numOne2 + " - " + numTwo2 + " = _______",
      };

      newObject2 = {
        date: numOne1 + " - " + numTwo1 + "   =   " + (numOne1 - numTwo1),
        name: numOne2 + " - " + numTwo2 + "   =   " + (numOne2 - numTwo2),
      };
    }

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
}
