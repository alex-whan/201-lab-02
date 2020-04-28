'use strict';

// while( (isSithLordOrMaster != 'yes') && (isSithLordOrMaster != 'no') ){
  // isSithLordOrMaster = prompt('Are you a Sith Lord? (yes or no)).toLowerCase();

// User welcome greeting
var userName = prompt('Hello! Welcome to my personal page for Lab 2 of Code 201. What is your name?');
console.log('The user\'s name is: ' + userName)
alert('It\'s wonderful to meet you, ' + userName + '! I hope that your visit to this page will help you learn a bit more about me. Please read my brief biography, and scroll down to challenge your memory with my \"About Me\" quiz!');

// "About Me" Guessing Game Quiz - maybe needs to just be unknown knowledge rather than info from the "About Me"?

// Question 1
var fromSeattle = prompt('Question 1: Am I from the Seattle area? Please answer \"yes\" or \"no\".').toLowerCase();
console.log(userName + ' answered \"' + fromSeattle + '\" to Question 1.');

// While loop to force user to answer 'yes' or 'no'
while( (fromSeattle != 'yes') && (fromSeattle != 'no') ){
  fromSeattle = prompt('Question 1: Am I from the Seattle area? Please answer \"yes\" or \"no\".').toLowerCase();
}

// If/Else statement to determine alert response
if(fromSeattle == 'no'){
  alert('Solid try, but incorrect. I am from the suburbs of Seattle. Issaquah for life!');
} else {
  alert('Nicely done! I am indeed from the Seattle area. Issaquah for life!');
}

//Question 2
var favoriteFruit = prompt('Question 2: Is my favorite fruit a pear? Or something else? Please answer \"yes\" or \"no\".').toLowerCase();
console.log(userName + ' answered \"' + favoriteFruit + '\" to Question 2.');

//While loop to force user to answer 'yes' or 'no'
while( (favoriteFruit != 'yes') && (favoriteFruit != 'no') ){
  favoriteFruit = prompt('Question 2: Is my favorite fruit a pear? Or something else? Please answer \"yes\" or \"no\".').toLowerCase();
}

// If/Else statement to determine alert response
if(favoriteFruit == 'no'){
  alert('No dice! My favorite fruit is the venerable and delicious pear. No competition!');
} else {
  alert('YES! You got it! The pear is the greatest fruit on the planet. Versatile and delicious.');
}

// Question 3
var formerTravelIndustry = prompt('Question 3: Did I work in the travel industry before beginning Code Fellows? Please answer \"yes\" or \"no\".').toLowerCase();
console.log(userName + ' answered \"' + formerTravelIndustry + '\" to Question 3.');

//While loop to force user to answer 'yes' or 'no'
while( (formerTravelIndustry != 'yes') && (formerTravelIndustry != 'no') ){
  formerTravelIndustry = prompt('Question 3: Did I work in the travel industry before beginning Code Fellows? Please answer \"yes\" or \"no\".');
}

// If/Else statement to determine alert response
if(formerTravelIndustry == 'no'){
  alert('Close, but no cigar. I was a program manager in a Seattle-based travel company before switching to a career in software development.');
} else {
  alert('Nice work! That\'s correct - I was a program manager in a Seattle-based travel company before switching to a career in software development.');
}







