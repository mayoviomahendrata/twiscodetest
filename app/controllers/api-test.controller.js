const apiTest = require("../models/api-test.model.js");
const moment = require('moment'); // require
const http = require('http');

exports.getBinaryToDecimal = (req, res) => {
  // Validate Request
if (!req.body) {
    res.status(400).send({
    message: "Body can not be empty!"
    });
} else {
    const testBinary = req.body.binary;
    if (testBinary) {
      apiTest.convertBinaryToDecimal(testBinary, (err, data) => {
          if (err) {
            res.status(500).send({
              message: "Error retrieving Data" + req.body.binary
            });
          } else res.send({
            response: data,
            metadata: {
              message: 'OK',
              code: '200'
            }
          });
        });
    } else {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
  }
};

exports.getDecimalToBinary = (req, res) => {
  // Validate Request
if (!req.body) {
    res.status(400).send({
    message: "Body can not be empty!"
    });
} else {
    const testDecimal = req.body.decimal;
    if (testDecimal) {
      apiTest.convertDecimalToBinary(testDecimal, (err, data) => {
          if (err) {
            res.status(500).send({
              message: "Error retrieving Data" + req.body.decimal
            });
          } else res.send({
            response: data,
            metadata: {
              message: 'OK',
              code: '200'
            }
          });
        });
    } else {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
  }
};

exports.getPalindrome = (req, res) => {
  // Validate Request
if (!req.body) {
    res.status(400).send({
    message: "Body can not be empty!"
    });
} else {
    const checkPalindrome = req.body.palindrome;
    if (checkPalindrome) {
      apiTest.checkPalindromeCase(checkPalindrome, (err, data) => {
          if (err) {
            res.status(500).send({
              message: "Error retrieving Data" + req.body.palindrome
            });
          } else res.send({
            response: data,
            metadata: {
              message: 'OK',
              code: '200'
            }
          });
        });
    } else {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
  }
};

exports.createTransaksi = (req, res) => {
  // Validate Request
if (!req.body) {
    res.status(400).send({
    message: "Body can not be empty!"
    });
} else {
    const id = req.body.id;
    const tgl_order = req.body.tgl_order;
    const status = req.body.status;
    const tgl_bayar = req.body.tgl_pembayaran;
    if (id && tgl_order && status && tgl_bayar) {
      apiTest.createTableTransaksi(id, tgl_order, status, tgl_bayar, (err, data) => {
          if (err) {
            res.status(500).send({
              message: "Error retrieving Data" + req.body
            });
          } else res.send({
            response: data,
            metadata: {
              message: 'OK',
              code: '200'
            }
          });
        });
    } else {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
  }
};

exports.dataTransaksi = (req, res) => {
  // Validate Request
if (!req.body) {
    res.status(400).send({
    message: "Body can not be empty!"
    });
} else {
    const id = req.body.id;
    const tgl_order = req.body.tgl_order;
    const status = req.body.status;
    const tgl_bayar = req.body.tgl_pembayaran;
    if (id && tgl_order && status && tgl_bayar) {
      apiTest.insertDataTransaksi(id, tgl_order, status, tgl_bayar, (err, data) => {
          if (err) {
            res.status(500).send({
              message: "Error retrieving Data" + req.body
            });
          } else res.send({
            response: data,
            metadata: {
              message: 'OK',
              code: '200'
            }
          });
        });
    } else {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
  }
};