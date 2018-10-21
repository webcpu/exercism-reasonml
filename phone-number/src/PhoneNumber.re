let rec phoneNumber = xs => {
  let normalize = Js.String.replaceByRe([%re "/[^0-9]/g"], "");
  let hasCountryCode = xs => String.sub(xs, 0, 1) == "1" && String.length(xs) == 11;
  let isValidLength = xs => xs |> String.length |> (n => n == 10);

  let isStandardNumber = xs => {
    let firstDigit = String.sub(xs, 0, 1) |> int_of_string;
    let fourthDigit = String.sub(xs, 3, 1) |> int_of_string;
    let isNDigit = d => d <= 9 && d > 1;
    isNDigit(firstDigit) && isNDigit(fourthDigit);
  };

  let num = xs |> normalize;
  Js.log(num);
  switch (num) {
  | ns when hasCountryCode(ns) => phoneNumber(String.sub(ns, 1, 10))
  | ns when isValidLength(ns) && isStandardNumber(ns) => Some(ns)
  | _ => None
  };
};
