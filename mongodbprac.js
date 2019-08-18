const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://jugheadjones:jugheadjones10@cluster0-bwizb.gcp.mongodb.net/test?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true })
client.connect(err => {
    const db = client.db("test")

    db.collection('inventory').insertOne({
        item: "canvas",
        qty: 100,
        tags: ["cotton"],
        size: { h: 28, w: 35.5, uom: "cm" }
    })

    console.log("connected mthfker")
    client.close()
})
