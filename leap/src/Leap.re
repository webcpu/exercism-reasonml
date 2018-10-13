/*let rem = Num.rem;*/
let isLeapYear =
  fun
  | n when n mod 400 == 0 => true
  | n when n mod 100 == 0 => false
  | n when n mod 4 == 0 => true
  | _ => false;
