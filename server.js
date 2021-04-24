require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const app = express();
// const users = []

// var PATH_TO_JAVA_BRIDGE = path.join(__dirname, '..', 'JavaSybaseLink', 'dist', 'JavaSybaseLink.jar');
// console.log(__dirname)

// parse requests of content-type - application/json
app.use(express.json());
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// require("./app/routes/customer.routes.js")(app);
require("./app/routes/api-test.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
