// var words = ["apple", "banana", "cherry"];
// var word = words[Math.floor(Math.random() * words.length)];
// document.getElementById("word").innerHTML = word;

// function check() {
//   var input = document.getElementById("input").value;
//   if (input == word) {
//     document.getElementById("result").innerHTML = "Correct!";
//   } else {
//     document.getElementById("result").innerHTML = "Incorrect.";
//   }
// }


// var words = [{word: "apple", hint: "A common red or green fruit"}, {word: "banana", hint: "A long curved fruit with yellow skin when ripe"}, {word: "cherry", hint: "A small round fruit with a smooth red or black skin"}];
// var wordHint = words[Math.floor(Math.random() * words.length)];
// document.getElementById("word").innerHTML = wordHint.hint;
// var word = wordHint.word;

// function check() {
//   var input = document.getElementById("input").value;
//   if (input == word) {
//     document.getElementById("result").innerHTML = "Correct!";
//   } else {
//     document.getElementById("result").innerHTML = "Incorrect.";
//   }
// }




//use this
// var words = [{word: "apple", hint: "A common red or green fruit"}, {word: "banana", hint: "A long curved fruit with yellow skin when ripe"}, {word: "cherry", hint: "A small round fruit with a smooth red or black skin"}];
// var wordHint = words[Math.floor(Math.random() * words.length)];
// document.getElementById("word").innerHTML = wordHint.hint;
// var word = wordHint.word;
// var currentIndex = 0;

// function check() {
//   var input = document.getElementById("input").value;
//   if (input == word) {
//     document.getElementById("result").innerHTML = "Correct!";
//     currentIndex++;
//     if (currentIndex === words.length) {
//       document.getElementById("result").innerHTML = "You have completed the game";
//       currentIndex = 0;
//       wordHint = words[Math.floor(Math.random() * words.length)];
//       word = wordHint.word;
//       document.getElementById("word").innerHTML = wordHint.hint;
//       document.getElementById("input").value = "";
//       return
//     }
//     wordHint = words[currentIndex];
//     word = wordHint.word;
//     document.getElementById("word").innerHTML = wordHint.hint;
//     document.getElementById("input").value = "";
//   } else {
//     document.getElementById("result").innerHTML = "Incorrect.";
//   }
//   setTimeout(function(){ document.getElementById("result").innerHTML = ""; }, 4000);
// }


// var words = [{word: "apple", hint: "A common red or green fruit"}, {word: "banana", hint: "A long curved fruit with yellow skin when ripe"}, {word: "cherry", hint: "A small round fruit with a smooth red or black skin"}];
// var wordHint = words[Math.floor(Math.random() * words.length)];
// document.getElementById("word").innerHTML = wordHint.hint;
// var word = wordHint.word;
// var currentIndex = 0;

// function check() {
//   var input = document.getElementById("input").value;
//   if (input == word) {
//     document.getElementById("result").innerHTML = "Correct!";
//     currentIndex++;
//     if (currentIndex === words.length) {
//       document.getElementById("result").innerHTML = "You have completed the game";
//       return
//     }
//     wordHint = words[currentIndex];
//     word = wordHint.word;
//     document.getElementById("word").innerHTML = wordHint.hint;
//     document.getElementById("input").value = "";
//   } else {
//     document.getElementById("result").innerHTML = "Incorrect.";
//   }
//   document.getElementById("result").innerHTML = "";
// }






// var words = [{word: "apple", hint: "A common red or green fruit"}, {word: "banana", hint: "A long curved fruit with yellow skin when ripe"}, {word: "cherry", hint: "A small round fruit with a smooth red or black skin"}];
// var wordHint = words[Math.floor(Math.random() * words.length)];
// document.getElementById("word").innerHTML = wordHint.hint;
// var word = wordHint.word;
// var currentIndex = 0;

// function check() {
//   var input = document.getElementById("input").value;
//   if (input == word) {
//     document.getElementById("result").innerHTML = "Correct!";
//     currentIndex++;
//     if (currentIndex === words.length) {
//       document.getElementById("result").innerHTML = "You have completed the game";
//       return
//     }
//     wordHint = words[currentIndex];
//     word = wordHint.word;
//     document.getElementById("word").innerHTML = wordHint.hint;
//     document.getElementById("input").value = "";
//   } else {
//     document.getElementById("result").innerHTML = "Incorrect.";
//   }
//   setTimeout(function(){ document.getElementById("result").innerHTML = ""; }, 4000);
// }



var words = [{word: "apple", hint: "A common red or green fruit"}, {word: "banana", hint: "A long curved fruit with yellow skin when ripe"}, {word: "cherry", hint: "A small round fruit with a smooth red or black skin"},{word: "orange", hint: " fruit with a bright orange skin and a tart-sweet flavor"}];
var wordHint = words[Math.floor(Math.random() * words.length)];
document.getElementById("word").innerHTML = wordHint.hint;
var word = wordHint.word;
var currentIndex = 0;

function check() {
  var input = document.getElementById("input").value;
  if (input == word) {
    document.getElementById("result").innerHTML = "Correct!";
    currentIndex++;
    if (currentIndex === words.length) {
      document.getElementById("result").innerHTML = "You have completed the game";
      currentIndex = 0;
      
      wordHint = words[Math.floor(Math.random() * words.length)];
      word = wordHint.word;
      document.getElementById("word").innerHTML = wordHint.hint;
       setTimeout(function(){ document.getElementById("result").innerHTML = ""; }, 1000);
      document.getElementById("input").value = "";
      return
    }
    wordHint = words[currentIndex];
    word = wordHint.word;
    document.getElementById("word").innerHTML = wordHint.hint;
    document.getElementById("input").value = "";
  } else {
    document.getElementById("result").innerHTML = "Incorrect.";
  }
  setTimeout(function(){ document.getElementById("result").innerHTML = ""; }, 1000);
}











