const express = require('express')
const indexBoooks = require('./routes/books')
const listOfUser = require('./routes/user')


const app = express()
app.use(express.json())

app.use('/api/books', indexBoooks) //работаем с книгами
app.use('/api/user', listOfUser) //работаем с пользователями

const PORT = process.env.PORT || 3000
console.log(`Работаем по порту ${PORT}`)
app.listen(PORT)