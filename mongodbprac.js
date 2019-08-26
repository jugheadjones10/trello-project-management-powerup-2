
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://jugheadjones:jugheadjones10@fuck-xdurj.gcp.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     console.log("fuck")
//     // perform actions on the collection object
//     client.close();
// });

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://jugheadjones:jugheadjones@fuck-xdurj.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const myCollection = client.db("test").collection("help");
    myCollection.insertOne({ a: 1 }, function (err, r) {
        

        client.close();
       
    })
});