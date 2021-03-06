// global variables

var wordOptions = ['mulan', 'aurora', 'shrek', 'fiona', 'mushu', 'shang', 'cinderella', 'mickey', 'donald', 'minnie', 'winnie', 'snow white', 'aladdin', 'jasmine', 'genie', 'abu', 'belle', 'beast', 'gaston', 'baymax', 'hiro', 'dumbo', 'marlin', 'dory', 'nemo', 'elsa', 'anna', 'olaf', 'kristoff', 'hercules', 'hera', 'zeus', 'hades', 'joy', 'sadness', 'fear', 'anger', 'disgust', 'lilo', 'stitch', 'simba', 'nala', 'timon', 'pumbaa', 'ariel', 'eric', 'mike', 'boo', 'peterpan', 'tinkerbell', 'wendy', 'pocahontas', 'fauna', 'flora', 'tarzan', 'jane', 'woody', 'buzz', 'ralph', 'hops', 'merida', 'moana', 'minion', 'walle', 'gru', 'stewart', 'bob', 'kevin', 'kubo', 'sid', 'kenshin', 'kaoru', 'yahiko', 'sano', 'magumi', 'raja', 'potatohead', 'peppa', 'george', 'mommy', 'daddy', 'grandpa', 'lucy', 'margo', 'agnes', 'edith', 'granny', 'cricky', 'piglet','shishio','sersha','ben','ponyo','yuki','souhei','hanah','omei','eeyore','winnie','tiger','piglet','christopher','kai','po','tigress','viper','mantis','crane','shifu','oogway','tilung','monkey',];

var selectedWord = [];
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters =[];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;

// functions

function startGame() {
  selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
  lettersinWord = selectedWord.split("");
  numBlanks = lettersinWord.length;

// reset
  guessesLeft = 10;
  wrongLetters = [];
  blanksAndSuccesses = [];

  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push('_');
  }

  document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
  document.getElementById('numGuesses').innerHTML = guessesLeft;
  document.getElementById('winCounter').innerHTML = winCount;
  document.getElementById('lossCounter').innerHTML = lossCount;

  console.log(selectedWord);

}

function checkLetters(letter) {
  var isLetterInWorld = false;

  for (var i = 0; i < numBlanks; i++) {
    if (selectedWord[i] == letter) {
      isLetterInWorld = true;
    }
  }

  if (isLetterInWorld) {
    for (var i = 0; i < numBlanks; i++) {
      if (selectedWord[i] == letter) {
        blanksAndSuccesses[i] = letter;
      }
    }
  } else {
    checkGuesses(letter);
  }

  console.log(blanksAndSuccesses);
}

function checkGuesses(letter) {
  // look at current array and check to see if letter is already present
  if (!wrongLetters.includes(letter)){
    wrongLetters.push(letter);
    guessesLeft--;
  }
}

function roundComplete() {
  console.log('win count: ' + winCount + ' loss count: ' + lossCount + ' guesses left: ' + guessesLeft);

  document.getElementById('numGuesses').innerHTML = guessesLeft;
  document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
  document.getElementById('wrongGuesses').innerHTML = wrongLetters.join(' ');

  if (lettersinWord.toString() == blanksAndSuccesses.toString()){
    winCount++;
    alert('you won! the disney character was: ' + selectedWord);
    document.getElementById('winCounter').innerHTML = winCount;
    startGame();
  } else if (guessesLeft <= 0) {
    lossCount++;
    alert('the secret word was: ' + selectedWord);
    document.getElementById('lossCounter').innerHTML = lossCount;

    startGame();
  }
}
// main processes
startGame();

document.onkeyup = function(event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(letterGuessed);
  roundComplete();
  console.log(letterGuessed);
}

