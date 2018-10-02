//Define variables here.
var wordbank = ["pumpkin","ghost","witch","samhain","demon","crypt","gravestone","goblin","poltergeist","skulls","zombie"]; //an array of possible word choices. these need to be chosen at random.

var storedGuess = [ ]; //stored guesses.

var guess; //guess

var counter ; //counting correct guesses.

var space ; //number of spaces in a word

var guessesRemain ; //remaining guesses - start at 13

var word ; //current word

//var userGuess = event.key; //determines which key a user pressed

var wordChoice = wordbank[Math.floor(Math.random() * wordbank.length)];//this should randomly pull words from the wordbank.

//Show guesses

comments = function () {
    showGuesses.innerHTML = guessesRemain;
    
    if (guessesRemain < 1) {
        showGuesses.innerHTML = "Game Over";
    }
    for (var i = 0; i < userGuess.length; i++) {
        if (counter + space === userGuess.length) {
            showGuess.innerHTML = "You win!"
        }
    }
}
 //Show word spaces

 result = function () {
    wordHolder = document.getElementById('currentword');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      storedGuess.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }