var express = require('express')
var cors = require('cors')
var request = require('request')

var app = express()
var port = process.env.PORT

// your manifest must have appropriate CORS headers, you could also use '*'
app.use(cors({ origin: '*' }))

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("*", function (request, response) {
  response.sendFile(__dirname + '/views/index.html')
}) 

// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
})
