// Declaring global variables
const body = document.getElementById('body');
const instructions = document.getElementById('instructions');
const row1 = document.getElementById('row1');
const row2 = document.getElementById('row2');
const doorOne = document.getElementById('d1');
const doorTwo = document.getElementById('d2');
const doorThree = document.getElementById('d3');
const switchChoiceYes = document.getElementById('btn-1');
const switchChoiceNo = document.getElementById('btn-2');
const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
const SwitchAndWin = document.getElementById('SwitchAndWin');
const SwitchAndLose = document.getElementById('SwitchAndLose');
const NoSwitchAndWin = document.getElementById('NoSwitchAndWin');
const NoSwitchAndLose = document.getElementById('NoSwitchAndLose');

let submitSwitchAndWinReset = document.getElementById('submit-switchandwin');
let submitSwitchAndLoseReset = document.getElementById('submit-switchandlose');
let submitNoSwitchAndWinReset = document.getElementById('submit-noswitchandwin');
let submitNoSwitchAndLoseReset = document.getElementById('submit-noswitchandlose');



// Hiding text at start

row2.hidden = true;
doorOne.hidden = true;
doorTwo.hidden = true;
doorThree.hidden = true;



const switchAndWin = () => { // display the result of the player based on their choices
	body.hidden = false;
	SwitchAndWin.hidden = false;
}
const switchAndLose = () => {
	body.hidden = true;
	SwitchAndLose.hidden = false;
}
const noSwitchAndWin = () => {
	body.hidden = true;
	NoSwitchAndWin.hidden = false;
}
const noSwitchAndLose = () => {
	body.hidden = true;
	NoSwitchAndLose.hidden = false;
}

// Function for each door result


function doorResult(doorNumber) {

	SwitchAndLose.style.display = "none";
	SwitchAndWin.style.display = "none";
	switchChoiceYes.style.display = "block";
	switchChoiceNo.style.display = "block";
	row2.style.display = "block";
	let pathCheck = Math.floor(Math.random() * 3);
	let pathSrc =  "";
	document.getElementById("door1").src = "images/door.jpg";
	document.getElementById("door2").src = "images/door.jpg";
	document.getElementById("door3").src = "images/door.jpg";


	row1.hidden = true;
	doorOne.hidden = true;
	doorTwo.hidden = true;
	// doorThree.hidden = true;
	setTimeout(()=>{
		doorNumber.hidden = true;
	},1000);
	setTimeout(()=>{
		row2.hidden = false;
	},1000);

	pathSrc =  "images/goat.jpg";

	document.getElementById("door3").src = pathSrc;

	//Event listener if the player opts to switch


	switchChoiceYes.onclick = () => {

		pathSrc = '';
		if (pathCheck === 1){
			SwitchAndLose.style.display = "block";
			pathSrc =  "images/goat.jpg";
		} else if (pathCheck === 2){
			SwitchAndWin.style.display = "block";
			pathSrc =  "images/sportscar.jpg";
		} else {
			SwitchAndLose.style.display = "block";
			pathSrc =  "images/goat.jpg";
		}

		document.getElementById("door2").src = pathSrc;
		document.getElementById("door3").src = "images/door.jpg";

		switchChoiceYes.style.display = "none";
		switchChoiceNo.style.display = "none";
		row2.style.display = "none";
	}

	// Event listener if the player does not opt to switch

		switchChoiceNo.onclick = () => {
		SwitchAndLose.style.display = "none";
		SwitchAndWin.style.display = "none";
		document.getElementById("door2").src = "images/door.jpg";
		document.getElementById("door3").src = "images/door.jpg";
		pathSrc = '';
		if (pathCheck === 1) {
			NoSwitchAndLose.style.display = "block";
			pathSrc =  "images/goat.jpg";
		} else if (pathCheck === 2){
			NoSwitchAndWin.style.display = "block";
			pathSrc =  "images/sportscar.jpg";
		} else {
			NoSwitchAndLose.style.display = "block";
			pathSrc =  "images/goat.jpg";
		}

		document.getElementById(doorResult).src = pathSrc;
		switchChoiceYes.style.display = "none";
		switchChoiceNo.style.display = "none";
		row2.style.display = "none";

	}

}


