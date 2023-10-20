#!/usr/bin/env node

const http = require('http')

//Принимаем конфигурационный файл
const conf = require('./config')

// yargs
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv)).argv

//readline
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

const myAPIKey  = process.env.myAPIKey || conf.MyKey 


rl.question('Введите название города\n', (answer) => { //запрашиваем название города

    const url = `http://api.weatherstack.com/current?access_key=${myAPIKey}&query=${answer}`

    http.get(url, (res) =>{
        const {statusCode} = res
        if(statusCode !== 200) {
            console.log(`StatusCode: ${statusCode}`)
            return
        }

        res.setEncoding('UTF8')
        let rowData = ''
        res.on('data', (chunk) => rowData += chunk)
        res.on('end', () => {
            let parseData = JSON.parse(rowData)
            console.log(`Температура в городе ${answer} - ${parseData.current.temperature} градуса(ов) тепла.`)
            console.log(`Скорость ветра - ${parseData.current.wind_speed} км/час.`)
        })
    }).on('error', (err) => {
        console.error(err)
    })

    rl.close();
});