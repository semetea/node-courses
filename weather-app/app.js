const request = require('postman-request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

// const url = "http://api.weatherstack.com/current?access_key=6c15c01c6e5fa31d683e3d1f359860ab&query=37.6584,126.8320"

// request({ url: url, json: true}, (error, response)=>{
//     if(error) {
//         console.log('Unable to connect to weatehr service!')
//     }
    
//     else if(response.body.error) {
//         console.log('Unable to find location')
//     }

//     else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degress out')
//     }
// })

// Geocoding
// Address -> Lat/Long -> Weather
// const address = 'Seoul'
// const url2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1Ijoic2VtZXRlYSIsImEiOiJjbDBqNWp1MWEwOWJ1M2lyazFwYXdkc21qIn0.6Gkqh2bnBqbcbU3ANTOjVQ&limit=1"

// request({ url : url2, json: true}, (error, response)=> {
//     if(error) {
//         console.log('Unable to connect to service')
//     }
//     else if(response.body.features.length == 0) {
//         console.log('Unable to find the location')
//     }
//     else {
//         console.log("Latitude: " + response.body.features[0].center[1])
//         console.log("Longtitude: " + response.body.features[0].center[0])
//     }
// })


geocode('Toronto', (error, data)=> {
    console.log('Error: ', error)
    console.log('Data: ' , data)
})


forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })