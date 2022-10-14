//1
function findLongestWordLength(str) {
  let a = str.split(" ");
  let b = a.map(word => word.length);
  let c = Math.max(...b)
  return c;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
