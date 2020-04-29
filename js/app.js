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
var isNorthwestBest = prompt('Last, but not least, we have Question 5: Is the Pacific Northwest the best? Please answer \"yes\" or \"no\".').toLowerCase();

//While loop to force user to answer 'yes' or 'no'
while( (isNorthwestBest !== 'yes') && (isNorthwestBest !== 'no') ){
  isNorthwestBest = prompt('Last, but not least, we have Question 5: Is the Pacific Northwest the best? Please answer \"yes\" or \"no\".').toLowerCase();
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




// Question 7




// Final tally of correct answers
console.log(userName + ' guessed ' + correctAnswers + ' of 5 questions correctly.');
alert('You guessed ' + correctAnswers + ' of 5 questions correctly!');

// Final summary with user's name
alert('You\'ve made it to the end of the quiz, ' + userName + '! Great work. Thanks for taking the time to learn a bit more about me. I hope to add more and more questions to this quiz in the future - lucky you!');





