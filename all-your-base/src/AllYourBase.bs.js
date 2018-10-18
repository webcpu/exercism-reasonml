// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");

function rebase(base1, xs, base2) {
  var isAllZero = function (ys) {
    var x = List.length(List.filter((function (x) {
                  return x === 0;
                }))(ys));
    return x === List.length(ys);
  };
  var hasNegativeDigits = function (ys) {
    return List.length(List.filter((function (x) {
                        return x < 0;
                      }))(ys)) > 0;
  };
  var hasInvalidPositiveDigits = function (ys) {
    return List.length(List.filter((function (x) {
                        return x >= base1;
                      }))(ys)) > 0;
  };
  if (xs === /* [] */0 || isAllZero(xs) || hasNegativeDigits(xs) || hasInvalidPositiveDigits(xs) || base2 <= 0) {
    return /* None */0;
  } else {
    var base1$1 = base1;
    var xs$1 = xs;
    var base2$1 = base2;
    var digits = function (b, n) {
      if (n !== 0) {
        return List.append(digits(b, Caml_int32.div(n, b)), /* :: */[
                    Caml_int32.mod_(n, b),
                    /* [] */0
                  ]);
      } else {
        return /* [] */0;
      }
    };
    return /* Some */[digits(base2$1, $$Array.of_list(xs$1).reduce((function (b, a) {
                        return Caml_int32.imul(b, base1$1) + a | 0;
                      }), 0))];
  }
}

exports.rebase = rebase;
/* No side effect */
