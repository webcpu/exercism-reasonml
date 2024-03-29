// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");

function makeChange(n, cs) {
  var xs = $$Array.of_list(cs);
  var exchange = function (_n, _rs) {
    while(true) {
      var rs = _rs;
      var n = _n;
      var coinValue = function (rs) {
        return Caml_array.caml_array_get(xs, (xs.length - rs.length | 0) - 1 | 0);
      };
      console.log("" + (String(n) + (", " + (String(rs) + ""))));
      if (n !== 0) {
        _rs = $$Array.append(/* array */[Caml_int32.div(n, coinValue(rs))], rs);
        _n = Caml_int32.mod_(n, coinValue(rs));
        continue ;
      } else {
        var match = rs.length < xs.length;
        if (match) {
          _rs = $$Array.append(/* array */[0], rs);
          continue ;
        } else {
          return rs;
        }
      }
    };
  };
  var x = exchange(n, /* array */[]);
  return /* Some */[List.filter((function (x) {
                    return x !== 0;
                  }))(List.mapi((function (i, x) {
                      return Caml_int32.imul(x, List.nth(cs, i));
                    }), $$Array.to_list((console.log(x), x))))];
}

exports.makeChange = makeChange;
/* No side effect */
