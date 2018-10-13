// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var SpaceAge$Spaceage = require("../src/SpaceAge.bs.js");

describe("Space Age", (function () {
        Jest.test("age on Earth", (function () {
                return Jest.Expect[/* toBeSoCloseTo */4](31.69, 2, Jest.Expect[/* expect */0](SpaceAge$Spaceage.ageOn(/* Earth */2, 1000000000.0)));
              }));
        Jest.test("age on Mercury", (function () {
                return Jest.Expect[/* toBeSoCloseTo */4](280.88, 2, Jest.Expect[/* expect */0](SpaceAge$Spaceage.ageOn(/* Mercury */0, 2134835688.0)));
              }));
        Jest.test("age on Venus", (function () {
                return Jest.Expect[/* toBeSoCloseTo */4](9.78, 2, Jest.Expect[/* expect */0](SpaceAge$Spaceage.ageOn(/* Venus */1, 189839836.0)));
              }));
        Jest.test("age on Mars", (function () {
                return Jest.Expect[/* toBeSoCloseTo */4](39.25, 2, Jest.Expect[/* expect */0](SpaceAge$Spaceage.ageOn(/* Mars */3, 2329871239.0)));
              }));
        Jest.test("age on Jupiter", (function () {
                return Jest.Expect[/* toBeSoCloseTo */4](2.41, 2, Jest.Expect[/* expect */0](SpaceAge$Spaceage.ageOn(/* Jupiter */4, 901876382.0)));
              }));
        Jest.test("age on Saturn", (function () {
                return Jest.Expect[/* toBeSoCloseTo */4](3.23, 2, Jest.Expect[/* expect */0](SpaceAge$Spaceage.ageOn(/* Saturn */5, 3000000000.0)));
              }));
        Jest.test("age on Uranus", (function () {
                return Jest.Expect[/* toBeSoCloseTo */4](1.21, 2, Jest.Expect[/* expect */0](SpaceAge$Spaceage.ageOn(/* Uranus */7, 3210123456.0)));
              }));
        return Jest.test("age on Neptune", (function () {
                      return Jest.Expect[/* toBeSoCloseTo */4](1.58, 2, Jest.Expect[/* expect */0](SpaceAge$Spaceage.ageOn(/* Neptune */6, 8210123456.0)));
                    }));
      }));

/*  Not a pure module */
