var numSquares = 6; //keep track of current mode
var colorsList = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(); //call pickColor function to generate random colors
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

for (var i = 0; i < modeBtns.length; i++) {
  modeBtns[i].addEventListener("click", function() {
    modeBtns[0].classList.remove("selected");
    modeBtns[1].classList.remove("selected");
    this.classList.add("selected");

  //figure out how many squares to show
  //pick new colors
  //pick a new pickedColor
  //update page to reflect changes
  });
}

function reset() {

}
/*//EASY BUTTON
easyBtn.addEventListener("click", function() {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  //when clicked, generate 3 random colors
  colorsList = generateRandomColors(numSquares);
  //grab the 3 colors
  pickedColor = pickColor();
  //change rgb display to reflect the new picked color
  colorDisplay.textContent = pickedColor;
  //loop through all colors
  for(var i = 0; i < squares.length; i++) {
    if(colorsList[i]) {
      squares[i].style.backgroundColor = colorsList[i];
    } else {
      squares[i].style.display = "none"; //hide bottom 3 squares
    }
  }
})

//HARD BUTTON
hardBtn.addEventListener("click", function() {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  //when clicked, generate 6 random colors
  colorsList = generateRandomColors(numSquares);
  //grab the 6 colors
  pickedColor = pickColor();
  //change rgb display to reflect the new picked color
  colorDisplay.textContent = pickedColor;
  //loop through all colors
  for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colorsList[i];
      squares[i].style.display = "block";
  }
}) */

//RESET BUTTON
resetBtn.addEventListener("click", function() {
  //generate all new color
  colorsList = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //set display text back to new colors
  this.textContent = "New Colors";
  //remove message display
  messageDisplay.textContent = "";
  //change colors of squares
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = colorsList[i];
  }
  h1.style.backgroundColor = "steelblue";
})

//assigned picked color to the header
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colorsList[i];
  //add click listener to square
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to picked color
    if (clickedColor === pickedColor) {
      messageDisplay.textContent ="Correct!"
      resetBtn.textContent ="Play Again?"
      changeColors(clickedColor); //call clickedColor function
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323"; //if wrong, square changes to bg color
      messageDisplay.textContent = "Try Again?";
    }
  });
}

//if correct, all squares change to correct color
function changeColors(color){
  //loop through all colors
  for(var i = 0; i < squares.length; i++) {
  //change color to match given
  squares[i].style.backgroundColor = color;
  }
}

//Generate random RGB hex#s
function pickColor() {
  var random = Math.floor(Math.random() * colorsList.length);
  return colorsList[random];
}

//generate random colors
function generateRandomColors(num) {
  //make an array
  var array = [];
  //repeat num times
  for (var i = 0; i < num; i++) {
    //get random color and push into array
    array.push(randomColor());
  }
  //return that array
  return array;
}

function randomColor() {
  //pick a "red" from 0-255
  var red = Math.floor(Math.random() * 256); //256 b/c math.random doesn't include 1.
  //pick a "green" from 0-255
  var green = Math.floor(Math.random() * 256);
  //pick a "blue" from 0-255
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

/*
//REFRACTOR VERSION//



*/
