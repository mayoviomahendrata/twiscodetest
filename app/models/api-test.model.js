const sql = require("./db.js");

const apiTest = function(entity) {
    this.testBinary = entity.testBinary;
    this.testDecimal = entity.testDecimal;
    this.checkPalindrome = entity.checkPalindrome;
  }

apiTest.convertBinaryToDecimal = (testBinary, result) => {
  let dec = 0;
    for (let i = 0; i < testBinary.length; i++) {
        if (testBinary[testBinary.length - (i + 1)] === '1') {
            dec += 2 ** i;
        }
    }
    result(null, dec)
    return;
}

apiTest.convertDecimalToBinary = (testDecimal, result) => {
  var x = testDecimal
  let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }

  result(null, bin)
  return;
}

apiTest.checkPalindromeCase = (str, result) => {
  // var re = /[\W_]/g;
  // var lowRegStr = checkPalindrome.toLowerCase().replace(re, '');
  // var reverseStr = lowRegStr.split('').reverse().join(''); 
  // var hasil = reverseStr === lowRegStr;
  // result (null, hasil)
  // // return reverseStr === lowRegStr;
  // return;

  var re = /[\W_]/g;
  var arrStr = str.split(' ');
  var samples = [];
  for(var i = 0; i<arrStr.length; i++) {
    var temp = [];
      if (i<arrStr.length-1) {
        temp.push(arrStr[i]+' '+arrStr[i+1])
        samples.push(temp);
      }   
  }
  var hasil = [];
  samples.forEach(s => {
    var lowRegStr = s[0].toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    if (reverseStr === lowRegStr) {
      hasil.push(s[0]);
    }
  });
  result (null, hasil)
  return;
  
}

apiTest.createTableTransaksi = (id, tgl_order, status, tgl_bayar, result) => {

  result (null, hasil)
  return;
}

apiTest.insertDataTransaksi = (id, tgl_order, status, tgl_bayar, result) => {

  result (null, hasil)
  return;
}

module.exports = apiTest;