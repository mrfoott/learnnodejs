var mongodb = require("mongodb");
var server = new mongodb.Server('localhost', 27017);
var mongoClient = new mongodb.mongoClient(server);

mongoClient.open(function(err, client) {
    var db = client.db('ooo')
})