# The Monty Hall Problem

![monty_hall](https://user-images.githubusercontent.com/52511353/202871777-56df5935-d665-44bf-992f-1d3c188237ac.jpeg)

---

## Background

[View site live here](https://dominicsimpson.github.io/themontyhallproblem/)

### Imagine being on a TV game show in the 1970s called *Let's Make A Deal*. The game show host, in a sporting gray chequered suit, shows you, the contestant, three doors on the stage. You are informed that behind one of these doors is a shining sports car, which will be yours. Behind the other two are...goats. 
###### If you choose the right door, you get to keep the shiny sports car. If you choose the wrong door...well, you *could* take the goat home (provided you don't live in a flat, in which case it would be awkward) - they are noble creatures after all.
###### Let's say that you choose door number one, because the human brain tends to favour linearity. Rather than opening that door, however, the host - who knows what's behind the doors - elects to open door number three instead. Behind the third door is one of the goats. The host then says to you, "Do you want to pick door number two?" At which point you ask yourself: is it to your advantage to switch to door number two as your chosen door? Or should you stay with door number one, your original choice?
###### This conundrum is known as The Monty Hall problem - a probability puzzle, which has been poured over by statisticans and mathmaticians. The puzzle was solved by Marilyn vos Savant, an American magazine columnist with the highest recorded intelligence quotient in the *Guinness Book of Records*. Vos Savant observed that the contestent would be correct in switching doors, because this would mean a two in three $^\frac{2}{3}$ (or 66.6666666) probability of uncovering the door with the car, compared with only a one in three $^\frac{1}{3}$ (or 33.3333333) probability if the contestent stayed with the original choice of door.
###### When the contestant first makes their choice, there is a two in three $^\frac{2}{3}$ chance that the car is behind one of the unchosen doors. This probability does not change after the host reveals a goat behind one of the unchosen doors. When the host provides information about the two unchosen doors (revealing that one of them, door number three, does not have the car behind it), the two in three $^\frac{2}{3}$ chance of the car being behind one of the unchosen doors rests on the unchosen and unrevealed door - door number two - as opposed to the one in three $^\frac{1}{3}$ chance of the car being behind the door that the contestent chose initially (door number one). 
###### This confounding logic has led to the problem gaining a lot of mathmatical equations and statistical analysis, such as in the images below:

![monty-hall-problem-mathmaticalequation](https://user-images.githubusercontent.com/52511353/202873316-72600ac2-83d9-44ee-94cf-ef51a03d3eb9.png)

![monty-hall-problem-mathmaticalequation(2)](https://user-images.githubusercontent.com/52511353/202872160-da03657d-b52a-445f-b638-f68e68b294cb.jpg)

--- 
## Preparation

###### In order to prepare for writing a program that demonstrates that Vos Savant was and is correct, my first step was to complete some Photoshop mock-ups first that helped me to visualise the problem, without having to use complex mathmatical equations. You can see them below. They should be read down (as columns) rather than across (as rows). 

![MontyHallProblem_Visualisation1](https://user-images.githubusercontent.com/52511353/202873322-a004bb5c-82ab-459d-aff4-6b3623dc5582.jpg)

###### In the simple example above, with each number on the left representing a door, you can see that of the nine possible scenarios, switching gives you statistically a six in nine chance of achieving the door with the car, compared to only three if you stay - the same fractions expressed previously.

![MontyHallProblem_Visualisation2](https://user-images.githubusercontent.com/52511353/202874447-f76882dd-1fe9-4ec5-8323-98a83571d92c.jpg)

###### The above example, meanwhile, runs through the permutations if the user agrees to switch doors. As you can see, there is a two in three chance that the user opens the door that contains the car. This is compared with the image below, which runs through the permutations if the user *doesn't* agree to switch doors. In this scenario, there is a one in three chance that the user open the door that contains the car. 

![MontyHallProblem_Visualisation3](https://user-images.githubusercontent.com/52511353/202874454-97af8b54-72a1-4c89-a550-9c791c5c01a4.jpg)

The second step was to consider the variables and functions that will be required when writing the code and brainstorm them. The first chart below just contains those functions and variables relating to the doors. In addition, I have added some pseudocode to show my approach.

| Variables                       | Description                                                               | Type                  |
| -------------                   |:-------------:                                                            | -----:                |
| body                            | Stores variable from body ID in HTML                                      | DOM variable          |
| doorOne                         | Door 1                                                                    | DOM variable          |
| doorTwo                         | Door 2                                                                    | DOM variable          |
| doorThree                       | Door 3                                                                    | DOM variable          |
| doorImage1                      | Image of door 1                                                           | DOM variable          |
| doorImage2                      | Image of door 2                                                           | DOM variable          |
| doorImage3                      | Image of door 3                                                           | DOM variable          |
| doorResult			  | Logs win or lose							      | Variable	      |
| swithChoiceYes                  | Contestant chooses to switch to other door                                | DOM variable          |
| switchChoiceNo                  | Contestant choose to stay at original door                                | DOM variable          |
| switchAndWinChoice              | If the contestant switches to another door which holds the car ('wins')   | DOM variable          |
| switchAndLoseChoice             | If the contestant switches to another door which contains a goat ('loses')| DOM variable          |
| noSwitchAndWinChoice            | If the contestant doesn't switch doors, but still wins                    | DOM variable          |
| noSwitchAndLoseChoice		  | If the contestant doesn't switch doors, and loses                         | DOM variable          |
| row1                            | Text urging user to select a door                                         | DOM variable          |
| row2                            | Text querying if user wants to switch (includes yes/no buttons)           | DOM variable          |
| winPath                         | If the user chooses door with car                                         | Variable              |
| losePath                        | If the user chooses door with goat                                        | Variable              |
| openDoor1                       | Shuffles door 1                                                           | Variable              |
| openDoor2                       | Shuffles door 2                                                           | Variable              |
| openDoor3                       | Shuffles door 3                                                           | Variable              |
| winner                          | Winning door                                                              | Variable              |
| switchAndWin                    | Displays the result of the player switching and winning                   | Variable              |
| switchAndLose                   | Displays the result of the player switching and losing                    | Variable              |
| noSwitchAndWin                  | Displays the result of the player not switching but still winning         | Variable              |
| noSwitchAndLose                 | Displays the result of the player not switching and losing                | Variable              |
| submitSwitchAndWinReset	  | Resets game								      | DOM variable          |
| submitSwitchAndLoseReset	  | Resets game								      | DOM variable 	      |
| submitNoSwitchAndWinReset	  | Resets game								      | DOM variable	      |
| submitNoSwitchAndLoseReset	  | Resets game								      | DOM variable	      |
| pathCheck			  | Takes math random / math floor result				      | Variable	      |
| display			  | Shows wins and losses						      | DOM variable          |



| Functions                       | Description                                                               | Type                  |
| -------------                   |:-------------:                                                            | -----:                |
| doorResult              	  | Logs win or lose according to door				              | Function              |      
| localStorage			  | Puts results in Local Storage					      | Function 	      |
| displayResult  		  | Displays result							      | Function 	      |


###### Pseudocode:                    
                        
```
function pathCheck() {
	winner = Math.floor(Math.random() * 3);
	if (winner is equal to 1) {
		openDoor1 is winPath;
		openDoor2 is losePath;
		openDoor3 is losePath;
	} else if (winner is equal to 2) {
		openDoor2 is winPath;
		openDoor1 is losePath;
		openDoor3 is losePath;
	} else {
		openDoor3 is winPath;
		openDoor2 is losePath;
		openDoor1 is losePath;
	}
}
```

---
