var env = process.env.NODE_ENV || 'development';
var Config =
    {
        "development": {
        	"compressedCode":false,
            "appName": process.env.App_Name || "demo",
            "h5Server": "http://127.0.0.1",
            "version": process.env.Version || "1.0.0"
        },
        "test": {
        	"compressedCode":false,
            "appName": process.env.App_Name || "demo",
            "h5Server": "http://h5-test.tfgzs.net",
            "version": process.env.Version || "1.0.0"
        },
        "production": {
        	"compressedCode":true,
            "appName": process.env.App_Name || "demo",
            "h5Server": "https://h5.tfgzs.net",
            "version": process.env.Version || "1.0.0"
        }
    }

module.exports = Config[env];
