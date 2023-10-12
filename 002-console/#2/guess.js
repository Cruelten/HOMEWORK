#!/usr/bin/env node

//readline
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const luckynumber = Math.round(Math.random()*100) // from от 0 to 100
console.log('Загадано число в диапазоне от 0 до 100')
var recursiveAsyncReadLine = function () {
  rl.question('', function (answer) {
    if (answer < luckynumber) {
        console.log('Меньше')
    }
    else if (answer > luckynumber){
        console.log('Больше')
    }
    else {
        console.log(`Отгадано число ${answer}`)
        return rl.close(); //closing RL
    } 
    recursiveAsyncReadLine(); //Calling this function again to ask new question
  });
};

recursiveAsyncReadLine(); //start our function