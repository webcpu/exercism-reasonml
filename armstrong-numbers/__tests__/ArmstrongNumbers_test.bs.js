// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var ArmstrongNumbers$ArmstrongNumbers = require("../src/ArmstrongNumbers.bs.js");

describe("Armstrong Numbers", (function () {
        Jest.test("Single digit numbers are Armstrong numbers", (function () {
                return Jest.Expect[/* toBe */2](true, Jest.Expect[/* expect */0](ArmstrongNumbers$ArmstrongNumbers.validate(5)));
              }));
        Jest.test("There are no 2 digit Armstrong numbers", (function () {
                return Jest.Expect[/* toBe */2](false, Jest.Expect[/* expect */0](ArmstrongNumbers$ArmstrongNumbers.validate(10)));
              }));
        Jest.test("Three digit number that is an Armstrong number", (function () {
                return Jest.Expect[/* toBe */2](true, Jest.Expect[/* expect */0](ArmstrongNumbers$ArmstrongNumbers.validate(153)));
              }));
        Jest.test("Three digit number that is not an Armstrong number", (function () {
                return Jest.Expect[/* toBe */2](false, Jest.Expect[/* expect */0](ArmstrongNumbers$ArmstrongNumbers.validate(100)));
              }));
        Jest.test("Four digit number that is an Armstrong number", (function () {
                return Jest.Expect[/* toBe */2](true, Jest.Expect[/* expect */0](ArmstrongNumbers$ArmstrongNumbers.validate(9474)));
              }));
        Jest.test("Four digit number that is not an Armstrong number", (function () {
                return Jest.Expect[/* toBe */2](false, Jest.Expect[/* expect */0](ArmstrongNumbers$ArmstrongNumbers.validate(9475)));
              }));
        Jest.test("Seven digit number that is an Armstrong number", (function () {
                return Jest.Expect[/* toBe */2](true, Jest.Expect[/* expect */0](ArmstrongNumbers$ArmstrongNumbers.validate(9926315)));
              }));
        return Jest.test("Seven digit number that is not an Armstrong number", (function () {
                      return Jest.Expect[/* toBe */2](false, Jest.Expect[/* expect */0](ArmstrongNumbers$ArmstrongNumbers.validate(9926314)));
                    }));
      }));

/*  Not a pure module */
