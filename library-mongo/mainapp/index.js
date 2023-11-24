const express = require('express')
const mongoose = require('mongoose')

const errorMiddleware = require('./middleware/error');


const indexBoooks = require('./routes/index')
const apiBoooks = require('./routes/books')
const listOfUser = require('./routes/user')


const app = express()
app.use(express.urlencoded());
app.set("view engine", "ejs");

app.use('/', indexBoooks) //работаем с книгами
app.use('/api/books', apiBoooks) //работаем с книгами по API
app.use('/api/user', listOfUser) //работаем с пользователями


app.use(errorMiddleware);


const server = process.env.UrlDB || 'root:example@mongo:27017' 
const database = process.env.DataBase || 'admin' 
const PORT = process.env.PORT || 3000     

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://${server}/${database}`)

    console.log('MongoDB connected!!')
  } catch (err) {
    console.log('Failed to connect to MongoDB', err)
  }
}

connectDB()




console.log(`Работаем по порту ${PORT}`)
console.log(`URL ${UrlDB}`)
app.listen(PORT)