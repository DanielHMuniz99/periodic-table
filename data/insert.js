var data = require('./elements');

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(error, db) {
    if (error) 
        throw error;
    
    var dbo = db.db("periodic_table");

    dbo.collection("elements").insertOne(data, function(error, res) {

        if (error) 
            throw error;

        db.close();

    });
});