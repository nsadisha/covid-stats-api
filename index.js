const express = require('express')
const app = express()
const ipl = require('ip-locator')


app.get('/',(req, res, next) => {
  var myip = req.headers['x-forwarded-for'] || req.connection.remoteAddress

  ipl.getDomainOrIPDetails(myip,'json', function (err, data) {
    var countryCode = data.countryCode
    res.json({"code": countryCode})
  })
})

app.listen(process.env.PORT || 3000, ()=>{
  console.log("listening for requests")
})