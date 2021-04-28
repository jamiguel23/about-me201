'use strict';

// console.log('wazzzzzup world?');

let userName = prompt('What is your name?');

alert('Welcome' + userName + '! Answer the following questions with yes/no or y/n');

let answerOne = prompt(' Do I live in Seattle?').toLowerCase();

if(answerOne === 'yes' || answerOne === 'y'){
  console.log('you are correct! I live in Seattle');
  alert('you are correct! I live in Seattle')
} 
