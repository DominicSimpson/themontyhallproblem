// Declaring global variables
const body = document.getElementById("body");
const instructions = document.getElementById("instructions");
const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");
const doorOne = document.getElementById("d1");
const doorTwo = document.getElementById("d2");
const doorThree = document.getElementById("d3");
const switchChoiceYes = document.getElementById("btn-1");
const switchChoiceNo = document.getElementById("btn-2");
const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
const SwitchAndWin = document.getElementById("switchAndWin");
const SwitchAndLose = document.getElementById("switchAndLose");
const NoSwitchAndWin = document.getElementById("NoSwitchAndWin");
const NoSwitchAndLose = document.getElementById("NoSwitchAndLose");

// Image of Car
const winPath = function show_image1(src, width, height, alt) {
  var img1 = document.createElement("images/sportscar.jpg");
  img1.src = src;
  img1.width = width;
  img1.height = height;
  img1.alt = alt;

  // This next line will just add it to the <body> tag
  document.body.appendChild(img1);
}
// Image of Goat
const losePath = function show_image2(src, width, height, alt) {
  var img2 = document.createElement("images/goat.jpg");
  img2.src = src;
  img2.width = width;
  img2.height = height;
  img2.alt = alt;

  // This next line will just add it to the <body> tag
  document.body.appendChild(img2);
}
// Variables for shuffling the doors
let openDoor1;
let openDoor2;
let openDoor3;
let winner;



// Hiding unnecessary elements

row2.hidden = true;
SwitchAndWin.hidden = true;
SwitchAndLose.hidden = true;
NoSwitchAndWin.hidden = true;
NoSwitchAndLose.hidden = true;
doorOne.hidden = true;
doorTwo.hidden = true;
doorThree.hidden = true;



// Function to randomly shuffle the doors
function winDoorGenerator() {
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
winDoorGenerator();



// Event listener for door 1
doorImage1.onclick = () => {

	// Revealing necessary elements for dialogue
	row1.hidden = true;
	doorOne.hidden = false;
	setTimeout(()=>{
		doorOne.hidden = true;
	},1000);
	setTimeout(()=>{
		row2.hidden = false;
	},1000);

	// Opening a door which has a goat behind it.
	if (openDoor2 === losePath) {
		setTimeout(() =>
		{ doorImage2.src = openDoor2; }, 2000);

	} else if (openDoor3 === losePath) {
		setTimeout(() =>
		{ doorImage3.src = openDoor3; }, 2000);
	}

	//Event listener if the player opts to switch
	switchChoiceYes.onclick = () => {

		// If the opened door is door2, forming a
		// suitable dialogue.
		if (doorImage2.src === losePath){
			row2.hidden = true;
			instructions.innerHTML = "You switched to Door 3";
			setTimeout(()=>{
				instructions.innerHTML =
				"Revealing your chosen door...";
			},1000);

			// Opening the chosen door
			setTimeout(() =>
			{ doorImage3.src = openDoor3; }, 2500);

			//Conditions to display the result page
			if (openDoor3 === losePath) {
				setTimeout(() => { switchAndLose(); }, 3500)
			} else {
				setTimeout(() => { switchAndWin(); }, 3500)
			}
		}
		//If the opened door is door3, forming a suitable dialogue.
		else if (doorImage3.src === losePath) {
			row2.hidden = true;
			instructions.innerHTML = "You switched to door 2";
			setTimeout(()=>{
				instructions.innerHTML =
				"Revealing your chosen door...";
			},1000);
			
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

	//Event listener if the player does not opts to switch
	switchChoiceNo.onclick = () => {
		row2.hidden = true;
		instructions.innerHTML = "Your choice is still door 1";
		setTimeout(() =>
		{ instructions.innerHTML =
		"Revealing your chosen door..."; }, 1000);
		
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



const switchAndWin = () => {
	body.hidden = true;
	switchAndWin.hidden = false;
}
const switchAndLose = () => {
	body.hidden = true;
	switchAndLose.hidden = false;
}
const noSwitchAndWin = () => {
	body.hidden = true;
	noSwitchAndWin.hidden = false;
}
const noSwitchAndLose = () => {
	body.hidden = true;
	noSwitchAndLose.hidden = false;
}



doorImage2.onclick = () => {
	row1.hidden = true;
	doorTwo.hidden = false;
	setTimeout(() => { doorTwo.hidden = true; }, 1000);
	setTimeout(() => { row2.hidden = false; }, 1000)

	if (openDoor1 === losePath) {
		setTimeout(() =>
		{ doorImage1.src = openDoor1; }, 2000);

	} else if (openDoor3 === losePath) {
		setTimeout(() =>
		{ doorImage3.src = openDoor3; }, 2000);
	}

	switchChoiceYes.onclick = () => {
		if (doorImage1.src === losePath) {
			row2.hidden = true;
			instructions.innerHTML = "You switched to door 3"
			setTimeout(() =>
			{ instructions.innerHTML =
			"Revealing your chosen door..."; }, 1000);
			setTimeout(() => { doorImage3.src = openDoor3; }, 2500);
			if (openDoor3 === losePath) {
				setTimeout(() => { switchAndLose(); }, 3500)
			} else {
				setTimeout(() => { switchAndWin(); }, 3500)
			}
		} else if (doorImage3.src === losePath) {
			row2.hidden = true;
			instructions.innerHTML = "You switched to door 1";
			setTimeout(() => { instructions.innerHTML
			= "Revealing your chosen door..."; }, 1000);
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
		setTimeout(() => { instructions.innerHTML =
		"Revealing your chosen door..."; }, 1000);
		setTimeout(() => { doorImage2.src = openDoor2; }, 2500);
		if (openDoor2 === losePath) {
			setTimeout(() => { noSwitchAndLose(); }, 3500)
		} else {
			setTimeout(() => { noSwitchAndWin(); }, 3500)
		}
	}
}
doorImage3.onclick = () => {
	row1.hidden = true;
	doorThree.hidden = false;
	setTimeout(() => { doorThree.hidden = true; }, 1000);
	setTimeout(() => { row2.hidden = false; }, 1000)

	if (openDoor1 === losePath) {
		setTimeout(() => { doorImage1.src = openDoor1; }, 2000);

	} else if (openDoor2 === losePath) {
		setTimeout(() => { doorImage2.src = openDoor2; }, 2000);
	}

	switchChoiceYes.onclick = () => {
		if (doorImage1.src === losePath) {
			row2.hidden = true;
			instructions.innerHTML = "You switched to door 2";
			setTimeout(() => { instructions.innerHTML =
			"Revealing your chosen door..."; }, 1000);
			setTimeout(() => { doorImage2.src = openDoor2; }, 2500);
			if (openDoor2 === losePath) {
				setTimeout(() => { switchAndLose(); }, 3500)
			} else {
				setTimeout(() => { switchAndWin(); }, 3500)
			}
		} else if (doorImage2.src === losePath) {
			row2.hidden = true;
			instructions.innerHTML = "You switched to door 1"
			setTimeout(() => { instructions.innerHTML =
			"Revealing your chosen door..."; }, 1000);
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
		instructions.innerHTML = "Your choice is still door 3"
		setTimeout(() => { instructions.innerHTML =
		"Revealing your chosen door..."; }, 1000);
		setTimeout(() => { doorImage3.src = openDoor3; }, 2500);
		if (openDoor3 === losePath) {
			setTimeout(() => { noSwitchAndLose(); }, 3500)
		} else {
			setTimeout(() => { noSwitchAndWin(); }, 3500)
		}
	}
}
