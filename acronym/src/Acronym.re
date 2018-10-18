let abbreviate = s =>
    s
    |> Js.String.splitByRe([%re "/[\s|-]+/g"])
    |> Array.map(w => String.sub(w, 0, 1) |> Js.String.toUpperCase)
    |> Js.Array.joinWith("")