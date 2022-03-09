const request = require('postman-request')


const forecast = (latitude, longtitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=6c15c01c6e5fa31d683e3d1f359860ab&query=" + longtitude + "," + latitude + "&units=f"
    request({ url: url, json: true}, (error,response)=> {
        if(error) {
            callback('Unable to connect to forecast services', undefined)
        }
        else if(response.body.error) {
            callback('Unable to find the location', undefined)
        }
        else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degress out')
        }
    })
}

module.exports=forecast