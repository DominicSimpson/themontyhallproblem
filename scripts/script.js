// Declaring global variables
const body = document.getElementById('body');
const instructions = document.getElementById('instructions');
const row1 = document.getElementById('row1');
const row2 = document.getElementById('row2');
const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
const d3 = document.getElementById('d3');
const switchChoiceYes = document.getElementById('btn-1');
const switchChoiceNo = document.getElementById('btn-2');
const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
const SwitchAndWin = document.getElementById("switchAndWin");
const SwitchAndLose = document.getElementById("switchAndLose");
const NoSwitchAndWin = document.getElementById("NoSwitchAndWin");
const NoSwitchAndLose = document.getElementById("NoSwitchAndLose");
const display = document.querySelector(".displayResult")

// Image of Car
const winPath =
	"images/sportscar.jpg";
// Image of Goat
const losePath =
	"images/goat.jpg";

// Variables for shuffling the doors
var openDoor1, openDoor2, openDoor3, winner;

// Hiding text elements
row2.hidden = true;
SwitchAndWin.hidden = true;
SwitchAndLose.hidden = true;
NoSwitchAndWin.hidden = true;
NoSwitchAndLose.hidden = true;
d1.hidden = true;
d2.hidden = true;
d3.hidden = true;

// Function to randomly shuffle the doors
function pathCheck() {
	winner = Math.floor(Math.random() * 3);
	if (winner === 1) {
		openDoor1 = winPath;
		openDoor2 = losePath;
		openDoor3 = losePath;
	} else if (winner === 2) {
		openDoor2 = winPath;
		openDoor1 = losePath;
		openDoor3 = losePath;
	} else {
		openDoor3 = winPath;
		openDoor2 = losePath;
		openDoor1 = losePath;
	}
}
// Calling the function
pathCheck();


// Event listener for door 1
doorImage1.onclick = () => {

	// Revealing necessary elements for dialogue
	row1.hidden = true;
	d1.hidden = false;
	setTimeout(() => {
		d1.hidden = true;
	}, 1000);
	setTimeout(() => {
		row2.hidden = false;
	}, 1000);

	// Opening a door which has a goat behind it
	if (openDoor2 === losePath) {
		setTimeout(() => { doorImage2.src = openDoor2; }, 2000);

	} else if (openDoor3 === losePath) {
		setTimeout(() => { doorImage3.src = openDoor3; }, 2000);
	}

	//Event listener if the player opts to switch
	switchChoiceYes.onclick = () => {

		console.log('doorImage2', doorImage2.src);
		console.log('doorImage2', doorImage3.src);
		// If the opened door is door2
		if (doorImage2.src.split('/')[8] ===
			"goat.jpg") {
			row2.hidden = true;
			instructions.innerHTML = "You switched to door3";
			setTimeout(() => {
				instructions.innerHTML =
					"Revealing your chosen door......";
			}, 1000);

			// Opening the chosen door
			setTimeout(() => { doorImage3.src = openDoor3; }, 2500);

			//Conditions to display the result page
			if (openDoor3 === losePath) {
				setTimeout(() => { switchAndLose(); }, 3500)
			} else {
				setTimeout(() => { switchAndWin(); }, 3500)
			}
		}
		//If the opened door is door3
		else if (doorImage3.src.split('/')[8] ===
			"goat.jpg") {
			row2.hidden = true;
			instructions.innerHTML = "You switched to door2";
			setTimeout(() => {
				instructions.innerHTML =
					"Revealing your chosen door......";
			}, 1000);

			// Opening the chosen door
			setTimeout(() => { doorImage2.src = openDoor2; }, 2500);
			//Conditions to display the result page
			if (openDoor2 === losePath) {
				setTimeout(() => { switchAndLose(); }, 3500)
			} else {
				setTimeout(() => { switchAndWin(); }, 3500)
			}
		}
	}

	//Event listener if the player does not opt to switch

	switchChoiceNo.onclick = () => {
		row2.hidden = true;
		instructions.innerHTML = "Your choice is still door1";
		setTimeout(() => {
			instructions.innerHTML =
			"Revealing your chosen door......";
		}, 1000);

		// Opening the chosen door

		setTimeout(() => { doorImage1.src = openDoor1; }, 2500);

		// Conditions to display the result page

		if (openDoor1 === losePath) {
			setTimeout(() => { noSwitchAndLose(); }, 3500)
		} else {
			setTimeout(() => { noSwitchAndWin(); }, 3500)
		}
	}
}




const localStorage = (result) => {

	var results = [];
// window.localStorage.setItem('results', JSON.stringify(results));
results = JSON.parse(window.localStorage.getItem('results')) || [];
results.push(result);
window.localStorage.setItem('results', JSON.stringify(results));
// JSON.parse(localStorage.getItem('yesArray')); // Returns ["yes"]
}


const doorResult = (param) => {
	body.hidden = true;
	param.hidden = false
	if (param === SwitchAndWin) {
		localStorage("win")
	} else if (param === SwitchAndLose) {
		localStorage("lose")
	} else if (param === NoSwitchAndWin) {
		localStorage("win")
	} else {
		localStorage("lose")
	}
	
}


