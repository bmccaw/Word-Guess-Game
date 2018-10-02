//Variables
//-----------------------------------------------------------------------------
//Need to make sure that words with two instances of a letter can be answered
var doubleLetter = ['a', 'b', 'c',
    'd', 'e', 'f',
    'g', 'h', 'i',
    'j', 'k', 'l',
    'm', 'n', 'o',
    'p', 'q', 'r',
    's', 't', 'u',
    'v', 'w', 'x',
    'y', 'z'];

//Create an array of words (Wordbank).
var wordbank = ["pumpkin", "ghost", "witch", "samhain", "demon", "crypt", "gravestone", "goblin", "poltergeist", "skulls", "zombie"]; //an array of possible word choices. these need to be chosen at random.

var storedGuess = ""; //stored current word choice.

var storedLetters = [];//stored letters in the word.

var correct = []; //holds correct guesses and spaces.

var incorrect = []; //holds incorrect guesses

var space = 0; //number of spaces or blanks in a word

//Counters
var winCount = 0;//number of wins

var loseCount = 0; //number of losses

var guessesRemain = 10; //remaining guesses - start at 10

var rightGuesses = 0;

//Functions
//--------------------------------------------------------------------------

function reset() {
    //Choose a word at random from the array
    storedGuess = wordbank[Math.floor(Math.random() * wordbank.length)];
    //Splits chosen word into letters
    storedLetters = storedGuess.split('');
    //gets the number of spaces
    space = storedLetters.length;

    //Reset
    //---------------------------------------------------------------------

    letterGuessed = 0;
    guessesRemain = 10;
    incorrect = [];
    correct = [];
    doubleLetter = ['a', 'b', 'c',
        'd', 'e', 'f',
        'g', 'h', 'i',
        'j', 'k', 'l',
        'm', 'n', 'o',
        'p', 'q', 'r',
        's', 't', 'u',
        'v', 'w', 'x',
        'y', 'z'];

    test = false;
    startGame();
}

function startGame() {
    //Choose a word at random from the array
    storedGuess = wordbank[Math.floor(Math.random() * wordbank.length)];
    //Splits chosen word into letters
    storedLetters = storedGuess.split('');
    //gets the number of spaces
    space = storedLetters.length;

    //Reset
    //---------------------------------------------------------------------

    letterGuessed = 0;
    guessesRemain = 10;
    incorrect = [];
    correct = [];
    doubleLetter = ['a', 'b', 'c',
        'd', 'e', 'f',
        'g', 'h', 'i',
        'j', 'k', 'l',
        'm', 'n', 'o',
        'p', 'q', 'r',
        's', 't', 'u',
        'v', 'w', 'x',
        'y', 'z'];

    //Populate spaces.
    for (var i = 0; i< space; i++);
    {
        correct.push('_');
        document.getElementById('currentword').innerHTML = correct;
    }

    //Changes to HTML
    document.getElementById('currentword').innerHTML = correct.join(' ');
    document.getElementById('guesses').innerHTML = guessesRemain;
    document.getElementById('wins').innerHTML = winCount;
    document.getElementById('losses').innerHTML = loseCount;
    document.getElementById('wrongguess').innerHTML = incorrect;
    //Testing
    console.log(storedGuess);
    console.log(storedLetters);
    console.log(space);
    console.log(correct);
}
function compareLetters(userKey) {

    console.log('Working!');
    //if userKey exists in the word than run this function
    if (storedGuess.indexOf(userKey) > -1) {
        //Loops based on number of blanks
        for (var i = 0; i < space; i++) {
            //fills in right index with user key
            if (storedLetters[i] === userKey) {
                rightGuesses++;
                correct[i] = userKey;
                document.getElementById('currentword').innerHTML = correct.join(' ');
            }
        }
        //Test
        console.log(correct);
    }
    else {
        incorrect.push(userKey);
        guessesRemain--;
        //Change HTML
        document.getElementById('guesses').innerHTML = guessesRemain;
        document.getElementById('wrongguess').innerHTML = incorrect;

        console.log('Wrong letters: ' + incorrect);
        console.log('Guesses left: ' + guessesRemain);
    }
}
//Win/Loss conditions - need to figure out why game doesn't reset after the first win.
function winLose() {
    if (rightGuesses === space) {
        //Increase win count
        winCount++;
        document.getElementById('wins').innerHTML = winCount;
        alert('You Win!');
        reset();
    }
    else if (guessesRemain === 0) {
        //Increase loss count
        loseCount++;
        document.getElementById('losses').innerHTML = loseCount;
        alert('All out of guesses...');
        reset();
    }
}
//Main code
//---------------------------------------------------------------------------
startGame();

document.onkeyup = function (event) {
    test = true;
    var letterGuessed = event.key;
    for (var i = 0; i < doubleLetter.length; i++) {
        if (letterGuessed === doubleLetter[i] && test === true) {
            var spliceDletter = doubleLetter.splice(i,1);
            //TEST
            console.log('Double letter is = ' + doubleLetter[i])
            console.log('Spliced word is = ' + spliceDletter);

            compareLetters(letterGuessed);
            winLose();
        }
    }
}



// //Choose a word randomly from the array
// var wordChoice = wordbank[Math.floor(Math.random() * wordbank.length)];//this should randomly pull words from the wordbank.

// console.log(wordChoice); //Check to see if the word is being pulled randomly from the array.

// //Pull number of guesses remaining
// var showGuesses = document.getElementById("guesses"); //number of guesses remaining

// console.log(showGuesses); //Check to see if the number of guesses is being pulled. Until the starting number is set, this will be null.

// //Create the letter spaces where the words will go
// var space = () => {
//     for (var i = 0; i < wordChoice.length; i++) {
//         storedGuess.push('_');
//     }
//     return storedGuess
// }

// console.log(space());

// //User Guess - converts keypresses into keyCode and then into actual letter values. Then checks whether the current randomly chosen word contains those letters when they are pressed.

// document.addEventListener('keypress', (event) => {
//     var keyWord = String.fromCharCode(event.keyCode);
//     //if user guess is correct
//     if (wordChoice.indexOf(keyWord) > -1) {
//         //add to the correct array
//         correct.push(keyWord);
//         //replace letter spaces with correct guesses
//         storedGuess[wordChoice.indexOf(keyWord)] = keyWord;
//         //check to see if user word matches guesses
//         if (storedGuess.join('') == wordChoice) {
//             alert("You win!");
//         }
//         console.log(storedGuess);
//     }
//     //if user is incorrect
//     else {
//         incorrect.push(keyWord);
//         //add to incorrect array
//         console.log(incorrect);
//     }
// })
