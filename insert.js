var mysql = require('mysql')

var connection = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'articles'
});
connection.connect();