const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "g8r9w9tmspbwmsyo.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "b92uwgc67g9j8108",
    password: "g22mu55ky2jo2eav",
    database: "l560ae1pk22an562"
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;