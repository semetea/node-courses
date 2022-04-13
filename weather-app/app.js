const request = require('postman-request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
const address = process.argv[2]
if(!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, {latitude, longtitude, location} = {})=> { // ={} 는 Default value
        if(error) {
           return console.log(error)
        } 
    
        forecast(latitude, longtitude, (error, forecastData) => {
            if(error) {
                return console.log(error)
            }
    
            console.log('Location: ' + location)
            console.log(forecastData)
          })
        
    })
}

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

// const url = "http://api.weatherstack.com/current?access_key=6c15c01c6e5fa31d683e3d1f359860ab&query=37.6584,126.8320"

// request({ url : url, json:true }, (error, response)=> {
// 	const data = response.body.current
//     console.log("It is currently " + data.temperature + " degress out. If feels like " + data.feelslike + " degrees")
// })





