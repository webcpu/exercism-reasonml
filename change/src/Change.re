type coins = list(int);
let makeChange = (n: int, cs: coins) => {
  let xs = Array.of_list(cs);
  let most = xs => Array.sub(xs, 0, Array.length(xs) - 1);
  let last = xs => xs[Array.length(xs) - 1];
  let rec exchange = (n, rs) => {
    let coinValue = rs => xs[Array.length(xs) - Array.length(rs) - 1];
    Js.log({j|$n, $rs|j});
    switch (n) {
    | 0 => Array.length(rs) < Array.length(xs) ? exchange(n, Array.append([|0|], rs)) : rs
    | _ => exchange(n mod coinValue(rs), Array.append([|n / coinValue(rs)|], rs))
    };
  };
  Some(
    exchange(n, [||])
    |> (
      x =>
        {
          Js.log(x);
          x;
        }
        |> Array.to_list
        |> List.mapi((i, x) => x * List.nth(cs, i))
        |> List.filter(x => x != 0)
    ),
  );
};
