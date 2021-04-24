// const mysql = require("mysql");
// const dbConfig = require("../config/db.config.js");

// var con = mysql.createPool({
//   host: dbConfig.HOST,
//   user: dbConfig.USER,
//   password: dbConfig.PASSWORD,
//   database: dbConfig.DB
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// var path = require('path');
// var Sybase = require('sybase');

// var PATH_TO_JAVA_BRIDGE = path.join(__dirname, '..', '..', 'node_modules', 'sybase', 'JavaSybaseLink', 'dist', 'JavaSybaseLink.jar');
// var db = new Sybase(
//   dbConfig.HOST,
//   dbConfig.PORT,
//   dbConfig.DB,
//   dbConfig.USER,
//   dbConfig.PASSWORD,
//   dbConfig.LOG_TIMING,
//   PATH_TO_JAVA_BRIDGE
//   );
    
//   db.connect(function (err) {
//   if (err) {
//     db.disconnect();
//     return console.log(err);
//   }

//   console.log('db connected')
  
  // db.query('select * from RDX_JAKOPS', function (err, data) {
  //   if (err) console.log(err);
    
  //   console.log(data);
 
  //   db.disconnect();
 
  // });
// });

// module.exports = db;