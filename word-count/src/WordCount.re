let wordCount = s => {
    let trimPunctuations = xs => {
        let alphanum    = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let isAlphaNum  = (x) => String.contains(alphanum, x);
        let isEmpty     = (xs) => String.length(xs) == 0;
        let head        = (xs: string) => String.get(xs, 0);
        let rest        = (xs: string) => {
            let n = String.length(xs);
            switch (n) {
             | 1 =>  ""
             | _ => String.sub(xs, 1, n-1)
             }
        };
        let most = (xs: string) => String.length(xs) == 1 ? "" : String.sub(xs, 0, String.length(xs)-1);
        let last = (xs: string) => String.get(xs, String.length(xs)-1);
        let rec ltrim = xs => isEmpty(xs) ? "" : isAlphaNum(head(xs)) ? xs : ltrim(rest(xs));
        let rec rtrim = xs => isEmpty(xs) ? "" : isAlphaNum(last(xs)) ? xs : rtrim(most(xs));
        xs |> ltrim |> rtrim;
    };

    let countWord = (dict, k) => {
        let v = Js.Dict.get(dict, k);
        switch (v) {
            |None => Js.Dict.set(dict, k, 1)
            |Some(c) => Js.Dict.set(dict, k, c + 1)
        };
        dict;
    };

    s
    |> Js.String.splitByRe([%re "/\s+/"])
    |> Js.Array.map(Js.String.trim)
    |> Js.Array.filter(x => String.length(x) > 0)
    |> Array.map(trimPunctuations)
    |> Array.map(Js.String.toLowerCase)
    |> Js.Array.reduce(countWord, Js.Dict.empty());
}