// Event listeners for each door

doorImage1.onclick = () =>  {
	doorResult("door1");
}

doorImage2.onclick = () =>  {
	doorResult("door2");
}

doorImage3.onclick = () =>  {
	doorResult("door3");
}


let listOfSubmitOptions = JSON.parse(localStorage.getItem("listOfSubmitOptions")) || [];



submitSwitchAndWinReset.addEventListener("click", function (){
	if (listOfSubmitOptions = '') {
	localStorage.setItem("each submit", listOfSubmitOptions + 1); // decrements one to the productNumbers variable
	}
});

submitSwitchAndLoseReset .addEventListener("click", function (){
	if (listOfSubmitOptions = '') {
	localStorage.setItem("each submit", listOfSubmitOptions + 1); // decrements one to the productNumbers variable
	}
});

submitNoSwitchAndWinReset.addEventListener("click", function (){
	if (listOfSubmitOptions = '') {
	localStorage.setItem("each submit", listOfSubmitOptions + 1); // decrements one to the productNumbers variable
	}
});

submitNoSwitchAndLoseReset.addEventListener("click", function (){
	if (listOfSubmitOptions = '') {
	localStorage.setItem("each submit", listOfSubmitOptions + 1); // decrements one to the productNumbers variable
	}
});





// // Event listener for door 2

// doorImage2.onclick = () => {

// 	SwitchAndLose.style.display = "none";
// 	SwitchAndWin.style.display = "none";
// 	switchChoiceYes.style.display = "block";
// 	switchChoiceNo.style.display = "block";
// 	row2.style.display = "block";
// 	let pathCheck2 = Math.floor(Math.random() * 3);
// 	let pathSrc2 =  "";
// 	document.getElementById("door1").src = "images/door.jpg";
// 	document.getElementById("door2").src = "images/door.jpg";
// 	document.getElementById("door3").src = "images/door.jpg";

// 	// Revealing necessary elements for dialogue
// 	row1.hidden = true;
// 	doorTwo.hidden = true;
// 	setTimeout(()=>{
// 		doorTwo.hidden = true;
// 	},1000);
// 	setTimeout(()=>{
// 		row2.hidden = false;
// 	},1000);

// 	pathSrc2 =  "images/goat.jpg";

// 	document.getElementById("door3").src = pathSrc2;

// 	//Event listener if the player opts to switch

// 	switchChoiceYes.onclick = () => {

// 		pathSrc2 = '';
// 		if (pathCheck2 === 1) {
// 			SwitchAndLose.style.display = "block";
// 			pathSrc2 =  "images/goat.jpg";
// 		} else if (pathCheck2 === 2){
// 			SwitchAndWin.style.display = "block";
// 			pathSrc2 =  "images/sportscar.jpg";
// 		} else {
// 			SwitchAndLose.style.display = "block";
// 			pathSrc2 =  "images/goat.jpg";
// 		}

// 		document.getElementById("door1").src = pathSrc2;
// 		document.getElementById("door3").src = "images/door.jpg";
// 		switchChoiceYes.style.display = "none";
// 		switchChoiceNo.style.display = "none";
// 		row2.style.display = "none";
// 	}

// 	//Event listener if the player does not opts to switch
// 	switchChoiceNo.onclick = () => {
// 		SwitchAndLose.style.display = "none";
// 		SwitchAndWin.style.display = "none";
// 		document.getElementById("door1").src = "images/door.jpg";
// 		document.getElementById("door3").src = "images/door.jpg";
// 		pathSrc2 = '';
// 		if (pathCheck2 === 1){
// 			NoSwitchAndLose.style.display = "block";
// 			pathSrc2 =  "images/goat.jpg";
// 		} else if(pathCheck2 === 2){
// 			NoSwitchAndWin.style.display = "block";
// 			pathSrc2 =  "images/sportscar.jpg";
// 		} else {
// 			NoSwitchAndLose.style.display = "block";
// 			pathSrc2 =  "images/goat.jpg";
// 		}

