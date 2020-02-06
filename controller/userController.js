const fs = require('fs');
const path = require('path');
const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;



class userController {

  async getUser(req, res, next) {
    User.find(function (err, user) {
      if (err) return res.status(500).send(err);
      res.status(200).json(user);
    })  
  }

  async getUserById(req, res, next) {
    User.findById(req.params.id,function (err, user) {
      if (err) return res.status(500).send(err);
      res.status(200).json(user);
    })
  }

  async addUser(req, res, next) {
    let file = req.file;
    let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
    
    let tmpPath = `uploads/tmp/${file.filename}`;
    
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    bcrypt.hash(password, saltRounds, function(err, hash){
      const user = new User({
        name: name,
        email: email,
        password: hash
      });
      user.save(function (err, newuser) {
        if (err) {
          fs.unlink(req.file.path, async(err) => {
            console.log(req.file.path);
          });
          return res.status(500).send(err);
        }else{
          let id = newuser._id;
          let fullPath = `uploads/user/${id}${ext}`;
          User.findOneAndUpdate(id, {imageUrl:id});
          fs.rename(tmpPath,fullPath, async (err) => {
            if (err){
              throw err
            }
          })
          res.status(200).json({message: 'Saved Successfully'});
        }
      });
    })
  }

  async updateUser(req, res, next) {
    let file = req.file;
    let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
    
    let tmpPath = `uploads/tmp/${file.filename}`;
    
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    bcrypt.hash(password, saltRounds, function(err, hash){
      const user = new User({
        name: name,
        email: email,
        password: hash
      });
      user.save(function (err, newuser) {
        if (err) {
          fs.unlink(req.file.path, async(err) => {
            console.log(req.file.path);
          });
          return res.status(500).send(err);
        }else{
          let id = newuser._id;
          let fullPath = `uploads/user/${id}${ext}`;
          User.findOneAndUpdate(id, {imageUrl:id});
          fs.rename(tmpPath,fullPath, async (err) => {
            if (err){
              throw err
            }
          })
          res.status(200).json({message: 'Saved Successfully'});
        }
      });
    })
  }

  async activateUser(req, res, next) {
    User.findOneAndUpdate({_id: req.params.id},{status: 'active'},function (err, User) {
      if (err) return res.status(500).send(err);
      res.status(200).json({message: 'Activated Successfully'});
    });
  }

  async deactivateUser(req, res, next) {
    User.findOneAndUpdate({_id: req.params.id},{status: 'inactive'},function (err, User) {
      if (err) return res.status(500).send(err);
      res.status(200).json({message: 'Deactivated Successfully'});
    });
  }
}
module.exports = userController