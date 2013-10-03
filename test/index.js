var test = require('tape');
var regular = require('../');

test('validates email', function (t) {
  t.ok(regular.email.test('asdf@asdf.com'));
  t.notOk(regular.email.test('asdf@asdf'));
  
  t.end();
});

test('validates url', function (t) {
  t.ok(regular.url.test('http://npm.org'));
  t.ok(regular.url.test('www.npm.prg'));
  t.ok(regular.url.test('http://www.npm.io'));
  t.notOk(regular.url.test('npm.org'));
  
  t.end();
});

test('validates ip address', function (t) {
  t.ok(regular.ipAddress.test('192.168.0.1'));
  t.notOk(regular.ipAddress.test('256.168.0.1'));
  
  t.end();
});

test('validates all major credit cards', function (t) {
  t.ok(regular.creditCard.test('4444444444444448')); // Visa
  t.ok(regular.creditCard.test('371449635398431')); // Amex
  t.ok(regular.creditCard.test('6011000000000004')); // Discover
  t.ok(regular.creditCard.test('5500005555555559')); // Mastercard
  
  t.end();
});

test('validates alpha-numerics', function (t) {
  t.ok(regular.alphaNumeric.test('asdf1234'));
  t.notOk(regular.alphaNumeric.test('asdf 1234'));
  t.notOk(regular.alphaNumeric.test('asdf 1234'));
  t.notOk(regular.alphaNumeric.test('asdf!'));
  
  t.end();
});

test('validates US social security number', function (t) {
  t.ok(regular.ssn.test('555-55-5555'));
  t.ok(regular.ssn.test('555555555'));
  
  t.end();
});
