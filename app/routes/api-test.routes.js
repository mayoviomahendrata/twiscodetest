module.exports = app => {
    const AUTH = require("../controllers/authserver.controller.js");
    const authenticateToken = require("../service/auth.middleware.js");
    const apiTest = require("../controllers/api-test.controller.js");

    app.post("/api-test/bin-to-dec", apiTest.getBinaryToDecimal);
    app.post("/api-test/dec-to-bin", apiTest.getDecimalToBinary);
    app.post("/api-test/palindrome", apiTest.getPalindrome);
    app.post("/api-test/create-transaksi", apiTest.createTransaksi);
    app.post("/api-test/data-transaksi", apiTest.dataTransaksi);
  };
  