var express = require('express')
var cors = require('cors')
var request = require('request')
//////////////////////////////////////
const fs = require('fs')
const readline = require('readline')
const {google} = require('googleapis')
// Dependencies required for google map api

/////////Database code//////////////////
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://jugheadjones:jugheadjones10@cluster0-bwizb.gcp.mongodb.net/test?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true })
//////////////////////////

var app = express()
var port = process.env.PORT
// var port = 3000

client.connect(err => {
  const db = client.db("test")

  db.collection('testing-collection').insertOne({
    item: "canvas",
    qty: 100,
    tags: ["cotton"],
    size: { h: 28, w: 35.5, uom: "cm" }
  })

  console.log("connected mthfker")
  client.close()
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
  db.testing-collection.insertOne({item: req.itemname})
  res.send("AWD")
})

// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
})
