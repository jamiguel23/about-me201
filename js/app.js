'use strict';

// console.log('wazzzzzup world?');

let score = 0;

let userName = prompt('What is your name?');
alert('Welcome ' + userName + '! Answer the following questions with yes/no or y/n');

function q1(){
  let questionOne = prompt(' Do I live in Seattle?').toLowerCase();

  if(questionOne === 'yes' || questionOne === 'y'){
    // console.log('you are correct! I live in Seattle');
    alert('you are correct! I live in Seattle');
    score++;
  // // Here I am starting to add more logic and an eventual loop
  // // }if(answerOne === 'no'){
  // //   console.log('try again');
  // //   alert('Wrong! try again.');
  }
}
q1();

function q2(){
  let questionTwo = prompt(' Did I used to live in San Jose, CA?').toLowerCase();

  if(questionTwo === 'no' || questionTwo === 'n'){
    // console.log('Correct! I did NOT ever live in San Jose, CA. I have lived in Oakland, CA');
    alert( 'Correct! I did NOT ever live in San Jose, CA. I have lived in Oakland, CA');
    score++;
  }
}
q2();

function q3(){
  let questionThree = prompt(' Do I work at Zillow?').toLowerCase();

  if(questionThree === 'yes' || questionThree === 'y'){
    // console.log('DING DING DING! I DO work at Zillow');
    alert('DING DING DING! I DO work at Zillow');
    score++;
  }
}
q3();

function q4(){
  let answerFour = prompt(' Was Chief Seattle the name of my High School?').toLowerCase();

  if(answerFour === 'no' || answerFour === 'n'){
    // console.log('YOU ARE CORRECT! The name if my high school is Chief Sealth');
    alert('YOU ARE CORRECT! The name if my high school is Chief Sealth');
    score++;
  }
}
q4();

function q5(){
  let answerFive = prompt(' Am I married?').toLowerCase();

  if(answerFive === 'yes' || answerFive === 'y'){
    // console.log('Yes, I am married. #marriedlife');
    alert('Yes, I am married. Good job ' + userName+ ' #marriedlife');
    score++;
  }
}
q5();
alert('Congrats ' + userName + '! Read more on this page to learn more about me' );

// Lab 3
// add 6th question
alert('Now we will pay a guessing game. You will guess a number between 1-20 and I will tell you if you are high or low. You have 4 guesses. GOOD LUCK!');

let attemptsRemaining =3;
let attempts = 3;
let answerSix = 12;
// created for loop 

for (let i =0; i<= attemptsRemaining; i++){
  let questionSix = parseInt(prompt('Guess a number between 1-20'));
  if( questionSix === answerSix) {
    console.log('You are correct!');
    alert('You are correct!');
    score++;
    break;
    // respond if too low
  } else if(questionSix < answerSix){
    console.log('Too low');
    alert('Too low');

    // respond if too high
  } else if(questionSix > answerSix){
    console.log('Too high');
    alert('Too high');
  }
  // //respond if not correct and no guesses remain
  if (i===attemptsRemaining - 1){
    console.log(`The correct number is ${answerSix}`);
    alert(`Sorry, all attempts are used.The correct number is ${answerSix}`);
    break;
  }

}
// respond if correct AND guesses remain

let count = 6;
let attemptsQ7= 6;
let answerCorrectly = false;



while (count && !answerCorrectly){
  let favFoods = ['tamale', 'ramen', 'chinese hot pot', 'japanese curry', 'brisket'];
  let questionSeven = prompt( 'Guess one of my favorite foods').toLowerCase();

  for (let i = 0; i < favFoods.length; i++) {
    if (questionSeven === favFoods[i]) {
      console.log('Correct!');
      alert('Correct!');
    answerCorrectly = true;
    score++;
    break;
    //Something here isn't working correctly. Its running 5 times
  } else if (questionSeven !== favFoods[i]);
      console.log('Incorrect. Try again'); 
      alert('Incorrect. Try again');
}
if (count === 1){
  console.log('All attemps used. These answers would be correct: tamale, ramen,chinese hot pot, japanes curry, and brisket');
  alert('All attemps used. These answers would be correct: tamale, ramen, chinese hot pot, japanese curry, and brisket');
}
count--;
}


// increment score if answers correctly
console.log(`Your score is ${score} out of 7` );
alert(`Your score is ${score} out of 7` );
