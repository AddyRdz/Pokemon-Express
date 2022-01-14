// Dependencies
const express = require('express')

const app = express()
const PORT = 3000

// Configuring
app.set('view engine', 'ejs')

// Database Models
const pokemon = require('./pokemon')

// Middleware 

// index Route

// res.send(pokemon)
app.get('/pokemon',(req, res) => {
    res.json(pokemon)
})

// Show Route



app.get('/',(req, res) =>{
    console.log('This is hard')
    res.send('Hello')
})


// Start the server
app.listen(PORT, () => {
    console.log(`Server is started on port ${PORT}`)
})