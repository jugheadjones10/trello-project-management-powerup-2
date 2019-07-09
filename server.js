var express = require('express')
var cors = require('cors')
var request = require('request')

//////////////////////////////////////
const fs = require('fs')
const readline = require('readline')
const {google} = require('googleapis')
// Dependencies required for google map api

// import indexCode from "./index.js"
// indexCode()

var app = express()
var port = process.env.PORT

// your manifest must have appropriate CORS headers, you could also use '*'
app.use(cors({ origin: '*' }))

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html')
}) 

app.get("/clickjack-test", function(request, response){
  response.sendFile(__dirname + "/clickjacking-test.html")
})

// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
})
