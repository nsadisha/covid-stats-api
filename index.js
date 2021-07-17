const express = require('express')
const app = express()
const request = require('request')
const ipl = require('ip-locator')

// default route
app.get('/',(req, res, next) => {
  var myip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  ipl.getDomainOrIPDetails(myip,'json', function (err, data) {
    var countryCode = data.countryCode

    request('https://api.covid19api.com/total/country/'+countryCode, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var data = JSON.parse(body.toString())
        res.json(data[data.length-1])
      }else{
        res.json(error)
      }
    })
  })
})

// country code route
app.get('/:code',(req, res, next) => {
  var countryCode = req.params.code
  request('https://api.covid19api.com/total/country/'+countryCode, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body.toString())
      res.json(data[data.length-1])
    }else{
      res.json(error)
    }
  })
})

app.listen(process.env.PORT || 3000, ()=>{
  console.log("listening for requests")
})