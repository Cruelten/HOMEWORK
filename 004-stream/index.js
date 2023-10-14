#!/usr/bin/env node

// FS and Path
const fs = require('fs')
const { connect } = require('http2')
const path = require('path')



// yargs
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv)).argv

//readline
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });



if(!argv.r) { //проверка на вывод результатов. Если видим флаг -r, то программа выводит результат
    //Название файла без расширения, которое мы получаем из консоли
    const nameFile = argv._[0] + '.json'

    //переменный для занесения проигрыша или выигрыша
    var mywin = 0;
    var mylose = 0; //по умолчанию будут нули

    //Функция диапазона чисел
    function getLuckynumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const luckynumber = getLuckynumber(1, 2) // from от 1 to 2
    console.log('Загадано число в диапазоне от 1 до 2')

    rl.question('', (answer) => {
        // TODO: Log the answer in a database
        if (answer == luckynumber) {
            console.log(`Ура. Вы угадали. Было загадано число ${luckynumber}`)
            mywin = 1; //победил
            writeResult()  //записываем результат
        }
        else {
            console.log(`Вы не угадали! Было загадано число ${luckynumber}`)
            mylose = 1; //проиграл
            writeResult() //записываем результат
        } 
        rl.close();
    });

    // Наименование файла логирования
    if(nameFile == './undefined.json') {
        var fileForLog = `./${nameFile}` //получаем название файла из консоли
    }
    else {
        var fileForLog = "./log.json" //если не ввели ничего в консоли, то используем стандартный log файл
    }

    // Прием файла и запись данных
    function writeResult() {
        var totalGames = 0
        var wins = 0
        var loses = 0
        var procent = 0


        fs.stat(fileForLog, function(err) {
            if (err) {
                const newData = {}
                newData.totalGames = 1
                newData.wins = mywin
                newData.loses = mylose
                newData.procent = (newData.wins / newData.totalGames)*100  
                fs.writeFile(fileForLog, JSON.stringify(newData), (err)=> {
                    if(err) throw Error(err)
                    console.log('Записали данные в файл')
                })
            } else {
                // Читаем json-файл, результатом в data будет строка
                const readFile = fs.readFileSync(fileForLog, 'utf8')
                const parsedData = JSON.parse(readFile)

                // Заносим новые данные
                const newData = {}
                    newData.totalGames = parsedData.totalGames + 1
                    newData.wins = parsedData.wins + mywin
                    newData.loses = parsedData.loses + mylose
                    newData.procent = (newData.wins / newData.totalGames)*100  

                fs.writeFile(fileForLog, JSON.stringify(newData), (err)=> {
                    if(err) throw Error(err)
                    console.log('Записали данные в файл')
                })
            }
        })
    }
}

// **********************************
// Программа результатов. Показываем лог файл

else {
    if(typeof argv.r === 'boolean') {
        var myLogFile = fs.readFileSync('log.json', 'utf8')
    }
    else {
        var myLogFile = fs.readFileSync(argv.r, 'utf8')
    }
    const parseMyLogFile = JSON.parse(myLogFile)
    console.log(`Всего сыграно: ${parseMyLogFile.totalGames} игр`)
    console.log(`Партий выиграно: ${parseMyLogFile.wins} шт.`)
    console.log(`Партий проиграно: ${parseMyLogFile.loses} шт.`)
    console.log(`Процент выигранных партий: ${parseMyLogFile.procent}%`)
    rl.close();
}


