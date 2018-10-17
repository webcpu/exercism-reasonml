let isPling = n => n mod 3 == 0 ? "Pling" : "";
let isPlang = n => n mod 5 == 0 ? "Plang" : "";
let isPlong = n => n mod 7 == 0 ? "Plong" : "";
let fallback = (n, r) =>
  switch (String.length(r)) {
  | 0 => string_of_int(n)
  | _ => r
  };

let raindrops = n =>
  [|isPling, isPlang, isPlong|] |> Js.Array.map(f => f(n)) |> Js.Array.joinWith("") |> fallback(n);
