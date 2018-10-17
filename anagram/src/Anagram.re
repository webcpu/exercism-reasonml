let anagrams = (w, ws) => {
  let isNotSelf = (w1, w2) => Js.String.toLowerCase(w1) != Js.String.toLowerCase(w2);
  let sort = w =>
    w
    |> Js.String.toLowerCase
    |> Js.String.split("")
    |> Array.to_list
    |> List.sort(String.compare)
    |> Array.of_list
    |> Js.Array.joinWith("");
  let y = sort(w);
  ws |> List.filter(x => sort(x) == y && isNotSelf(x, w));
};
