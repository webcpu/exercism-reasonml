// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var BinarySearch$BinarySearch = require("../src/BinarySearch.bs.js");

describe("Binary search", (function () {
        Jest.test("finds a value in an array with one element", (function () {
                return Jest.Expect[/* toEqual */12](/* Some */[0], Jest.Expect[/* expect */0](BinarySearch$BinarySearch.find(/* array */[6], 6)));
              }));
        Jest.test("finds a value in the middle of an array", (function () {
                return Jest.Expect[/* toEqual */12](/* Some */[3], Jest.Expect[/* expect */0](BinarySearch$BinarySearch.find(/* array */[
                                    1,
                                    3,
                                    4,
                                    6,
                                    8,
                                    9,
                                    11
                                  ], 6)));
              }));
        Jest.test("finds a value at the beginning of an array", (function () {
                return Jest.Expect[/* toEqual */12](/* Some */[0], Jest.Expect[/* expect */0](BinarySearch$BinarySearch.find(/* array */[
                                    1,
                                    3,
                                    4,
                                    6,
                                    8,
                                    9,
                                    11
                                  ], 1)));
              }));
        Jest.test("finds a value at the end of an array", (function () {
                return Jest.Expect[/* toEqual */12](/* Some */[6], Jest.Expect[/* expect */0](BinarySearch$BinarySearch.find(/* array */[
                                    1,
                                    3,
                                    4,
                                    6,
                                    8,
                                    9,
                                    11
                                  ], 11)));
              }));
        Jest.test("finds a value in an array of odd length", (function () {
                return Jest.Expect[/* toEqual */12](/* Some */[9], Jest.Expect[/* expect */0](BinarySearch$BinarySearch.find(/* array */[
                                    1,
                                    3,
                                    5,
                                    8,
                                    13,
                                    21,
                                    34,
                                    55,
                                    89,
                                    144,
                                    233,
                                    377,
                                    634
                                  ], 144)));
              }));
        Jest.test("finds a value in an array of even length", (function () {
                return Jest.Expect[/* toEqual */12](/* Some */[5], Jest.Expect[/* expect */0](BinarySearch$BinarySearch.find(/* array */[
                                    1,
                                    3,
                                    5,
                                    8,
                                    13,
                                    21,
                                    34,
                                    55,
                                    89,
                                    144,
                                    233,
                                    377
                                  ], 21)));
              }));
        Jest.test("identifies that a value is not included in the array", (function () {
                return Jest.Expect[/* toEqual */12](/* None */0, Jest.Expect[/* expect */0](BinarySearch$BinarySearch.find(/* array */[
                                    1,
                                    3,
                                    4,
                                    6,
                                    8,
                                    9,
                                    11
                                  ], 7)));
              }));
        Jest.test("a value smaller than the array's smallest value is not included", (function () {
                return Jest.Expect[/* toEqual */12](/* None */0, Jest.Expect[/* expect */0](BinarySearch$BinarySearch.find(/* array */[
                                    1,
                                    3,
                                    4,
                                    6,
                                    8,
                                    9,
                                    11
                                  ], 0)));
              }));
        Jest.test("a value larger than the array's largest value is not included", (function () {
                return Jest.Expect[/* toEqual */12](/* None */0, Jest.Expect[/* expect */0](BinarySearch$BinarySearch.find(/* array */[
                                    1,
                                    3,
                                    4,
                                    6,
                                    8,
                                    9,
                                    11
                                  ], 13)));
              }));
        return Jest.test("nothing is included in an empty array", (function () {
                      return Jest.Expect[/* toEqual */12](/* None */0, Jest.Expect[/* expect */0](BinarySearch$BinarySearch.find(/* array */[], 1)));
                    }));
      }));

/*  Not a pure module */
