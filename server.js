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


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://jugheadjones:jugheadjones@trello-power-up-oo71y.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(function (err) {
  const db = client.db("test");

  db.collection('inventory').insertMany([
    // MongoDB adds the _id field with an ObjectId if _id is not present
    {
      item: "journal", qty: 25, status: "A",
      size: { h: 14, w: 21, uom: "cm" }, tags: ["blank", "red"]
    },
    {
      item: "notebook", qty: 50, status: "A",
      size: { h: 8.5, w: 11, uom: "in" }, tags: ["red", "blank"]
    },
    {
      item: "paper", qty: 100, status: "D",
      size: { h: 8.5, w: 11, uom: "in" }, tags: ["red", "blank", "plain"]
    },
    {
      item: "planner", qty: 75, status: "D",
      size: { h: 22.85, w: 30, uom: "cm" }, tags: ["blank", "red"]
    },
    {
      item: "postcard", qty: 45, status: "A",
      size: { h: 10, w: 15.25, uom: "cm" }, tags: ["blue"]
    }
  ])
    .then(function (result) {
      console.log(result)
    })

  client.close();
});


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
  client.db("test").devices.insertOne({item: req.params.itemname}) 
  console.log(`received post message of ${req.params.itemname}`)
  res.send("AWD")
})

// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
})