const switchAndWin = () => {
	doorResult(SwitchAndWin)
}
const switchAndLose = () => {
	doorResult(SwitchAndLose)
}
const noSwitchAndWin = () => {
	doorResult(NoSwitchAndWin)
}
const noSwitchAndLose = () => {
	doorResult(NoSwitchAndLose)
}

// Door 2 click

doorImage2.onclick = () => {
	row1.hidden = true;
	d2.hidden = false;
	setTimeout(() => { d2.hidden = true; }, 1000);
	setTimeout(() => { row2.hidden = false; }, 1000)

	if (openDoor1 === losePath) {
		setTimeout(() => { doorImage1.src = openDoor1; }, 2000);

	} else if (openDoor3 === losePath) {
		setTimeout(() => { doorImage3.src = openDoor3; }, 2000);
	}

	switchChoiceYes.onclick = () => {
		if (doorImage1.src ===
			"images/goat.jpg") {
			row2.hidden = true;
			instructions.innerHTML = "You switched to door3"
			setTimeout(() => {
				instructions.innerHTML =
				"Revealing your chosen door......";
			}, 1000);
			setTimeout(() => { doorImage3.src = openDoor3; }, 2500);
			if (openDoor3 === losePath) {
				setTimeout(() => { switchAndLose(); }, 3500)
			} else {
				setTimeout(() => { switchAndWin(); }, 3500)
			}
		} else if (doorImage3.src ===
			"images/goat.jpg") {
			row2.hidden = true;
			instructions.innerHTML = "You switched to door1";
			setTimeout(() => {
				instructions.innerHTML
				= "Revealing your chosen door......";
			}, 1000);
			setTimeout(() => { doorImage1.src = openDoor1; }, 2500);
			if (openDoor1 === losePath) {
				setTimeout(() => { switchAndLose(); }, 3500)
			} else {
				setTimeout(() => { switchAndWin(); }, 3500)
			}
		}
	}
	switchChoiceNo.onclick = () => {
		row2.hidden = true;
		instructions.innerHTML = "Your choice is still door2"
		setTimeout(() => {
			instructions.innerHTML =
			"Revealing your chosen door......";
		}, 1000);
		setTimeout(() => { doorImage2.src = openDoor2; }, 2500);
		if (openDoor2 === losePath) {
			setTimeout(() => { noSwitchAndLose(); }, 3500)
		} else {
			setTimeout(() => { noSwitchAndWin(); }, 3500)
		}
	}
}

// Door 3 click

doorImage3.onclick = () => {
	row1.hidden = true;
	d3.hidden = false;
	setTimeout(() => { d3.hidden = true; }, 1000);
	setTimeout(() => { row2.hidden = false; }, 1000)

	if (openDoor1 === losePath) {
		setTimeout(() => { doorImage1.src = openDoor1; }, 2000);

	} else if (openDoor2 === losePath) {
		setTimeout(() => { doorImage2.src = openDoor2; }, 2000);
	}

	switchChoiceYes.onclick = () => {
		if (doorImage1.src ===
			"images/goat.jpg") {
			row2.hidden = true;
			instructions.innerHTML = "You switched to door2"
			setTimeout(() => {
				instructions.innerHTML =
				"Revealing your chosen door......";
			}, 1000);
			setTimeout(() => { doorImage2.src = openDoor2; }, 2500);
			if (openDoor2 === losePath) {
				setTimeout(() => { switchAndLose(); }, 3500)
			} else {
				setTimeout(() => { switchAndWin(); }, 3500)
			}
		} else if (doorImage2.src ===
			"images/goat.jpg") {
			row2.hidden = true;
			instructions.innerHTML = "You switched to door1"
			setTimeout(() => {
				instructions.innerHTML =
				"Revealing your chosen door......";
			}, 1000);
			setTimeout(() => { doorImage1.src = openDoor1; }, 2500);
			if (openDoor1 === losePath) {
				setTimeout(() => { switchAndLose(); }, 3500)
			} else {
				setTimeout(() => { switchAndWin(); }, 3500)
			}
		}
	}
	switchChoiceNo.onclick = () => {
		row2.hidden = true;
		instructions.innerHTML = "Your choice is still door3"
		setTimeout(() => {
			instructions.innerHTML =
			"Revealing your chosen door......";
		}, 1000);
		setTimeout(() => { doorImage3.src = openDoor3; }, 2500);
		if (openDoor3 === losePath) {
			setTimeout(() => { noSwitchAndLose(); }, 3500)
		} else {
			setTimeout(() => { noSwitchAndWin(); }, 3500)
		}
	}
}



function displayResult() {
	let res = JSON.parse(window.localStorage.getItem("results"));

	let win = 0
	let loss = 0
	
	res.forEach(item=>{
		if (item === "win") {
			win++
		} else{
			loss++
		}
	})
	
	display.innerHTML =`Won: ${win} Lost: ${loss}`
	// if (userSwitchWinTotal === null) {
	// 	winsLossesCounterDisplay.textContent = `Won:0 Lost:${userSwitchLoseTotal}`;
	// } else if (userSwitchLoseTotal === null) {
	// 	winsLossesCounterDisplay.textContent = `Won:${userSwitchWinTotal} Lost:0`;
	// } else {
	// 	winsLossesCounterDisplay.textContent = `Won:${userStayWinTotal} Lost:${userStayLoseTotal}`
	// }
}
displayResult()
