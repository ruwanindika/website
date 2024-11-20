// const myButton = document.getElementById("myButton");
// myButton.addEventListener("click", function() {
//   // add your JavaScript code here
//   let d = new Date();
//     alert("Today's date is " + d);
// });

var index = 1;

var firstTime = true;

function myFunction() {
  let prevImageNumber=1;
  
  if (firstTime) {
    document.getElementById("book-img").src =
      "./images/pages/Sinhala-for-kids-1.jpg";
  } else {
    
    index = getRandomInt(27);
    if (prevImageNumber==index){
      index = index + 1
    }
    document.getElementById("book-img").src =
      "./images/pages/Sinhala-for-kids-" + index + ".jpg";
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
