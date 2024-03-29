// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var $$String = require("bs-platform/lib/js/string.js");

function isYell(s) {
  if ($$String.uppercase(s) === s) {
    var q = s;
    return (/[a-z]|[A-Z]/).test(q);
  } else {
    return false;
  }
}

function isYellQuestion(s) {
  if (isYell(s)) {
    return s.trim().endsWith("?");
  } else {
    return false;
  }
}

function isAsk(s) {
  if (s.endsWith("?")) {
    var q = s;
    return (/\w/).test(q);
  } else {
    return false;
  }
}

function hey(s) {
  var q = s.trim();
  if (q.trim() === "") {
    return "Fine. Be that way!";
  } else if (isYellQuestion(q)) {
    return "Calm down, I know what I'm doing!";
  } else if (isYell(q)) {
    return "Whoa, chill out!";
  } else if (isAsk(q)) {
    return "Sure.";
  } else {
    return "Whatever.";
  }
}

exports.hey = hey;
/* No side effect */
