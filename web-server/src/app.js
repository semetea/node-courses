const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs') // set view engine as handlebars
app.set('views', viewsPath) // customize views directory
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req,res)=> {
    res.render('index', {
        title: 'Weather App',
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
    res.send({
        forecast: 'Sunny',
        location: 'Seoul'
    })
})

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})