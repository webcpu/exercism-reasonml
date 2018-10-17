// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");

function digitToInt(c) {
  return Caml_format.caml_int_of_string(String(c));
}

function digits(n) {
  return $$Array.map(digitToInt, String(n).split(""));
}

function validate(n) {
  var len = digits(n).length;
  return digits(n).reduce((function (b, a) {
                return b + Math.pow(a, len) | 0;
              }), 0) === n;
}

exports.validate = validate;
/* No side effect */