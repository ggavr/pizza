//1
function findLongestWordLength(str) {
  let a = str.split(" ");
  let b = a.map(word => word.length);
  let c = Math.max(...b)
  return c;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
//2
function largestOfFour(arr) {
  let a = arr.map(el => Math.max(...el))
  return a;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
