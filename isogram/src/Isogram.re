let is_isogram = xs => {
  let replaceWhitespaceOrHyphen = Js.String.replaceByRe([%re "/\s+|-/g"], "");
  xs
  |> Js.String.toLowerCase
  |> replaceWhitespaceOrHyphen
  |> Js.String.split("")
  |> Array.to_list
  |> List.sort_uniq(String.compare)
  |> Array.of_list
  |> Js.Array.joinWith("")
  |> ys => String.length(ys) == (xs |> replaceWhitespaceOrHyphen |> String.length)
  };