'use strict';

// console.log('wazzzzzup world?');

let userName = prompt('What is your name?');

alert('Welcome ' + userName + '! Answer the following questions with yes/no or y/n');

let answerOne = prompt(' Do I live in Seattle?').toLowerCase();

if(answerOne === 'yes' || answerOne === 'y'){
  console.log('you are correct! I live in Seattle');
  alert('you are correct! I live in Seattle');
// }if(answerOne === 'no'){
//   console.log('try again');
//   alert('Wrong! try again.');
}

let answerTwo = prompt(' Did I used to live in San Jose, CA?').toLowerCase();

if(answerTwo === 'no' || answerTwo === 'n'){
  console.log('Correct! I did NOT ever live in San Jose, CA. I have lived in Oakland, CA');
  alert( 'Correct! I did NOT ever live in San Jose, CA. I have lived in Oakland, CA');
}


