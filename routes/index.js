var express = require('express')
var router = express.Router()
var MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://127.0.0.1:27017/test', function (err, db) {
    if (err) {
      throw err;
    } else {
      console.log('mongo连接成功')
      db.collection('person').find().toArray(function(err, result) {
        console.log(result)
        router.get('/', function(req, res, next) {
          res.render('index', { title: result });
        })
      })
    }
});

module.exports = router;
