let rec binarySearch = (xs, x, i) => {
  let sub = (start, len) => Array.sub(xs, start, len);
  let m = Array.length(xs) / 2;
  let len = Array.length(xs);

  let binarySearchLeft = () => binarySearch(sub(0, m), x, i);
  let binarySearchRight = () => binarySearch(sub(m + 1, len - m - 1), x, i + m + 1);
  let binarySearchMiddle = () => Some(i + m);
  switch (Array.length(xs)) {
  | 0 => None
  | 1 => x == xs[0] ? Some(i) : None
  | _ => x == xs[m] ? binarySearchMiddle() : x < xs[m] ? binarySearchLeft() : binarySearchRight()
  };
};
let find = (xs, x) => binarySearch(xs, x, 0);
