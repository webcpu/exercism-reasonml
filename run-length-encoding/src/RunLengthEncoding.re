let _encode = xs =>
  xs
  |> Js.String.split("")
  |> Js.Array.reducei(
       (b, a, i) => {
         let (cs, ns) = b;
         let len = Js.Array.length(cs);
         let lastIndex = Js.Array.length(cs) - 1;
         let cs' = i == 0 ? [|a|] : a == cs[lastIndex] ? cs : Array.append(cs, [|a|]);
         let ns' =
           i == 0 ?
             [|1|] :
             a == cs[lastIndex] ?
               Array.append(Array.sub(ns, 0, len - 1), [|ns[lastIndex] + 1|]) : Array.append(ns, [|1|]);
         (cs', ns');
       },
       ([||], [||]),
     )
  |> (
    result => {
      let (cs, ns) = result;
      ns |> Js.Array.mapi((n, i) => n > 1 ? string_of_int(n) ++ cs[i] : cs[i]) |> Js.Array.joinWith("");
    }
  );

let encode = xs =>
  switch (xs) {
  | "" => ""
  | _ => _encode(xs)
  };

let rec _decode = xs => {
  let sub = String.sub;
  let length = String.length;
  let head = xs => sub(xs, 0, 1);
  let rec takeDigits = (s: string) =>
    switch (s) {
    | "" => ""
    | _ => Js.String.includes(head(s), "0123456789") ? head(s) ++ takeDigits(sub(s, 1, length(s) - 1)) : ""
    };

  let takeLetter = (s: string) =>
    switch (s) {
    | "" => ""
    | _ => head(s)
    };
  switch (xs) {
  | "" => ""
  | _ =>
    let digits = takeDigits(xs);
    let letter = takeLetter(sub(xs, length(digits), length(xs) - length(digits)));
    let offset = digits == "" ? 1 : length(digits) + 1;
    let next = sub(xs, offset, String.length(xs) - offset);
    let n = digits == "" ? 1 : int_of_string(digits);
    let c = letter.[0];
    String.make(n, c) ++ _decode(next);
  };
};

let decode = xs =>
  switch (xs) {
  | "" => ""
  | _ => _decode(xs)
  };
