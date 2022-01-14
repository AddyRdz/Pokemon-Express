// Dependencies
const express = require('express')

const app = express()
const PORT = 3000

// Configuring
app.set('view engine', 'ejs')


app.get('/',(req, res) =>{
    console.log('This is hard')
    res.send('Hello')
})


// Start the server
app.listen(PORT, () => {
    console.log(`Server is started on port ${PORT}`)
})