const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync("1-json.json",bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json') // binary data
// const dataJSON = dataBuffer.toString() // make binary data to string
// const data = JSON.parse(dataJSON)
// console.log(data.title)


//
// Challenge : Work with JSON and the file system
//
// 1. Load and parse the JSON data
// 2. Change the name and age propety using your info
// 3. Stringfy the changed object and overwrite the original data
// 4. Test your work by viewing data in the JSON file



const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)   // make string to object

data.name='Terry'
data.age = 25

const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', userJSON)