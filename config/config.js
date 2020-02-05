const Config = {
	auth:{
		clients: process.env.CLIENT_IDS,
		secret: process.env.CLIENT_SECRET
	},
	server: {
		port: process.env.PORT,
		appname: process.env.APP_NAME
	},
	db: {
		driver: process.env.DB_DRIVER,
		host: process.env.DB_HOST,
		database: process.env.DB_DATABASE
	}
}

module.exports = Config;