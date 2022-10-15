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
//3
function confirmEnding(str, target) {
  
  return str.slice(str.length-target.length) === target;
}

confirmEnding("Bastian", "n");
//4
function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}
//5
function generateHashtag (str) {
    let a = str.length < 140 && str.length > 0 ? str.trim().toLowerCase().split(' ').map(el=>el.replace(el[0], el[0].toUpperCase())).join(""):false
    console.log(a)
    let b =  a.startsWith('#') ? a : '#' + a
    console.log(b)
    return b.length <= 140 ? b : false
}

console.log(generateHashtag('#aaa vvv bbb'))

//6
function search(budget, prices) {
    return prices.filter(el=>el<=budget).sort((a,b)=>a-b).join(',')
}

console.log(search(2, [5,2,7,1,3,4,1]))
