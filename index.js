var mysql = require('mysql');
require('dotenv').config();

var connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  port: process.env.port,
  password: process.env.password,
  database: process.env.database
});

connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT username FROM credential WHERE id = 3", function (err, result, fields) {
    if (err) throw err;
    console.log(JSON.stringify(result));
    // console.log(fields);
  });
});

setTimeout(() => {
  console.log("waitover");
  process.exit()
}, 2000);