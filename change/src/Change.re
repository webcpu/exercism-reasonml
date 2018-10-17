type coins = list(int);
let rec makeChange = (n: int, cs: coins) => Array.length(cs) == 0 ? [] : Array.append(makeChange(n-n/));
