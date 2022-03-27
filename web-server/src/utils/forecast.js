const request = require('postman-request')




const forecast = (latitude, longtitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=6c15c01c6e5fa31d683e3d1f359860ab&query=" + latitude + "," + longtitude
    
    request({ url, json: true}, (error,{ body })=> {
        if(error) {
            callback('Unable to connect to forecast services', undefined)
        }
        else if(body.error) {
            callback('Unable to find the location', undefined)
        }
        else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degress out. The humidity is ' + body.current.humidity + "%")
        }
    })
}

module.exports=forecast