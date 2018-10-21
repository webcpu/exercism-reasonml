// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var $$String = require("bs-platform/lib/js/string.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");

function phoneNumber(_xs) {
  while(true) {
    var xs = _xs;
    var partial_arg = (/[^0-9]/g);
    var normalize = (function(partial_arg){
    return function normalize(param) {
      return param.replace(partial_arg, "");
    }
    }(partial_arg));
    var hasCountryCode = function (xs) {
      if ($$String.sub(xs, 0, 1) === "1") {
        return xs.length === 11;
      } else {
        return false;
      }
    };
    var isValidLength = function (xs) {
      return xs.length === 10;
    };
    var isStandardNumber = function (xs) {
      var firstDigit = Caml_format.caml_int_of_string($$String.sub(xs, 0, 1));
      var fourthDigit = Caml_format.caml_int_of_string($$String.sub(xs, 3, 1));
      var isNDigit = function (d) {
        if (d <= 9) {
          return d > 1;
        } else {
          return false;
        }
      };
      if (isNDigit(firstDigit)) {
        return isNDigit(fourthDigit);
      } else {
        return false;
      }
    };
    var num = Curry._1(normalize, xs);
    console.log(num);
    if (hasCountryCode(num)) {
      _xs = $$String.sub(num, 1, 10);
      continue ;
    } else if (isValidLength(num) && isStandardNumber(num)) {
      return num;
    } else {
      return undefined;
    }
  };
}

exports.phoneNumber = phoneNumber;
/* No side effect */
