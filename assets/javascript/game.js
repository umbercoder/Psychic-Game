 
var wincount = 0;
var losscount = 0;
var guesscount = 9;
var guesslist = [];
var guessIndex = 0;
var letter = 0;
var Choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


  



 
var Guess = Choices[Math.floor(Math.random() * Choices.length)];

var updateGuessesLeft = function() {
    // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guesscount;
  };
  
  var updateLetter = function() {
    this.letter = this.Choices[Math.floor(Math.random() * this.Choices.length)];
  };
    // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
    document.querySelector('#sofar').innerHTML = "Your Guesses so far: " + guesslist join(', ');
  };
  // Function will be called when we reset everything
  var reset = function() {
    allGuesses = 9;
    guessescount = 9;
    letters = [];
  
    updateLetter();
    updateLeft();
    updateSoFar();
  }
  
  updateLetter();
  updateLeft();
  
  
  //When key is released it becomes the users guess
  document.onkeyup = function(event) {
      guessescount--;
    var myGuess = String.fromCharCode(event.keyCode).toLowerCase();
  
    guessedLetters.push(myGuess);
    updateGuessesLeft();
    updateGuessesSoFar();
  
          if (guessesLeft > 0){
              if (myGuess == letterToGuess){
                  wins++;
                  document.querySelector('#win').innerHTML = "Wins: " + wins;
                  reset();
              }
          }else if(guessescount == 0){

              losses++;
              document.querySelector('#loss').innerHTML = "Losses: " + losses;

              reset();
          }
  };
