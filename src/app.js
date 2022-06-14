const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('../src/utils/geocode')
const forecast = require('../src/utils/forecast')

const app = express()

/** Define paths for Express Config */
//Serve the folder
const publicDirPath = path.join(__dirname, '../public')
// Custom foldername, default is views
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Dynamic rendering - Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirPath))

// Handle bars are needed for adding templates support
app.get('', (req, res) => {
    // Renders the hbs , ist argument : name of the view, second argument: object the view needs to access
    res.render('index', {
        title: 'Weather App',
        name: 'Indrani Kommareddy'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Indrani Kommareddy'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'This is the Help Document!',
        title: 'Help',
        name: 'Indrani Kommareddy'
    })
})

app.get('/weather', (req,res) => {
    if(!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    } 
    geocode(req.query.address, (error, {lat, long, location} = {}) => {
        if (error) {
            return res.send({ error })
        }
        
        forecast(lat, long, (error, forecastData) => {
            if(error) {
                return res.send({ error })
            }
            return res.send({
                forecast: forecastData.data,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/products', (req, res) => {

    if(!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        name: 'This is Help Page Error',
        title: 'Error',
        error: 'Help article not found'
    })
})
app.get('*', (req, res) => {
    res.render('404', {
        name: 'This is 404 Error',
        title: 'Error',
        error: 'My 404 page'
    })
})

// Start the server
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})