const request = require('postman-request')

const geocode = (address,callback)=> {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +  '.json?access_token=pk.eyJ1Ijoic2VtZXRlYSIsImEiOiJjbDBqNWp1MWEwOWJ1M2lyazFwYXdkc21qIn0.6Gkqh2bnBqbcbU3ANTOjVQ&limit=1'
    request({url, json: true}, (error,{ body })=> {
        console.log(body.features.length)
        if(error) {
            callback('Unable to connect to location services!', undefined)
        } else if(body.features.length == 0) {            
            callback('Unable to find the location', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longtitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })

}


module.exports = geocode