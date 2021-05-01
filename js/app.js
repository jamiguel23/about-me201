'use strict';

// console.log('wazzzzzup world?');

let userName = prompt('What is your name?');

alert('Welcome ' + userName + '! Answer the following questions with yes/no or y/n');

let questionOne = prompt(' Do I live in Seattle?').toLowerCase();

if(questionOne === 'yes' || questionOne === 'y'){
  // console.log('you are correct! I live in Seattle');
  alert('you are correct! I live in Seattle');
// Here I am starting to add more logic and an eventual loop
// }if(answerOne === 'no'){
//   console.log('try again');
//   alert('Wrong! try again.');
}

let questionTwo = prompt(' Did I used to live in San Jose, CA?').toLowerCase();

if(questionTwo === 'no' || questionTwo === 'n'){
  // console.log('Correct! I did NOT ever live in San Jose, CA. I have lived in Oakland, CA');
  alert( 'Correct! I did NOT ever live in San Jose, CA. I have lived in Oakland, CA');
}
let questionThree = prompt(' Do I work at Zillow?').toLowerCase();

if(questionThree === 'yes' || questionThree === 'n'){
  // console.log('DING DING DING! I DO work at Zillow');
  alert('DING DING DING! I DO work at Zillow');
}


let answerFour = prompt(' Was Chief Seattle the name of my High School?').toLowerCase();

if(answerFour === 'no' || answerFour === 'n'){
  // console.log('YOU ARE CORRECT! The name if my high school is Chief Sealth');
  alert('YOU ARE CORRECT! The name if my high school is Chief Sealth');
}

let answerFive = prompt(' Am I married?').toLowerCase();

if(answerFive === 'yes' || answerFive === 'y'){
  // console.log('Yes, I am married. #marriedlife');
  alert('Yes, I am married. Good job ' + userName+ ' #marriedlife');
}

alert('Congrats ' + userName + '! Read more on this page to learn more about me' );


// Lab 3 notesklo2
// add 6th question
alert(`Now we will pay a guessing game. You will guess a number between 1-20 and I will tell you if you are high or low. You have 4 guesses. GOOD LUCK!`)

// respond if too high

let guessingGame = prompt('Guess a number between 1-20');

let attemptsRemaining =3
let attempts = 7;

if( guessingGame === '12'){
  console.log(`You are correct!`)
}

// for (let i =0; i<= attemptsRemaining; i++){
//   console.log(`I am in the for loop number of attempts remaining: ${attempts - i -1}`);
// }



// respond if too low
// respond if correct AND guesses remain
// //respond if not correct and no guesses remain
// increment score if answers correctly
