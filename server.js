var express = require('express')
var cors = require('cors')
var request = require('request')
//////////////////////////////////////
const fs = require('fs')
const readline = require('readline')
const {google} = require('googleapis')
// Dependencies required for google map api

var app = express()
var port = process.env.PORT


const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://jugheadjones:jugheadjones@trello-power-up-oo71y.mongodb.net/test?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const db
client.connect(function (err) {
  db = client.db("official")
  var listener = app.listen(port, function () {
    console.log('Your app is listening on port ' + port)
  })
})


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

app.post("/items/:itemname", function(req, res){
  db.collection("playground").insertOne({item: req.params.itemname}) 
  res.send(`received post message of ${req.params.itemname}`)
  res.send("AWD")
})

