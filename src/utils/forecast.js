
const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=79c7bac3148f304519180700448921a8&query=" + latitude + "," + longitude + "&units=f"
    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback("Unable to connect to weather service!")
        } else if (body.error) {
            callback('unable to find location', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees but it feels like ${body.current.feelslike} degrees`)
        }
    })

}
module.exports = forecast