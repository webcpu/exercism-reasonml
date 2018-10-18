let _rebase = (base1, xs, base2) => {
  let rec digits = (b, n) =>
    switch (n) {
    | 0 => []
    | _ => List.append(digits(b, n / b), [n mod b])
    };
  xs |> Array.of_list |> Js.Array.reduce((b, a) => b * base1 + a, 0) |> digits(base2) |> (x => Some(x));
};

let rebase = (base1, xs, base2) => {
  let isNonPositiveBase = b => b <= 0;

  let isAllZero = ys => ys |> List.filter(x => x == 0) |> List.length |> (x => x == List.length(ys));

  let hasNegativeDigits = ys => ys |> List.filter(x => x < 0) |> List.length |> (x => x > 0);

  let hasInvalidPositiveDigits = ys => ys |> List.filter(x => x >= base1) |> List.length |> (x => x > 0);

  switch (xs) {
  | ys when ys == [] => None
  | ys when isAllZero(ys) => None
  | ys when hasNegativeDigits(ys) => None
  | ys when hasInvalidPositiveDigits(ys) => None
  | _ when isNonPositiveBase(base2) => None
  | _ => _rebase(base1, xs, base2)
  };
};
