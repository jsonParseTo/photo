var express = require('express')
var bodyParser = require('body-parser')
var favicon = require('serve-favicon')

var index = require('./routes/index')
var users = require('./routes/users')
var register = require('./routes/register')


var app = express()

var debug = require('debug')('my-application')

var swig = require('swig')
app.set('view engine', 'html');
app.set('views', __dirname + '/views')
app.engine('html', swig.renderFile)
app.use(favicon(__dirname + '/public/dist/image/favicon.ico'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'))

app.use('/', index)
app.use('/users', users)
app.use('/register', register)
app.get('/details/:id', function(req, res, next) {
  res.render('details');
});

var MongoClient = require('mongodb').MongoClient
app.post('/doRegister', (req, res, next) => {
  console.log(req.body.name, req.body.age)
  MongoClient.connect('mongodb://127.0.0.1:27017/test', function (err, db) {
      if (err) {
        throw err
      } else {
        db.collection('person').insert({name: req.body.name, age: req.body.age}, (err, result) => {
          res.send({code: 200})
        })
      }
  });
})
app.use((req, res, next) => {
  res.status(404).render('error')
})

module.exports = app;


