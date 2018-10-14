type dna =
  | A
  | C
  | G
  | T;

type rna =
  | A
  | C
  | G
  | U;

let dnaToRna = (d: dna) =>
  switch (d) {
  | G => C
  | C => G
  | T => A
  | A => U
  };

let toRna = List.map(dnaToRna);
