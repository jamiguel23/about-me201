'use strict';

// console.log('wazzzzzup world?');

let userName = prompt('What is your name?');

alert('Welcome ' + userName + '! Answer the following questions with yes/no or y/n');

let answerOne = prompt(' Do I live in Seattle?').toLowerCase();

if(answerOne === 'yes' || answerOne === 'y'){
  // console.log('you are correct! I live in Seattle');
  alert('you are correct! I live in Seattle');
// Here I am starting to add more logic and an eventual loop
// }if(answerOne === 'no'){
//   console.log('try again');
//   alert('Wrong! try again.');
}

let answerTwo = prompt(' Did I used to live in San Jose, CA?').toLowerCase();

if(answerTwo === 'no' || answerTwo === 'n'){
  // console.log('Correct! I did NOT ever live in San Jose, CA. I have lived in Oakland, CA');
  alert( 'Correct! I did NOT ever live in San Jose, CA. I have lived in Oakland, CA');
}
let answerThree = prompt(' Do I work at Zillow?').toLowerCase();

if(answerThree === 'yes' || answerThree === 'n'){
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

alert('Congrats ' + userName + '! Read more on this page to learn more about me' )
