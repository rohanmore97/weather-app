const request = require('request')

const geolocation =(address,callback)=>{
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoicm9oYW5tb3JlMTIzIiwiYSI6ImNrdHJncGJqODAxcHIydm1pYjlmZmE3cXAifQ.QHac55pCdXE90qMp17EhlQ`;
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('low level error',undefined);
        }
        else if(body.features.length === 0) {
            callback('Unable to find geolocation', undefined);
        }
        else {
            callback(undefined,{
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0]
            })
        }
    })

}

module.exports = geolocation;