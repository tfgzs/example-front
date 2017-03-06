var env = process.env.NODE_ENV || 'development';
var Config = {
	"development": {
		"compressedCode": false,
		"appName": process.env.App_Name || "demo",
		"serverUri": "http://127.0.0.1",
		"serverPort": 80,
		"version": process.env.App_Version || "1.0.0"
	},
	"test": {
		"compressedCode": false,
		"appName": process.env.App_Name || "demo",
		"serverUri": "http://h5-test.tfgzs.net",
		"serverPort": 80,
		"version": process.env.App_Version || "1.0.0"
	},
	"production": {
		"compressedCode": true,
		"appName": process.env.App_Name || "demo",
		"serverPort": 80,
		"serverUri": "https://h5.tfgzs.net",
		"version": process.env.App_Version || "1.0.0"
	}
}

module.exports = {
	"env": env,
	"config": Config[env]
}