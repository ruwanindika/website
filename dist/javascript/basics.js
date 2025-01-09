// const myButton = document.getElementById("myButton");
// myButton.addEventListener("click", function() {
//   // add your JavaScript code here
//   let d = new Date();
//     alert("Today's date is " + d);
// });

var index = 1;

var firstTime = false;

function myFunction() {
  let prevImageNumber=1;
  
  if (firstTime) {
    document.getElementById("book-img").src =
      "./images/pages/sinhala-book-papaerback-1.5.1.jpeg";
  } else {
    
    index = getRandomInt(27);
    if (prevImageNumber==index){
      index = index + 1
    }
    document.getElementById("book-img").src =
      "./images/pages/sinhala-book-papaerback-1.5." + index + ".jpeg";
    prevImageNumber = index
  }

  firstTime = false;
}

function getRandomInt(max) {
  var myNum = Math.floor(Math.random() * max);

  if (myNum == 0) {
    myNum = 1;
  }

  return myNum;
}
