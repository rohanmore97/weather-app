const request = require('request');

const forcast = (latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=09cb2a323004c046660a30613b734b4f&query=' + latitude + ',' + longitude;
    request({url,json:true},(error,{body})=>{
        if(error) {
            callback('low level error', undefined)
        }
        else if(body.error) {
            callback('forcast not exist', undefined)
        }
        else{
            console.log(body)
            callback(undefined, ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip+ '% chance of rain.')
        }
    })

}

module.exports = forcast;