// 		document.getElementById("door2").src = pathSrc2;
// 		switchChoiceYes.style.display = "none";
// 		switchChoiceNo.style.display = "none";
// 		row2.style.display = "none";

// 	}


// 	// row1.hidden = true;
// 	// doorTwo.hidden = false;
// 	// setTimeout(() => { doorTwo.hidden = true; }, 1000);
// 	// setTimeout(() => { row2.hidden = false; }, 1000)

// 	// if (openDoor1 === losePath) {
// 	// 	setTimeout(() =>
// 	// 	{ doorImage1.src = openDoor1; }, 2000);

// 	// } else if (openDoor3 === losePath) {
// 	// 	setTimeout(() =>
// 	// 	{ doorImage3.src = openDoor3; }, 2000);
// 	// }

// 	// switchChoiceYes.onclick = () => {
// 	// 	if (doorImage1.src === losePath) {
// 	// 		row2.hidden = true;
// 	// 		instructions.innerHTML = "You switched to door 3"
// 	// 		setTimeout(() =>
// 	// 		{ instructions.innerHTML =
// 	// 			"Revealing your chosen door..."; }, 1000);
// 	// 		setTimeout(() => { doorImage3.src = openDoor3; }, 2500);
// 	// 		if (openDoor3 === losePath) {
// 	// 			setTimeout(() => { switchAndLose(); }, 3500)
// 	// 		} else {
// 	// 			setTimeout(() => { switchAndWin(); }, 3500)
// 	// 		}
// 	// 	} else if (doorImage3.src === losePath) {
// 	// 		row2.hidden = true;
// 	// 		instructions.innerHTML = "You switched to door 1";
// 	// 		setTimeout(() => { instructions.innerHTML
// 	// 			= "Revealing your chosen door..."; }, 1000);
// 	// 		setTimeout(() => { doorImage1.src = openDoor1; }, 2500);
// 	// 		if (openDoor1 === losePath) {
// 	// 			setTimeout(() => { switchAndLose(); }, 3500)
// 	// 		} else {
// 	// 			setTimeout(() => { switchAndWin(); }, 3500)
// 	// 		}
// 	// 	}
// 	// }
// 	// switchChoiceNo.onclick = () => {
// 	// 	row2.hidden = true;
// 	// 	instructions.innerHTML = "Your choice is still door2"
// 	// 	setTimeout(() => { instructions.innerHTML =
// 	// 		"Revealing your chosen door..."; }, 1000);
// 	// 	setTimeout(() => { doorImage2.src = openDoor2; }, 2500);
// 	// 	if (openDoor2 === losePath) {
// 	// 		setTimeout(() => { noSwitchAndLose(); }, 3500)
// 	// 	} else {
// 	// 		setTimeout(() => { noSwitchAndWin(); }, 3500)
// 	// 	}
// 	// }
// }

// // Event listener for door 3

// doorImage3.onclick = () => {

// 	SwitchAndLose.style.display = "none";
// 	SwitchAndWin.style.display = "none";
// 	switchChoiceYes.style.display = "block";
// 	switchChoiceNo.style.display = "block";
// 	row2.style.display = "block";
// 	let pathCheck3 = Math.floor(Math.random() * 3);
// 	let pathSrc3 =  "";
// 	document.getElementById("door1").src = "images/door.jpg";
// 	document.getElementById("door3").src = "images/door.jpg";
// 	document.getElementById("door2").src = "images/door.jpg";


// 	// Revealing necessary elements for dialogue
// 	row1.hidden = true;
// 	doorThree.hidden = true;
// 	setTimeout(()=>{
// 		doorThree.hidden = true;
// 	},1000);
// 	setTimeout(()=>{
// 		row2.hidden = false;
// 	},1000);

// 	pathSrc3 =  "images/goat.jpg";

// 	document.getElementById("door1").src = pathSrc3;

// 	//Event listener if the player opts to switch

// 	switchChoiceYes.onclick = () => {

