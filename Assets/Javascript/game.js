//Variables
//-----------------------------------------------------------------------------
//Need to make sure that words with two or more instances of a letter can be answered
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

    rightGuesses = 0;
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

    rightGuesses = 0;
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

    //Populate spaces. Currently is not showing all spaces for each word. Only showing one. 
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

    //if userKey exists in the word than run this function
    if (storedGuess.indexOf(userKey) > -1) {
        //Loops based on number of blanks
        for (var i = 0; i < space; i++) {
            //fills in right index with user key
            if (storedLetters[i] === userKey) {
                rightGuesses++; //just changed. see if this works.
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
        //Test
        console.log('Wrong letters: ' + incorrect);
        console.log('Guesses left: ' + guessesRemain);
    }
}
//Win/Loss conditions 
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
        if (letterGuessed === doubleLetter[i] && test === true) { //This makes sure that if the word has multiple instances of the same letter, all will be revealed with one guess.
            var spliceDletter = doubleLetter.splice(i,1);
            //TEST
            console.log('Double letter is = ' + doubleLetter[i])
            console.log('Spliced word is = ' + spliceDletter);

            compareLetters(letterGuessed);
            winLose();
        }
    }
}
