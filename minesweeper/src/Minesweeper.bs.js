// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");

function toMatrix(param) {
  return $$Array.map((function (param) {
                return param.split("");
              }), param);
}

function count(x, y, css) {
  var isValid = function (xy) {
    var r = css.length;
    var c = Caml_array.caml_array_get(css, 0).length;
    var y = xy[1];
    var x = xy[0];
    if (x >= 0 && x < c && y >= 0) {
      return y < r;
    } else {
      return false;
    }
  };
  var partial_arg = /* tuple */[
    x,
    y
  ];
  return $$Array.map((function (pos) {
                  var match = Caml_array.caml_array_get(Caml_array.caml_array_get(css, pos[1]), pos[0]) === "*";
                  if (match) {
                    return 1;
                  } else {
                    return 0;
                  }
                }), $$Array.of_list(List.filter(isValid)(List.map((function (param) {
                              var pos1 = partial_arg;
                              var pos2 = param;
                              return /* tuple */[
                                      pos1[0] + pos2[0] | 0,
                                      pos1[1] + pos2[1] | 0
                                    ];
                            }), /* :: */[
                            /* tuple */[
                              -1,
                              -1
                            ],
                            /* :: */[
                              /* tuple */[
                                0,
                                -1
                              ],
                              /* :: */[
                                /* tuple */[
                                  1,
                                  -1
                                ],
                                /* :: */[
                                  /* tuple */[
                                    -1,
                                    0
                                  ],
                                  /* :: */[
                                    /* tuple */[
                                      0,
                                      0
                                    ],
                                    /* :: */[
                                      /* tuple */[
                                        1,
                                        0
                                      ],
                                      /* :: */[
                                        /* tuple */[
                                          -1,
                                          1
                                        ],
                                        /* :: */[
                                          /* tuple */[
                                            0,
                                            1
                                          ],
                                          /* :: */[
                                            /* tuple */[
                                              1,
                                              1
                                            ],
                                            /* [] */0
                                          ]
                                        ]
                                      ]
                                    ]
                                  ]
                                ]
                              ]
                            ]
                          ])))).reduce((function (b, a) {
                return b + a | 0;
              }), 0);
}

function annotate(xss) {
  var isEmptyMine = function (yss) {
    return yss.join("").trim() === "";
  };
  var isAllMine = function (yss) {
    return yss.join("").split("").filter((function (x) {
                  return x !== "*";
                })).length === 0;
  };
  if (isEmptyMine(xss) || isAllMine(xss)) {
    return xss;
  } else {
    var xss$1 = xss;
    var css = toMatrix(xss$1);
    return css.map((function (cs, y) {
                    return cs.map((function (c, x) {
                                  var x$1 = x;
                                  var y$1 = y;
                                  var c$1 = c;
                                  if (c$1 === "*") {
                                    return "*";
                                  } else {
                                    var n = count(x$1, y$1, css);
                                    var match = n > 0;
                                    if (match) {
                                      return String(n);
                                    } else {
                                      return " ";
                                    }
                                  }
                                }));
                  })).map((function (param) {
                  return param.join("");
                }));
  }
}

exports.annotate = annotate;
/* No side effect */
