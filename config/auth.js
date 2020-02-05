require('dotenv').config();
const config = require('./config').auth; 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Auth = {
	validateToken: function(req, res, next){

		let token = req.headers['authorization']; //remove string instead of split
		let clientid = req.headers['x-client-id'];
		let clientsecret = req.headers['x-client-secret'];

		if (!token){
			return res.status(401).send({ auth: false, message: 'No token provided.' })
		};

		jwt.verify(token.substr(7), config.secret, function(err, decoded) {
			if (err){
				return res.status(500).send({ 
					auth: false, 
					message: 'Failed to authenticate token.',
					error: err
				});
			}else{
				next();
			}
		});
	},

	validateUser: function(req, res, next){

		let token = req.headers['authorization']; //remove string instead of split
		let secret = req.headers['x-client-secret'];

		if (!token){
			return { auth: false, message: 'No token provided.' };
		};

		return jwt.verify(token.substr(7), secret, function(err, decoded){
			if (err){
				return { 
					auth: false, 
					message: 'Failed to authenticate token.',
					err: err
				};
			}else{
				return { auth:true };
			}
		});
	},


	validateApp: function(req, res, next){

		let clients = config.clients.split(',');

		let clientid = req.headers['x-client-id'];
		let clientsecret = req.headers['x-client-secret'];

		if (!clientid){
			return res.status(500).send({ 
				auth: false, 
				message: 'Client ID is missing.' 
			});
		};

		if (!clientsecret){
			return res.status(500).send({ 
				auth: false, 
				message: 'Client Secret is missing.' 
			});
		};

		if(clients.indexOf(clientid) == -1){
			return res.status(500).send({ 
				auth: false, 
				message: 'Client ID is invalid.' 
			});
		}

		if(config.secret !== clientsecret){
			return res.status(500).send({ 
				auth: false, 
				message: 'Client Secret is invalid.' 
			});
		}

		next();
	}
}

module.exports = Auth;