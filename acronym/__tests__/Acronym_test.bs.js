// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Acronym$Acronym = require("../src/Acronym.bs.js");

describe("Acronym", (function () {
        Jest.test("basic", (function () {
                return Jest.Expect[/* toEqual */12]("PNG", Jest.Expect[/* expect */0](Acronym$Acronym.abbreviate("Portable Network Graphics")));
              }));
        Jest.test("lowercase words", (function () {
                return Jest.Expect[/* toEqual */12]("ROR", Jest.Expect[/* expect */0](Acronym$Acronym.abbreviate("Ruby on Rails")));
              }));
        Jest.test("punctuation", (function () {
                return Jest.Expect[/* toEqual */12]("FIFO", Jest.Expect[/* expect */0](Acronym$Acronym.abbreviate("First In, First Out")));
              }));
        Jest.test("all caps word", (function () {
                return Jest.Expect[/* toEqual */12]("GIMP", Jest.Expect[/* expect */0](Acronym$Acronym.abbreviate("GNU Image Manipulation Program")));
              }));
        return Jest.test("punctuation without whitespace", (function () {
                      return Jest.Expect[/* toEqual */12]("CMOS", Jest.Expect[/* expect */0](Acronym$Acronym.abbreviate("Complementary metal-oxide semiconductor")));
                    }));
      }));

/*  Not a pure module */
