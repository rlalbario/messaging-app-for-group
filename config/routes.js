const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs')
const moment = require('moment');

const auth = require('./auth');
const UserController = require('../controller/userController');
const userController = new UserController();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = './uploads/tmp';

    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir)
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    let {_startTime} = req
    let filename = moment(_startTime).format('YYYYMMDDHHmmss');
    cb(null, filename);
  }
})

const upload = multer({storage: storage});

class ApiController {
  constructor (options = {}) {
    this.router = express.Router(options);
    this.routes();
  }

  routes () {
    this.router.get('/getUser', userController.getUser);
    this.router.get('/user/:id', auth.validateApp, userController.getUserById);
  	this.router.post('/registrationpage', auth.validateApp, upload.single('imageUrl'), userController.addUser);
  	this.router.put('/user/update/:id', auth.validateApp, upload.single('imageUrl'), userController.updateUser);
  	this.router.patch('/user/activate/:id', auth.validateApp, userController.activateUser);
    this.router.patch('/user/deactivate/:id', auth.validateApp, userController.deactivateUser);
  }
}

module.exports = ApiController