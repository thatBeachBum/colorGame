var target;
var guess_input;
var guess_input_text;
var finished = false;
var guesses = 0;
var colors = ["azure", "snow", "cyan", "papayawhip", "gold", "hotpink", "coral", "lime", "tomato", "orange"].sort(); //alpahbetize array

function do_game() {
	
	var random_color = colors[Math.floor(Math.random() * colors.length)];
	target = random_color.toLowerCase();
	
	alert(target);

	while (!finished) {
		guess_input_text = prompt("I am thinking of one of these colors: \n\n" + colors.join(', ') + "\n\nWhat color am I thinking of?");
		guess_input = guess_input_text.toLowerCase();
		guesses += 1;
		finished = check_guess();
	}
}

function check_guess() {
	
	if (colors.indexOf(guess_input) == -1) {
		alert("Sorry, I don't recognize your color.\n\n" + "Please try again.");
		return false;
	}

	if (guess_input > target) {
		alert("Sorry, your guess is not correct!\n\n" + "Hint: your color is alphabetically higher than mine.\n\n" + "Please try again.");
		return false;	
	}

	if (guess_input < target) {
		alert("Sorry, your guess is not correct!\n\n" + "Hint: your color is alphabetically lower than mine.\n\n" + "Please try again.");
		return false;	
	}

	if (guess_input == target) {
		myBody=document.getElementsByTagName("body")[0];
		myBody.style.background = target;
		alert("Congratulations! You've guessed the color!\n\n" + "It took you " + guesses + " guesses to finish the game\n\n" + "You can see the color in the background.");
		return true;	
	}
}



