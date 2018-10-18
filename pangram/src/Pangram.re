let isPangram = xs =>
  xs
  |> Js.String.toLowerCase
  |> Js.String.replaceByRe([%re "/[^[[a-z]|[A-Z]|[0-9]]]/g"], "")
  |> Js.String.split("")
  |> Array.to_list
  |> List.sort_uniq(String.compare)
  |> Array.of_list
  |> Js.Array.joinWith("")
  |> (xs => xs == "abcdefghijklmnopqrstuvwxyz");
