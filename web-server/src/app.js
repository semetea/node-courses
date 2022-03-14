const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))    // Sending static assest

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