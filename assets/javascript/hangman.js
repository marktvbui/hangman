// global variables

var wordOptions = ['mulan', 'aurora', 'shrek', 'fiona', 'mushu', 'shang', 'cinderella', 'mickey', 'donald', 'minnie', 'winnie', 'pluto', 'snowwhite', 'max', 'aladdin', 'jasmine', 'genie', 'abu', 'jafar', 'belle', 'beast', 'adam', 'gaston', 'baymax', 'hiro', 'dumbo', 'marlin', 'dory', 'nemo', 'elsa', 'anna', 'olaf', 'kristoff', 'hercules', 'hera', 'zues', 'hades', 'joy', 'sadness', 'fear', 'anger', 'disgust', 'lilo', 'stitch', 'simba', 'nala', 'timon', 'pumbaa', 'ariel', 'eric', 'mike', 'boo', 'peterpan', 'tinkerbell', 'wendy', 'pinocchio', 'pocahontas', 'fauna', 'flora', 'merryweather', 'tarzan', 'jane', 'woody', 'buzz', 'ralph', 'hops', 'merida', 'moana', 'minion', 'walle', 'gru', 'stewart', 'bob', 'kevin', 'kubo', 'sid', 'kenshin', 'kaoru', 'yahiko', 'sano'];

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
  console.log(lettersinWord);
  console.log(numBlanks);
  console.log(blanksAndSuccesses);
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
    wrongLetters.push(letter);
    guessesLeft--;
  }

  console.log(blanksAndSuccesses);
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
  } else if (guessesLeft == 0) {
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

