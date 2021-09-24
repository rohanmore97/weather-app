const path = require('path');
const express = require('express');
const hbs = require('hbs');
const partials = path.join(__dirname,'../partial');
const app = express();
const geolocation = require('../public/utils/geolocation');
const forcast = require('../public/utils/forcast');
const public =  path.join(__dirname,'./public');
hbs.registerPartials(partials);
app.set('view engine','hbs');


app.get('/',(req,res)=>{
    res.render('index',{
        title:'Render',
        name:'n'
    })
})

app.use(express.static(public));

app.get('/weather',(req,res)=>{
    if(!req.query.location) {
        res.send({
            error:'Plase provide existing location'
        })
    }
    else {
        geolocation(req.query.location,(error,{latitude,longitude}={})=>{
            if(error) {
                res.send({
                    error
                })
            }else {
                forcast(latitude,longitude,(error,forcast)=>{
                    if(error){
                        res.send({
                            error
                        })
                    } else{
                        res.send({
                            forcast,
                            location:req.query.location
                        })
                    }
                })
            }
        })
    }
})
app.listen(8000,()=>{
    console.log('server')
})