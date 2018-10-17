// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Raindrops$Raindrops = require("../src/Raindrops.bs.js");

describe("Raindrops", (function () {
        Jest.test("the sound for 1 is 1", (function () {
                return Jest.Expect[/* toEqual */12]("1", Jest.Expect[/* expect */0](Raindrops$Raindrops.raindrops(1)));
              }));
        Jest.test("the sound for 3 is Pling", (function () {
                return Jest.Expect[/* toEqual */12]("Pling", Jest.Expect[/* expect */0](Raindrops$Raindrops.raindrops(3)));
              }));
        Jest.test("the sound for 5 is Plang", (function () {
                return Jest.Expect[/* toEqual */12]("Plang", Jest.Expect[/* expect */0](Raindrops$Raindrops.raindrops(5)));
              }));
        Jest.test("the sound for 7 is Plong", (function () {
                return Jest.Expect[/* toEqual */12]("Plong", Jest.Expect[/* expect */0](Raindrops$Raindrops.raindrops(7)));
              }));
        Jest.test("the sound for 6 is Pling as it has a factor 3", (function () {
                return Jest.Expect[/* toEqual */12]("Pling", Jest.Expect[/* expect */0](Raindrops$Raindrops.raindrops(6)));
              }));
        Jest.test("2 to the power 3 does not make a raindrop sound as 3 is the exponent not the base", (function () {
                return Jest.Expect[/* toEqual */12]("8", Jest.Expect[/* expect */0](Raindrops$Raindrops.raindrops(8)));
              }));
        Jest.test("the sound for 9 is Pling as it has a factor 3", (function () {
                return Jest.Expect[/* toEqual */12]("Pling", Jest.Expect[/* expect */0](Raindrops$Raindrops.raindrops(9)));
              }));
        Jest.test("the sound for 10 is Plang as it has a factor 5", (function () {
                return Jest.Expect[/* toEqual */12]("Plang", Jest.Expect[/* expect */0](Raindrops$Raindrops.raindrops(10)));
              }));
        Jest.test("the sound for 14 is Plong as it has a factor 7", (function () {
                return Jest.Expect[/* toEqual */12]("Plong", Jest.Expect[/* expect */0](Raindrops$Raindrops.raindrops(14)));
              }));
        Jest.test("the sound for 15 is PlingPlang as it has a factor 3 and 5", (function () {
                return Jest.Expect[/* toEqual */12]("PlingPlang", Jest.Expect[/* expect */0](Raindrops$Raindrops.raindrops(15)));
              }));
        Jest.test("the sound for 21 is PlingPlong as it has a factor 3 and 7", (function () {
                return Jest.Expect[/* toEqual */12]("PlingPlong", Jest.Expect[/* expect */0](Raindrops$Raindrops.raindrops(21)));
              }));
        Jest.test("the sound for 25 is Plang as it has a factor 5", (function () {
                return Jest.Expect[/* toEqual */12]("Plang", Jest.Expect[/* expect */0](Raindrops$Raindrops.raindrops(25)));
              }));
        Jest.test("the sound for 27 is Pling as it has a factor 3", (function () {
                return Jest.Expect[/* toEqual */12]("Pling", Jest.Expect[/* expect */0](Raindrops$Raindrops.raindrops(27)));
              }));
        Jest.test("the sound for 35 is PlangPlong as it has a factor 5 and 7", (function () {
                return Jest.Expect[/* toEqual */12]("PlangPlong", Jest.Expect[/* expect */0](Raindrops$Raindrops.raindrops(35)));
              }));
        Jest.test("the sound for 49 is Plong as it has a factor 7", (function () {
                return Jest.Expect[/* toEqual */12]("Plong", Jest.Expect[/* expect */0](Raindrops$Raindrops.raindrops(49)));
              }));
        Jest.test("the sound for 52 is 52", (function () {
                return Jest.Expect[/* toEqual */12]("52", Jest.Expect[/* expect */0](Raindrops$Raindrops.raindrops(52)));
              }));
        Jest.test("the sound for 105 is PlingPlangPlong", (function () {
                return Jest.Expect[/* toEqual */12]("PlingPlangPlong", Jest.Expect[/* expect */0](Raindrops$Raindrops.raindrops(105)));
              }));
        return Jest.test("the sound for 3125 is Plang", (function () {
                      return Jest.Expect[/* toEqual */12]("Plang", Jest.Expect[/* expect */0](Raindrops$Raindrops.raindrops(3125)));
                    }));
      }));

/*  Not a pure module */