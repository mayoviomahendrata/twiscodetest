require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const app = express();

// parse requests of content-type - application/json
app.use(express.json());
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

function generateAccessToken(user) {
  return jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1200s' })
}

exports.signIn = (req, res) => {
  //checking username 
  const usernameenv = process.env.USERNAMEAPPS
  // console.log(typeof usernameenv)
  if(usernameenv != req.body.username) {
      return res.status(404).send({
          auth: false,
          username: req.body.username,
          accessToken: null,
          message: 'error',
          errors: 'Wrong Username or Password',
      });
  }

  //checking password 
  const passwordenv = process.env.PASSWORDAPPS
  var password = bcrypt.hashSync(passwordenv, 8);
  var checkPassValid = bcrypt.compareSync(req.body.password, password);
  if(!checkPassValid){
      return res.status(404).send({
          auth: false,
          username: req.body.username,
          accessToken: null,
          message: 'error',
          errors: 'Wrong Password or Password',
      });
  }

  const token = generateAccessToken(req.body.username)

  const metadata = {
      message: 'OK',
      code: '200'
  }

  const response = {
      token: 'Bearer ' + token,
  }

  //send response 200 if login successfully
  res.send({
      response,
      metadata
  });
}