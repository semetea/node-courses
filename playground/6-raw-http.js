const https = require('http')

const url = "http://api.weatherstack.com/current?access_key=6c15c01c6e5fa31d683e3d1f359860ab&query=45,-75&units=f"

const request = https.request(url, (response)=> {
    let data = ''


    response.on('data', (chunk)=> {
        data = data + chunk.toString()
    })

    response.on('end', ()=> {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error)=> {
    console.log('An error', error)
})

request.end()