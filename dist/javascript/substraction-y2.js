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

  let newObject1;
  let newObject2;

  function mathTextGen(max, operation) {
    numOne1 = Math.floor(Math.random() * max);
    numOne2 = Math.floor(Math.random() * max);

    if (operation === "addition") {
      numTwo1 = Math.floor(Math.random() * max);
      numTwo2 = Math.floor(Math.random() * max);

      newObject1 = {
        column1: numOne1 + " + " + numTwo1 + " =   _______",
        column2: numOne2 + " + " + numTwo2 + " = _______",
      };

      newObject2 = {
        column1: numOne1 + " + " + numTwo1 + "   =   " + (numOne1 + numTwo1),
        column2: numOne2 + " + " + numTwo2 + "   =   " + (numOne2 + numTwo2),
      };
    } else if (operation === "substraction") {
      numTwo1 = Math.floor(Math.random() * numOne1);
      numTwo2 = Math.floor(Math.random() * numOne2);

      newObject1 = {
        column1: numOne1 + " - " + numTwo1 + " =   _______",
        column2: numOne2 + " - " + numTwo2 + " = _______",
      };

      newObject2 = {
        column1: numOne1 + " - " + numTwo1 + "   =   " + (numOne1 - numTwo1),
        column2: numOne2 + " - " + numTwo2 + "   =   " + (numOne2 - numTwo2),
      };
    } else if (operation === "multiplication") {
      numTwo1 = Math.floor(Math.random() * max);
      numTwo2 = Math.floor(Math.random() * max);

      newObject1 = {
        column1: numOne1 + " x " + numTwo1 + " =   _______",
        column2: numOne2 + " x " + numTwo2 + " = _______",
      };

      newObject2 = {
        column1: numOne1 + " x " + numTwo1 + "   =   " + numOne1 * numTwo1,
        column2: numOne2 + " x " + numTwo2 + "   =   " + numOne2 * numTwo2,
      };
    } else if (operation === "division") {
      let numDiv1 = Math.floor(Math.random() * max) + 1;
      let numDiv2 = Math.floor(Math.random() * max) + 1;

      numOne1 = (Math.floor(Math.random() * max) + 1) * numDiv1;
      numOne2 = (Math.floor(Math.random() * max) + 1) * numDiv2;

      numTwo1 = numDiv1;
      numTwo2 = numDiv2;

      newObject1 = {
        column1: numOne1 + " ÷ " + numTwo1 + " =   _______",
        column2: numOne2 + " ÷ " + numTwo2 + " = _______",
      };

      newObject2 = {
        column1: numOne1 + " ÷ " + numTwo1 + "   =   " + numOne1 / numTwo1,
        column2: numOne2 + " ÷ " + numTwo2 + "   =   " + numOne2 / numTwo2,
      };
    }

    return [newObject1, newObject2];
  }

  for (let i = 0; i < numberOfObjects; i++) {
    if (operation === "addition") {
      [newObject1, newObject2] = mathTextGen(max, "addition");
    } else if (operation === "substraction") {
      [newObject1, newObject2] = mathTextGen(max, "substraction");
    } else if (operation === "multiplication") {
      [newObject1, newObject2] = mathTextGen(max, "multiplication");
    } else if (operation === "division") {
      [newObject1, newObject2] = mathTextGen(max, "division");
    } else {
      [newObject1, newObject2] = mathTextGen(max, "substraction");
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
      let column1 = row.insertCell(0);
      column1.innerHTML = item.column1;
      let column2 = row.insertCell(1);
      column2.innerHTML = item.column2;
    });
  }
  loadTableData(items1, "testBody1");
  loadTableData(items2, "testBody2");
}

function setDefaultMax() {
  const operation = document.getElementById("Operation").value;
  const defaultMax = document.getElementById("fname");

  if (operation === "multiplication") {
    defaultMax.value = 12;
  } else if (operation === "addition") {
    defaultMax.value = 100;
  } else if (operation === "substraction") {
    defaultMax.value = 100;
  } else if (operation === "division") {
    defaultMax.value = 12;
  }
}
