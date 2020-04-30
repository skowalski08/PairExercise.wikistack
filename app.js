const express = require('express')
const morgan = require('morgan')
const layout = require('./views/layout')
const { db } = require('./models')

const app = express()

app.use(morgan('dev'))
app.use(express.static(__dirname + "/public"))  //no public folder yet
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res, next) => {
  try {
    res.send(layout(''))
  } catch (error) {
    next()
    console.log(error)
  }
})

db.authenticate().
then(() => {
  console.log('connected to the database');
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`)
})
