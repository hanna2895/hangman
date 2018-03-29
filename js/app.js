const words = ["purple", 'green', 'chartreuse', 'lavender', 'indigo', 'maroon', 'orange', 'salmon', 'firebrick', 'brown', 'yellow', 'turquoise', 'cyan', 'olive', 'magenta', 'fuchsia', 'goldenrod', 'orchid', 'plum']

let rounds = 0;
$("#rp").text("Rounds Played: " + rounds)
let roundsWon = 0;
$('#rw').text("Rounds Won: " + roundsWon)
// $('.scoreboard').text("Rounds Played: " + rounds + "\n Rounds Won: " + roundsWon)

let wordDisplay = "";
let wordSelected;

let incorrectGuesses = "";
let guessesRemaining = 10;
let correctGuesses = 0;

// make a button that starts the game and pulls a random word from the array
const startGame = () => {
	if (wordDisplay === "") {
		const randWord = Math.floor(Math.random() * words.length);
		wordSelected = words[randWord]
		const wordLength = wordSelected.length;
		for (let i = 0; i < wordLength; i++) {
			wordDisplay += "_ "
		}
		$('.word').text(wordDisplay)
	} else {
		alert("Please finish your current game or click reset to play again.")
	}
}

$('#start').on('click', () => {
	startGame();
})

$(".guess").on('click', () => {
	let userInput = $('input').val();
	wordArray = wordSelected.split("");
	jWord = $('<div>').addClass("word")
	jWord.text(wordSelected);
	
	let match = undefined;;

	for (let i = 0; i < wordArray.length; i++) {
		if (userInput === wordArray[i]) {
			let displayArray = wordDisplay.split(" ")
			displayArray[i] = userInput;
			wordDisplay = displayArray.join(" ")
			$('.word').text(wordDisplay)
			match = true;
			correctGuesses += 1
		} 
	}

	if (match != true) {
		if (incorrectGuesses === "") {
			incorrectGuesses += userInput
		} else {
			incorrectGuesses += ", " + userInput
		}
			
		$('.incorrect').text("Letters Guessed: "+ incorrectGuesses)
		guessesRemaining -= 1;
		$('.remaining').text("Guesses Remaining: " + guessesRemaining)
	// 		return;
	} else {
		
	}

	if (guessesRemaining === 0) {
		alert("GAME OVER, YOU SUCK. Click reset to play again.")
	}

	if (correctGuesses === wordSelected.length) {
		$('body').css({
			'background-color': wordSelected,
			'color': 'white'
		})
		if (wordSelected === "lavender" || wordSelected === "yellow") {
			$('body').css('color', 'black')
		}
		alert("You won! Click reset to play again.")
		roundsWon += 1;
		$('#rw').text("Rounds Won: " + roundsWon)
	}

	$('input').val("")
	})


$('#reset').on('click', () => {
	wordDisplay = "";
	incorrectGuesses = "";
	correctGuesses = 0;
	guessesRemaining = 10;
	rounds += 1
	$('#rp').text("Rounds Played: " + rounds)
	$('.word').text("")
	$('.incorrect').text("Letters Remaining: ")
	$('.remaining').text("Guesses Remaining: ")
})

// // TO GUESS
// USER INPUTS A VALUE
// grab that value
// split the string 
// check for match
// if there's a match,
// split the word display string
// set word display / 4 = to that letter
// join that string back together
// update the display
// if there's not a match,
// put that letter into the incorrect guesses array





// make score say how many guesses the user has remaining


// DISPLAYING WORDS
// grab a random word from the words array
// find the length of that word
// make the number of blanks appear on the screen

// GUESSING WORDS
// get the letter that the user types
// iterate through the word
// if that letter matches the letters in the word, fill in that blank
// if that letter does not match letters in the word, add that letter to the guessed letters array and subtract one from the incorrect guesses remaining 
// if the user gets too many incorrect guesses, the game is over
// if the user guesses the word correctly, add 1 to their rounds won counter;

