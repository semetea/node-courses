const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req,res)=> {
    res.render('index')
})

// app.get('', (req, res)=> {
//     res.send('<h1>Weather</h1>')
// })



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