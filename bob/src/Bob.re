let hasAlpha    = q => Js.Re.test(q, [%re "/[a-z]|[A-Z]/"]);
let hasAlphaNum = q => Js.Re.test(q, [%re "/\w/"]);
let trim        = Js.String.trim;
let endsWith    = Js.String.endsWith;

let isYell          = s => String.uppercase(s) == s && hasAlpha(s); /*String.match_?("/b[aeiou]t/", q);*/
let isYellQuestion  = s => isYell(s) && endsWith("?", trim(s));
let isAsk           = s => endsWith("?", s) && hasAlphaNum(s);
let isSayNothing    = s => trim(s) == "";

let _hey =
  fun
  | q when isSayNothing(q) => "Fine. Be that way!"
  | q when isYellQuestion(q) => "Calm down, I know what I'm doing!"
  | q when isYell(q) => "Whoa, chill out!"
  | q when isAsk(q) => "Sure."
  | _ => "Whatever.";

let hey = s => _hey(trim(s));
