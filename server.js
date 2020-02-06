require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');
const routes = require('./config/routes');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const logger = require('morgan');
const multer = require('multer')
const upload = multer()
let environment = process.env.NODE_ENV


app.use(cors());

// app.set('view engine', 'ejs')
// app.set('json spaces', 2)
// app.set('case sensitive routing', false)
// app.set('strict routing', true)
// app.set('x-powered-by', false)
// app.disable('etag')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/api', new routes().router)

if (environment !== 'production') {
  app.use(logger('dev'));
}

var server = app.listen(3001, function () {
   var port = server.address().port;
   console.log("Server is running in port:", port);
});

module.exports = app