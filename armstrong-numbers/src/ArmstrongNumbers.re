let digitToInt = c => c |> Js.String.make |> int_of_string;
let digits = n => n |> string_of_int |> Js.String.split("") |> Array.map(digitToInt);
let digitsLength = n => n |> digits |> Array.length;
let validate = n => {
  let len = digitsLength(n);
  n |> digits |> Js.Array.reduce((b, a) => b + Js.Math.pow_int(a, len), 0) |> (x => x == n);
};
