const request = require('request')

const geocode = (address, callback) => {
    url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address + '.json?access_token=pk.eyJ1IjoiaW5kdWtvbSIsImEiOiJjbDQ5d28ycnYxNmRlM2NyM2RxcmtxZmduIn0.pb6HSHvMtTX_SjVNwfQNnQ'

    request({ url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to the Map Box service', undefined)
        } else if(body.features.length === 0 ) {
            callback('Unable to find location. Try another location.', undefined)
        } else {
            callback(undefined, {
                lat: body.features[0].center[1],
                long: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode