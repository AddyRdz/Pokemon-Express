// Dependencies
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const PORT = 3000

// Configuring
app.set('view engine', 'ejs')

// Database Models
const pokemon = require('./models/pokemon')

// Middleware 
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.use(methodOverride('_method'))

// "Index" Route
app.get('/pokemon',(req, res) =>{
    res.render('index.ejs',{
        pokemon: pokemon
    })
})

// "New" Route
app.get('/pokemon/new', (req, res) =>{
    res.render('new.ejs')
})

// res.send(pokemon)
app.get('/pokemon',(req, res) => {
    res.json(pokemon)
})


// "Show" Route
app.get('/pokemon/:id',(req, res) =>{
    res.render('show.ejs',{
        pokemon: pokemon[req.params.id]
    })
})

// "Edit" Route
app.get('/pokemon/:id/edit', (req, res) =>{
    const pokemonToEdit = pokemon[req.params.id]
    res.render('edit.ejs', {id: req.params.id, pokemon:pokemonToEdit})
})

// Setting up my route
app.get('/',(req, res) =>{
    console.log('This is hard')
    res.send('Hello')
})

// "Create" Route
app.post('/pokemon', (req, res) => {
    
    pokemon.push(req.body)
    // res.json(req.body)
    res.redirect('/pokemon')
})

// "Destroy" Route
app.delete('/pokemon/:id', (req, res) => {
    console.log('index of pokemon', req.params.id)
    pokemon.splice(req.params.id,1)
    res.redirect('/pokemon')
})

// "Update" Route
app.put('/pokemon/:id',(req, res) =>{
    console.log(pokemon[req.params.id],req.body)
    pokemon[req.params.id] = req.body
    res.redirect('/pokemon/' + req.params.id)
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is started on port ${PORT}`)
})