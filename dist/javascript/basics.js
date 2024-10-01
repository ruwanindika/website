// const myButton = document.getElementById("myButton");
// myButton.addEventListener("click", function() {
//   // add your JavaScript code here
//   let d = new Date();
//     alert("Today's date is " + d);
// });


var index = 1

var firstTime = true

function myFunction() {

    if (firstTime) {
        document.getElementById("book-img").src = './images/pages/Sinhala-for-kids-1.jpg';

    } else {
    index = getRandomInt(27)
    document.getElementById("book-img").src = './images/pages/Sinhala-for-kids-'+index+'.jpg';
    }


    firstTime = false
    
}

function getRandomInt(max) {
    var myNum = Math.floor(Math.random() * max);

    if (myNum==0)
    {myNum = 1}

    return myNum
  }


