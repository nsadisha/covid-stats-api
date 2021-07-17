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
// day by day
app.get('/days/:code',(req, res, next) => {
  var countryCode = req.params.code
  var isCumulative = req.query.cumulative
  request('https://api.covid19api.com/total/dayone/country/'+countryCode, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body.toString())

      // processing data
      if(isCumulative=="false"){
        let confirmedCount = data[0].Confirmed
        let deathCount = data[0].Deaths
        let recoveredCount = data[0].Recovered
        for(let i=1; i<data.length; i++){
          data[i].Confirmed -= confirmedCount
          confirmedCount += data[i].Confirmed
          data[i].Deaths -= deathCount
          deathCount += data[i].Deaths
          data[i].Recovered -= recoveredCount
          recoveredCount += data[i].Recovered
        }
      }

      res.json(data)
    }else{
      res.json(error)
    }
  })
})


app.listen(process.env.PORT || 3000, ()=>{
  console.log("listening for requests")
})