'use strict';

console.log('wazzzzzup world?');

let score = 0;

let userName = prompt('What is your name?');
alert('Welcome ' + userName + '! Answer the following questions with yes/no or y/n');

function q1() {
  let questionOne = prompt(' Do I live in Seattle?').toLowerCase();

  if (questionOne === 'yes' || questionOne === 'y') {
    alert('you are correct! I live in Seattle');
    score++;
  }
  else if (questionOne === 'no' || questionOne === 'n') {
    alert('sorry try again');
  }
}
q1();

function q2() {
  let questionTwo = prompt(' Did I used to live in San Jose, CA?').toLowerCase();

  if (questionTwo === 'no' || questionTwo === 'n') {
    alert('Correct! I did NOT ever live in San Jose, CA. I have lived in Oakland, CA');
    score++;
  }
  else if (questionTwo === 'yes' || questionTwo === 'y') {
    alert('sorry try again');
  }
}
q2();

function q3() {
  let questionThree = prompt(' Do I work at Zillow?').toLowerCase();

  if (questionThree === 'yes' || questionThree === 'y') {
    alert('DING DING DING! I DO work at Zillow');
    score++;
  }
  else if (questionThree === 'no' || questionThree === 'n') {
    alert('sorry try again');
  }
}
q3();

function q4() {
  let answerFour = prompt(' Was Chief Seattle the name of my High School?').toLowerCase();

  if (answerFour === 'no' || answerFour === 'n') {
    alert('YOU ARE CORRECT! The name if my high school is Chief Sealth');
    score++;
  }
  else if (answerFour === 'yes' || answerFour === 'y') {
    alert('sorry try again');
  }
}
q4();

function q5() {
  let answerFive = prompt(' Am I married?').toLowerCase();

  if (answerFive === 'yes' || answerFive === 'y') {
    alert('Yes, I am married. Good job ' + userName + ' #marriedlife');
    score++;
  }
  else if (answerFive === 'no' || answerFive === 'n') {
    alert('sorry try again');
  }
}
q5();
alert('Congrats ' + userName + '! Read more on this page to learn more about me');

alert('Now we will pay a guessing game. You will guess a number between 1-20 and I will tell you if you are high or low. You have 4 guesses. GOOD LUCK!');

function q6(){
  let attemptsRemaining = 3;
  let attempts = 3;
  let answerSix = 12;

  for (let i = 0; i <= attemptsRemaining; i++) {
    let questionSix = parseInt(prompt('Guess a number between 1-20'));
    if (questionSix === answerSix) {
      alert('You are correct!');
      score++;
      break;
    } else if (questionSix < answerSix) {
      alert('Too low');

    } else if (questionSix > answerSix) {
      alert('Too high');
    }
    if (i === attemptsRemaining - 1) {
      alert(`Sorry, all attempts are used.The correct number is ${answerSix}`);
      break;
    }

  }
}

q6();

function q7() {
  let count = 6;
  let answerCorrectly = false;
  let favFoods = ['tamale', 'ramen', 'chinese hot pot', 'japanese curry', 'brisket'];

  while (count && !answerCorrectly) {
    let questionSeven = prompt('Guess one of my favorite foods').toLowerCase();
    count--;
    for (let i = 0; i < favFoods.length; i++) {
      if (questionSeven === favFoods[i]) {
        answerCorrectly = true;
      }
    }
    if (!answerCorrectly && count > 0) {
      alert('Incorrect. Try again');
    }
  }
  if (answerCorrectly) {
    alert('Correct!');
    score++;
  }
  else {
    console.log('All attemps used. These answers would be correct: tamale, ramen,chinese hot pot, japanes curry, and brisket');
    alert('All attemps used. These answers would be correct: tamale, ramen, chinese hot pot, japanese curry, and brisket');
  }
}

q7();

console.log(`Your score is ${score} out of 7`);
alert(`Your score is ${score} out of 7`);
