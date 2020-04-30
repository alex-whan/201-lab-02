'use strict';

// Variable to keep count of correct answers
var correctAnswers = 0;

// User welcome greeting message
var userName = prompt('Hello! Welcome to my personal page for Lab 2 of Code 201. What is your name?');
console.log('The user\'s name is: ' + userName)
alert('It\'s wonderful to meet you, ' + userName + '! I hope that your visit to this page will help you learn a bit more about me. Please read my brief biography, and scroll down to challenge your memory with my \"About Me\" quiz!');

// "About Me" Guessing Game Quiz

// Question 1
var fromSeattle = prompt('Question 1: Am I from the Seattle area? Please answer \"yes\" or \"no\".').toLowerCase();

// While loop to force user to answer 'yes' or 'no'
while( (fromSeattle !== 'yes') && (fromSeattle !== 'no') ){
  fromSeattle = prompt('Question 1: Am I from the Seattle area? Please answer \"yes\" or \"no\".').toLowerCase();
}

// If/Else statement to determine alert response
if(fromSeattle === 'no'){
  alert('Solid try, but incorrect. I am from the suburbs of Seattle. Issaquah for life!');
} else {
  correctAnswers++; 
  console.log(userName + ' answered \"' + fromSeattle + '\" to Question 1.');
  alert('Nicely done! I am indeed from the Seattle area. Issaquah for life!');
}

// Question 2
var favoriteFruit = prompt('Question 2: Is my favorite fruit a pear? Or something else? Please answer \"yes\" or \"no\".').toLowerCase();

// While loop to force user to answer 'yes' or 'no'
while( (favoriteFruit !== 'yes') && (favoriteFruit !== 'no') ){
  favoriteFruit = prompt('Question 2: Is my favorite fruit a pear? Or something else? Please answer \"yes\" or \"no\".').toLowerCase();
}

// If/Else statement to determine alert response
if(favoriteFruit === 'no'){
  alert('No dice! My favorite fruit is the venerable and delicious pear. No competition!');
} else {
  correctAnswers++;
  console.log(userName + ' answered \"' + favoriteFruit + '\" to Question 2.'); 
  alert('YES! You got it! The pear is the greatest fruit on the planet. Versatile and delicious.');
}

// Question 3
var formerTravelIndustry = prompt('Question 3: Did I work in the travel industry before beginning Code Fellows? Please answer \"yes\" or \"no\".').toLowerCase();

//While loop to force user to answer 'yes' or 'no'
while( (formerTravelIndustry !== 'yes') && (formerTravelIndustry !== 'no') ){
  formerTravelIndustry = prompt('Question 3: Did I work in the travel industry before beginning Code Fellows? Please answer \"yes\" or \"no\".').toLowerCase();
}

// If/Else statement to determine alert response
if(formerTravelIndustry === 'no'){
  alert('Close, but no cigar. I was a program manager in a Seattle-based travel company before switching to a career in software development.');
} else {
  correctAnswers++;
  console.log(userName + ' answered \"' + formerTravelIndustry + '\" to Question 3.');
  alert('Nice work! That\'s correct - I was a program manager in a Seattle-based travel company before switching to a career in software development.');
}

// Question 4
var likesAnimalCrossing = prompt('Question 4: Do I like Animal Crossing? Please answer \"yes\" or \"no\".').toLowerCase();

//While loop to force user to answer 'yes' or 'no'
while( (likesAnimalCrossing !== 'yes') && (likesAnimalCrossing !== 'no') ){
  likesAnimalCrossing = prompt('Question 4: Do I like Animal Crossing? Please answer \"yes\" or \"no\".').toLowerCase();
}

// If/Else statement to determine alert response
if(likesAnimalCrossing === 'no'){
  alert('WRONG! Nintendo\'s beloved and relaxing \"Animal Crossing\" has been one of my favorite games since all the way back in 2002.');
} else {
  correctAnswers++;
  console.log(userName + ' answered \"' + likesAnimalCrossing + '\" to Question 4.'); 
  alert('YES! You really earned the bells with that one. Nintendo\'s \"Animal Crossing\" has been a favorite of mine since 2002.');
}

// Question 5
var isNorthwestBest = prompt('Question 5: Is the Pacific Northwest the best? Please answer \"yes\" or \"no\".').toLowerCase();

//While loop to force user to answer 'yes' or 'no'
while( (isNorthwestBest !== 'yes') && (isNorthwestBest !== 'no') ){
  isNorthwestBest = prompt('Question 5: Is the Pacific Northwest the best? Please answer \"yes\" or \"no\".').toLowerCase();
}

