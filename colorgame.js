console.log("connected");

var numSquares = 6;
var colors = generateRandomColors(numSquares);



var squares = document.querySelectorAll(".square");
var colorGoal = pickRandomColor();
var rightWrong = document.querySelector("#rorw");

var difficulty = document.querySelectorAll(".difficulty");

for(var i = 0; i < difficulty.length; i++){
	difficulty[i].addEventListener("click", function(){
		difficulty[0].classList.remove("selected");
		difficulty[1].classList.remove("selected");
		this.classList.add("selected");
		if (this.textContent === "Easy"){
			numSquares = 3;
		} else {
			numSquares = 6;
		}

		reset();
	})
}

function reset() {
	colors = generateRandomColors(numSquares);
	colorGoal = pickRandomColor();
	rorw.innerHTML = "";
	spancolor.innerHTML = colorGoal;
	newColors.innerHTML = "New Colors?";
	rightWrong.classList.remove("wrong");
	rightWrong.classList.remove("correct");
	document.querySelector("h1").style.background = "steelblue";
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}

for(var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];

	
	squares[i].addEventListener("click", function() {		
		var clickedColor = this.style.background;

		if(clickedColor === colorGoal){
			rightWrong.innerHTML = "Correct";
			changeColors(clickedColor);
			rightWrong.classList.remove("wrong");
			rightWrong.classList.add("correct");
			document.querySelector("h1").style.background = clickedColor;
			newColors.innerHTML = "Play Again?";

		} else {

			this.style.background = "#232323";
			rightWrong.classList.add("wrong");
			rightWrong.innerHTML = "Try Again";
		}
	});
}

var spancolor = document.querySelector("#spanGoal");
spancolor.innerHTML = colorGoal;



// easy.addEventListener("click", function() {
// 	easy.classList.add("selected");
// 	hard.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	colorGoal = pickRandomColor();

// 	spancolor.innerHTML = colorGoal;
// 	newColors.innerHTML = "New Colors?";
// 	document.querySelector("h1").style.background = "steelblue";
// 	for(var i = 0; i < squares.length; i++) {
// 			if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}

// })



// hard.addEventListener("click", function() {
// 	hard.classList.add("selected");
// 	easy.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	colorGoal = pickRandomColor();
// 	spancolor.innerHTML = colorGoal;
// 	newColors.innerHTML = "New Colors?";
// 	document.querySelector("h1").style.background = "steelblue";
// 	for(var i = 0; i < squares.length; i++) {
// 			squares[i].style.background = colors[i];
// 			squares[i].style.display = "block";
// 			}

// })

var newColors = document.querySelector("#newColors");

newColors.addEventListener("click", function(){

	reset();
	// colors = generateRandomColors(numSquares);
	// colorGoal = pickRandomColor();
	// rorw.innerHTML = "";
	// spancolor.innerHTML = colorGoal;
	// newColors.innerHTML = "New Colors?";
	// rightWrong.classList.remove("wrong");
	// rightWrong.classList.remove("correct");
	// document.querySelector("h1").style.background = "steelblue";
	// for(var i = 0; i < squares.length; i++) {
	// squares[i].style.background = colors[i];
	// }

})



function changeSquareColor() {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
}


function pickRandomColor() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}


function changeColors(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}

}

function generateRandomColors(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	return arr;
}

	
function randomColor(){
	
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";

}
