const mongoose = require('mongoose');
const config = require('./config').db;
// const host = config.host
// const database = config.database


class Database {
  constructor() {
    this._connect();
  }
  
_connect() {
     mongoose.connect(`${config.host}/${config.database}`, {
        useUnifiedTopology : true
     })
       .then(() => {
          console.log('Database connection successful');
       })
       .catch(err => {
         console.error('Database connection error');
       })
  }
}

module.exports = new Database()