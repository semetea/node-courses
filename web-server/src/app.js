const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs') // set view engine as handlebars
app.set('views', viewsPath) // customize views directory
hbs.registerPartials(partialsPath) // register partial

// Setup static directory to server
app.use(express.static(publicDirectoryPath))

app.get('', (req,res)=> {
    res.render('index', {
        title: 'Weather',
        name: 'Terry Han'
    })
})

app.get('/about', (req,res)=> {
    res.render('about', {
        title: 'About me',
        name: 'Terry Han'
    })
})

app.get('/help', (req,res)=> {
    res.render('help',{
        title: 'Help',
        name: 'Terry Han',
        message: 'This is some helpful text'
    })
})



app.get('/weather',(req, res)=> {
    if(!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }
    geocode(req.query.address, (error, { latitude, longtitude, location } = {})=> {
        if(error) {
            return res.send({ error })
        }
        forecast(latitude, longtitude, (error, forecastData) => {
            if(error) {
                return res.send({ error })
            }
            
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/products',(req, res) => {
    if(!req.query.search) {
        return res.send({   // 많이 쓰이는 방식(else로 처리할 수 있지만)
            error: 'You must provide a serach term',
        })
    }

    console.log(req.query)
    res.send({
        products: []
    })
})

app.get('/help/*', (req,res) => {
    res.render('404', {
        title: '404',
        name: 'Terry Han',
        errorMessage: 'Help article not found'
    })
})



app.get('*', (req, res)=> {
    res.render('404', {
        title: '404',
        name: 'Terry Han',
        errorMessage: '404 Page not found'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})