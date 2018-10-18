// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Minesweeper$Minesweeper = require("../src/Minesweeper.bs.js");

describe("Minesweeper", (function () {
        Jest.test("no rows", (function () {
                return Jest.Expect[/* toEqual */12](/* array */[], Jest.Expect[/* expect */0](Minesweeper$Minesweeper.annotate(/* array */[])));
              }));
        Jest.test("no columns", (function () {
                return Jest.Expect[/* toEqual */12](/* array */[""], Jest.Expect[/* expect */0](Minesweeper$Minesweeper.annotate(/* array */[""])));
              }));
        Jest.test("no mines", (function () {
                var input = /* array */[
                  "   ",
                  "   ",
                  "   "
                ];
                return Jest.Expect[/* toEqual */12](input, Jest.Expect[/* expect */0](Minesweeper$Minesweeper.annotate(input)));
              }));
        Jest.test("board with only mines", (function () {
                var input = /* array */[
                  "***",
                  "***",
                  "***"
                ];
                return Jest.Expect[/* toEqual */12](input, Jest.Expect[/* expect */0](Minesweeper$Minesweeper.annotate(input)));
              }));
        Jest.test("mine surrounded by spaces", (function () {
                var input = /* array */[
                  "   ",
                  " * ",
                  "   "
                ];
                var annot = /* array */[
                  "111",
                  "1*1",
                  "111"
                ];
                return Jest.Expect[/* toEqual */12](annot, Jest.Expect[/* expect */0](Minesweeper$Minesweeper.annotate(input)));
              }));
        Jest.test("space surrounded by mines", (function () {
                var input = /* array */[
                  "***",
                  "* *",
                  "***"
                ];
                var annot = /* array */[
                  "***",
                  "*8*",
                  "***"
                ];
                return Jest.Expect[/* toEqual */12](annot, Jest.Expect[/* expect */0](Minesweeper$Minesweeper.annotate(input)));
              }));
        Jest.test("horizontal line", (function () {
                return Jest.Expect[/* toEqual */12](/* array */["1*2*1"], Jest.Expect[/* expect */0](Minesweeper$Minesweeper.annotate(/* array */[" * * "])));
              }));
        Jest.test("vertical line", (function () {
                var input = /* array */[
                  " ",
                  "*",
                  " ",
                  "*",
                  " "
                ];
                var annot = /* array */[
                  "1",
                  "*",
                  "2",
                  "*",
                  "1"
                ];
                return Jest.Expect[/* toEqual */12](annot, Jest.Expect[/* expect */0](Minesweeper$Minesweeper.annotate(input)));
              }));
        Jest.test("vertical line, mine at edges", (function () {
                var input = /* array */[
                  "*",
                  " ",
                  " ",
                  " ",
                  "*"
                ];
                var annot = /* array */[
                  "*",
                  "1",
                  " ",
                  "1",
                  "*"
                ];
                return Jest.Expect[/* toEqual */12](annot, Jest.Expect[/* expect */0](Minesweeper$Minesweeper.annotate(input)));
              }));
        Jest.test("cross", (function () {
                var input = /* array */[
                  "  *  ",
                  "  *  ",
                  "*****",
                  "  *  ",
                  "  *  "
                ];
                var annot = /* array */[
                  " 2*2 ",
                  "25*52",
                  "*****",
                  "25*52",
                  " 2*2 "
                ];
                return Jest.Expect[/* toEqual */12](annot, Jest.Expect[/* expect */0](Minesweeper$Minesweeper.annotate(input)));
              }));
        return Jest.test("large board", (function () {
                      var input = /* array */[
                        " *  * ",
                        "  *   ",
                        "    * ",
                        "   * *",
                        " *  * ",
                        "      "
                      ];
                      var annot = /* array */[
                        "1*22*1",
                        "12*322",
                        " 123*2",
                        "112*4*",
                        "1*22*2",
                        "111111"
                      ];
                      return Jest.Expect[/* toEqual */12](annot, Jest.Expect[/* expect */0](Minesweeper$Minesweeper.annotate(input)));
                    }));
      }));

/*  Not a pure module */
