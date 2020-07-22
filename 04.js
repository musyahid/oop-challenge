var nedb = require('nedb')
var mysql = require('mysql')

class Config {
    ConfigFileStorage(config) {

    }

    ConfigNedb(config) {
        db = new nedb({filename: config, autoload: true})
    }

    ConfigMysql(connection) {
        var db = mysql.createConnection({
            host: "localhost",
            user: connection.username,
            password: connection.password
        });
        
        db.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
        });
    }
}

// const config = new Config(new ConfigFileStorage('config.json'))  
const configDb = new Config(new ConfigNedb('config.db'))  
const connection = {username: 'root', password: '', db: 'config'}
const configMysql = new Config(new ConfigMysql(connection))