// 		pathSrc3 = '';
// 		if (pathCheck3 === 1) {
// 			SwitchAndLose.style.display = "block";
// 			pathSrc3 =  "images/goat.jpg";
// 		} else if (pathCheck3 === 2){
// 			SwitchAndWin.style.display = "block";
// 			pathSrc3 =  "images/sportscar.jpg";
// 		} else {
// 			SwitchAndLose.style.display = "block";
// 			pathSrc3 =  "images/goat.jpg";
// 		}

// 		document.getElementById("door1").src = "images/door.jpg";
// 		document.getElementById("door2").src = "images/door.jpg";
// 		switchChoiceYes.style.display = "none";
// 		switchChoiceNo.style.display = "none";
// 		row2.style.display = "none";
// 	}

// 	//Event listener if the player does not opt to switch
// 	switchChoiceNo.onclick = () => {
// 		SwitchAndLose.style.display = "none";
// 		SwitchAndWin.style.display = "none";
// 		document.getElementById("door1").src = "";
// 		document.getElementById("door2").src = "images/door.jpg";
// 		pathSrc3 = '';
// 		if (pathCheck3 === 1){
// 			NoSwitchAndLose.style.display = "block";
// 			pathSrc3 =  "images/goat.jpg";
// 		}else if(pathCheck3 === 2){
// 			NoSwitchAndWin.style.display = "block";
// 			pathSrc3 =  "images/sportscar.jpg";
// 		}else{
// 			NoSwitchAndLose.style.display = "block";
// 			pathSrc3 =  "images/goat.jpg";
// 		}

// 		document.getElementById("door3").src = pathSrc3;
// 		switchChoiceYes.style.display = "none";
// 		switchChoiceNo.style.display = "none";
// 		row2.style.display = "none";
// 	}



	// row1.hidden = true;
	// doorThree.hidden = false;
	// setTimeout(() => { doorThree.hidden = true; }, 1000);
	// setTimeout(() => { row2.hidden = false; }, 1000)

	// if (openDoor1 === losePath) {
	// 	setTimeout(() => { doorImage1.src = openDoor1; }, 2000);

	// } else if (openDoor2 === losePath) {
	// 	setTimeout(() => { doorImage2.src = openDoor2; }, 2000);
	// }

	// switchChoiceYes.onclick = () => {
	// 	if (doorImage1.src === losePath) {
	// 		row2.hidden = true;
	// 		instructions.innerHTML = "You switched to door 2";
	// 		setTimeout(() => { instructions.innerHTML =
	// 			"Revealing your chosen door..."; }, 1000);
	// 		setTimeout(() => { doorImage2.src = openDoor2; }, 2500);
	// 		if (openDoor2 === losePath) {
	// 			setTimeout(() => { switchAndLose(); }, 3500)
	// 		} else {
	// 			setTimeout(() => { switchAndWin(); }, 3500)
	// 		}
	// 	} else if (doorImage2.src === losePath) {
	// 		row2.hidden = true;
	// 		instructions.innerHTML = "You switched to door 1"
	// 		setTimeout(() => { instructions.innerHTML =
	// 			"Revealing your chosen door..."; }, 1000);
	// 		setTimeout(() => { doorImage1.src = openDoor1; }, 2500);
	// 		if (openDoor1 === losePath) {
	// 			setTimeout(() => { switchAndLose(); }, 3500)
	// 		} else {
	// 			setTimeout(() => { switchAndWin(); }, 3500)
	// 		}
	// 	}
	// }
	// switchChoiceNo.onclick = () => {
	// 	row2.hidden = true;
	// 	instructions.innerHTML = "Your choice is still door 3"
	// 	setTimeout(() => { instructions.innerHTML =
	// 		"Revealing your chosen door..."; }, 1000);
	// 	setTimeout(() => { doorImage3.src = openDoor3; }, 2500);
	// 	if (openDoor3 === losePath) {
	// 		setTimeout(() => { noSwitchAndLose(); }, 3500)
	// 	} else {
	// 		setTimeout(() => { noSwitchAndWin(); }, 3500)
	// 	}
	// }
// }

// submitSwitchAndWinReset.addEventListener("click", function (){
	
//   });