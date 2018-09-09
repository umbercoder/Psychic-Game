
var wincount = 0;
var losscount = 0;
var guesscount = 9;
var guessleft = 9;
var guesslist = [];
var letters = undefined;
var Choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];





var updateLeft = function () {
  // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
  document.querySelector('#guessleft').innerHTML = "Guesses left: " + guessleft;
};

var updateLetter = function () {
  letters = Choices[Math.floor(Math.random() * Choices.length)];
  console.log(letters);
};
// Here we take the guesses the user has tried -- then display it as letters separated by commas. 
var updateSoFar = function () {
  document.querySelector('#sofar').innerHTML = "Your Guesses so far: " + guesslist.join(', ');
};
// Function will be called when we reset everything
var reset = function () {
  guessleft = 9;
  guesslist = [];

  updateLetter();
  updateLeft();
  updateSoFar();
}


//When key is released it becomes the users guess
document.onkeyup = function (event) {
  guessleft--;


  var myGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guesslist.push(myGuess);
  updateLeft();
  updateSoFar();
  console.log(updateLeft)

  if (guessleft > 0) {
    if (myGuess == letters) {
      wincount++;
      document.querySelector('#win').innerHTML = "Total Wins: " + wincount;
      reset();
    }
  }
  else if (guessleft == 0) {
    losscount++;
    document.querySelector('#loss').innerHTML = "Total Losses: " + losscount;

    reset();
  }
};
