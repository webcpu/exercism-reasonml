let toMatrix = Array.map(Js.String.split(""));

let count = (x, y, css) => {
  let relativeCordinates = [
    ((-1), (-1)),
    (0, (-1)),
    (1, (-1)),
    ((-1), 0),
    (0, 0),
    (1, 0),
    ((-1), 1),
    (0, 1),
    (1, 1),
  ];

  let isValid = xy => {
    let r = Array.length(css);
    let c = Array.length(css[0]);
    let (x, y) = xy;
    x >= 0 && x < c && y >= 0 && y < r;
  };

  let add = (pos1, pos2) => {
    let (x1, y1) = pos1;
    let (x2, y2) = pos2;
    (x1 + x2, y1 + y2);
  };
  relativeCordinates
  |> List.map(add((x, y)))
  |> List.filter(isValid)
  |> Array.of_list
  |> Array.map(pos => {
       let (x, y) = pos;
       css[y][x] == "*" ? 1 : 0;
     })
  |> Js.Array.reduce((b, a) => b + a, 0);
};

let _annotate = xss => {
  let css = toMatrix(xss);
  let countMine = (x, y, c) =>
    switch (c) {
    | "*" => "*"
    | _ => count(x, y, css) |> (n => n > 0 ? string_of_int(n) : " ")
    };
  css
  |> Js.Array.mapi((cs, y) => cs |> Js.Array.mapi((c, x) => countMine(x, y, c)))
  |> Js.Array.map(Js.Array.joinWith(""));
};

let annotate = xss => {
  let isEmptyMine = yss => yss |> Js.Array.joinWith("") |> Js.String.trim |> (x => x == "");
  let isAllMine = yss =>
    yss
    |> Js.Array.joinWith("")
    |> Js.String.split("")
    |> Js.Array.filter(x => x != "*")
    |> Js.Array.length
    |> (n => n == 0);
  switch (xss) {
  | yss when isEmptyMine(yss) => yss
  | yss when isAllMine(yss) => yss
  | _ => _annotate(xss)
  };
};
