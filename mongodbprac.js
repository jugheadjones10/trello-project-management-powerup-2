
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://jugheadjones:jugheadjones10@fuck-xdurj.gcp.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     console.log("fuck")
//     // perform actions on the collection object
//     client.close();
// });


const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://jugheadjones:jugheadjones10@fuck-xdurj.gcp.mongodb.net/test?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true })
client.connect(err => {
    const db = client.db("testme")
    db.collection("devices").insertOne({ awd: 6060 }).then(function(e){
        console.log("hey babe")
    })
    console.log("ucsas")
    // perform actions on the collection object
    client.close()
});
