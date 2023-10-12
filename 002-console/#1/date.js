#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv)).argv

//command - current
if(argv._[0] == 'current') {
    if(argv.year || argv.y) {
        console.log(new Date().getFullYear())
    }
    else if(argv.month || argv.m) {
        console.log(new Date().getMonth() +1)
    }
    else if(argv.date || argv.d) {
        console.log(new Date().getDate())
    }
    else {
        console.log(new Date())
    }
}

//command - add
if(argv._[0] == 'add') { 
    if(argv.date || argv.d) { //date
        var dopsymbol = 0
        if(argv.date) {
            dopsymbol = argv.date   
        } else dopsymbol = argv.d
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + dopsymbol);
        console.log(currentDate);
    }
    if(argv.month || argv.m) { //month
        var dopsymbol = 0
        if(argv.month) {
            dopsymbol = argv.month   
        } else dopsymbol = argv.m
        const currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth() + dopsymbol);
        console.log(currentDate);
    }
    if(argv.year || argv.y) { //year
        var dopsymbol = 0
        if(argv.year) {
            dopsymbol = argv.year   
        } else dopsymbol = argv.y
        const currentDate = new Date();
        currentDate.setFullYear(currentDate.getFullYear() + dopsymbol);
        console.log(currentDate);
    }
}


//command - sub
if(argv._[0] == 'sub') {
    if(argv.date || argv.d) { //date
        var dopsymbol = 0
        if(argv.date) {
            dopsymbol = argv.date   
        } else dopsymbol = argv.d
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - dopsymbol);
        console.log(currentDate);
    }
    if(argv.month || argv.m) { //month
        var dopsymbol = 0
        if(argv.month) {
            dopsymbol = argv.month   
        } else dopsymbol = argv.m
        const currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth() - dopsymbol);
        console.log(currentDate);
    }
    if(argv.year || argv.y) { //year
        var dopsymbol = 0
        if(argv.year) {
            dopsymbol = argv.year   
        } else dopsymbol = argv.y
        const currentDate = new Date();
        currentDate.setFullYear(currentDate.getFullYear() - dopsymbol);
        console.log(currentDate);
    }
}