// If/Else statement to determine alert response
if(isNorthwestBest === 'no'){
  alert('You know better than that! The beautiful Pacific Northwest is absolutely the best place on Earth.');
} else {
  correctAnswers++;
  console.log(userName + ' answered \"' + isNorthwestBest + '\" to Question 5.'); 
  alert('Bingo. Truer words have never been spoken! The Pacific Northwest is, in fact, the best.');
}


// Question 6

var correctGuess = Math.floor((Math.random() * 10) + 1); // Checked this on W3

//Console log of the secret number to allow me to better test functionality
console.log('The secret number for this session is ' + correctGuess + '.');

//This will be the random number
var whatNumber = prompt('Question 6 calls for a mind game. What number am I thinking of, at this exact moment? Please enter a number between 1 and 10. You have 4 guesses.');

//For loop for 4 guesses - had trouble with getting this to work properly while iterating DOWN, so I switch to iterating UP as a workaround, although the language is clunkier than I would like

for(var guesses = 1; guesses < 5; guesses++){
// If user guesses correctly, exit loop and add +1 to correctGuess score
  if(whatNumber == correctGuess){
    correctAnswers++;
    alert('You nailed it! Great work to guess a number I didn\'t even know myself!');
    break;    
  } 

  // If user exhausts their 4 attempts, exit loop and tell them what the secret number was
  else if(guesses == 4) {
    alert('Sorry! The number on my mind was ' + correctGuess + ', although to be honest, I have no idea where that number came from either.');
    break;
  }

  // If user guesses too high, alert them that their guess was too high and repeat the loop 
  else if(whatNumber > correctGuess){
    whatNumber = prompt('Too high! Please try again. You have ' + guesses + ' of 4 guesses remaining.');
    console.log(userName + ' has used ' + guesses + ' of 4 guesses.');
  } 

  // If user guesses too high, alert them that their guess was too high and repeat the loop 
  else if(whatNumber < correctGuess){
    whatNumber = prompt('Too low! Please try again. You have used ' + guesses + ' of 4 guesses.');
    console.log(userName + ' has used ' + guesses + ' of 4 guesses.');

  } else { // If entry is non-numeric, count one guess and repeat loop
    whatNumber = prompt('Sorry! Please try again. You have used ' + guesses + ' of 4 guesses.');    
  }
}   

// Question 7

// Array for "my favorite Britpop bands"
var myBritpopBands = ['oasis', 'pulp', 'blur'];

// Ask user to guess my favorite Britpop band
var guessBand = prompt('Last, but not least, we have Question 7. Another mind game, of sorts. You have 6 guesses, and there are multiple answers: What is my favorite Britpop band?').toLowerCase();

// For loop of 6 guesses
for(var bandGuesses = 1; bandGuesses < 7; bandGuesses++){
  
// If user guesses correctly, exit loop and add +1 to correctGuess score - can't get anything other than last value to register
  if(guessBand == myBritpopBands[0] || guessBand == myBritpopBands[1] || guessBand == myBritpopBands[2]){
    correctAnswers++;
    alert('Oi! You\'re some kind of mind reader, innit? That is indeed one of the UK\'s finest groups.');
    console.log(userName + ' guessed ' + guessBand + '.');
    break;
  }

  // If user exhausts their 6 attempts, exit loop and tell them what the possibilities were
  else if(bandGuesses == 6) {
    alert('Tough luck, mate. That\s a good one, but I was looking for one of the Big Three of ' + myBritpopBands[0] + ', ' + myBritpopBands[1] + ', or ' + myBritpopBands[2] + '.');
    console.log(userName + ' guessed ' + guessBand + '.');
    break;

  } else { // Keep giving user guesses until they hit 6
    guessBand = prompt('Never heard of them. Try again! You have used ' + bandGuesses + ' of 6 guesses.').toLowerCase();
    console.log(userName + ' guessed ' + guessBand + '.');
  }
}

// Final tally of correct answers
console.log(userName + ' guessed ' + correctAnswers + ' of 7 questions correctly.');
alert('You guessed ' + correctAnswers + ' of 7 questions correctly!');

// Final summary with user's name
alert('You\'ve made it to the end of the quiz, ' + userName + '! Great work. Thanks for taking the time to learn a bit more about me. I hope to add more and more questions to this quiz in the future - lucky you!');






