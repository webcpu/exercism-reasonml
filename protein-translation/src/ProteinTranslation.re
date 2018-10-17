let rec toCondons = xs => {
  let sub = String.sub;
  let length = String.length;
  switch (length(xs)) {
  | 0 => []
  | _ => List.append([sub(xs, 0, 3)], toCondons(sub(xs, 3, length(xs) - 3)))
  };
};

let condonToProteins = c =>
  switch (c) {
  | "AUG" => ["Methionine"]
  | "UUU"
  | "UUC" => ["Phenylalanine"]
  | "UUA"
  | "UUG" => ["Leucine"]
  | "UCU"
  | "UCC"
  | "UCA"
  | "UCG" => ["Serine"]
  | "UAU"
  | "UAC" => ["Tyrosine"]
  | "UGU"
  | "UGC" => ["Cysteine"]
  | "UGG" => ["Tryptophan"]
  | "UAA"
  | "UAG"
  | "UGA" => []
  };

let rec condonsToProteins = cs => {
  let transform = (x, xs) => {
    let ps = condonToProteins(x);
    ps == [] ? [] : List.append(ps, condonsToProteins(xs));
  };
  switch (cs) {
  | [] => []
  | [x, ...xs] => transform(x, xs)
  };
};

let proteins = xs => xs |> toCondons |> condonsToProteins;
