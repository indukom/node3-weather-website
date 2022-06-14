const request = require('request')

const forecast = (lat, long, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=6ff9ef260e0a7dfc5b12995ccd8d9d95&query='+ lat + ','+ long

    request({ url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service', undefined)
        } else if(body.error) {
            callback('Unable to find location!', undefined)
        } else {
            console.log(body)
            callback(undefined, {
                data: `${body.current.weather_descriptions[0]}  It is currently ${body.current.temperature} degrees out. There is ${body.current.precip}% chance of rain. Tempareature is ${body.current.temperature}`
            })
        }
    })
}

module.exports = forecast