const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://root2:t7WY8F4rShTa@ds161121.mlab.com:61121/ninja');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

app.use('/', require('./routes/api'));

app.use(function(err, req, res, next){
  console.log(err);
  res.status(422).send({error: err.message});
});

app.listen(process.env.port || 3000, function(){
  console.log('Server: http://localhost:3000/');
});
