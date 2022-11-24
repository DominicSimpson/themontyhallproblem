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


	switchChoiceYes.onclick = () => { // random door picker

		pathSrc = '';
		if (pathCheck === 1){
			SwitchAndLose.style.display = "block";
			pathSrc =  "images/goat.jpg";
			winsLossesCounter.Losses ++;
		} else if (pathCheck === 2){
			SwitchAndWin.style.display = "block";
			pathSrc =  "images/sportscar.jpg";
			winsLossesCounter.Wins ++;
		} else {
			SwitchAndLose.style.display = "block";
			pathSrc =  "images/goat.jpg";
			winsLossesCounter.Losses ++;
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
			winsLossesCounter.Losses ++;
		} else if (pathCheck === 2){
			NoSwitchAndWin.style.display = "block";
			pathSrc =  "images/sportscar.jpg";
			winsLossesCounter.Wins ++;
		} else {
			NoSwitchAndLose.style.display = "block";
			pathSrc =  "images/goat.jpg";
			winsLossesCounter.Losses ++;
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

// Stats and Local Storage

let userWonTally = localStorage.getItem('Won');
let userLostTally = localStorage.getItem('Lost');

let winsLossesCounter = { // object recording wins and losses
	Wins: userWonTally,
	Losses: userLostTally,
}



function localStorage() {
if (!localStorage.getItem('Won')) {
	populateLocalStorage(winsLossesCounterDisplay);
  } else {
	updateCounterDisplay(winsLossesCounterDisplay);
  }
}

let winsLossesCounterDisplay = document.querySelector("#win-lose-counter-display");



let userSwitchWinTotal = SwitchAndWin.Wins;
let userStayWinTotal = NoSwitchAndWin.Wins;
let userSwitchLoseTotal = SwitchAndLose.Losses;
let userStayLoseTotal = NoSwitchAndLose.Losses;


localStorage.setItem('Won', JSON.stringify(`${userSwitchWinTotal}`));
localStorage.setItem('Lost', JSON.stringify(`${userSwitchLoseTotal}`));
localStorage.setItem('Won', JSON.stringify(`${userSwitchWinTotal}`));
localStorage.setItem('Lost', JSON.stringify(`${userStayLoseTotal}`));



function displayResult() {
if (userSwitchWinTotal === null) {
	winsLossesCounterDisplay.textContent = `Won:0 Lost:${userSwitchLoseTotal}`;
} else if (userSwitchLoseTotal === null) {
	winsLossesCounterDisplay.textContent = `Won:${userSwitchWinTotal} Lost:0`;
} else {
	winsLossesCounterDisplay.textContent = `Won:${userStayWinTotal} Lost:${userStayLoseTotal}`
}

submitSwitchAndWinReset.addEventListener("click", doorResult());
submitSwitchAndLoseReset.addEventListener("click", doorResult());
submitNoSwitchAndWinReset.addEventListener("click", doorResult());
submitNoSwitchAndLoseReset.addEventListener("click", doorResult());


}; 

localStorage();

displayResult();



