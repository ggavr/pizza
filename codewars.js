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
//7
function chunkArrayInGroups(arr, size) {
    let arr2 = []
    while (arr.length > 0){
        arr2.push(arr.splice(0, size))
    }
    return arr2
}
function spinWords(str){
  //TODO Have fun :)
  let sentence = "";
  let separate = str.split(" ");
  
  for (let i = 0; i < separate.length; i++) {
    if (sentence) sentence += ' ';
    if (separate[i].length >= 5) {
      sentence += separate[i].split("").reverse().join("");
    } else {
      sentence += separate[i];
    }
  }
  return sentence;
}
//8
function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}
//9
function disemvowel(str) {
  let myRegex = /[^aouie]/gi
  return str.match(myRegex).join('');
}
//10
function smileyFace(arr){
let faceRegex= /[;:][~-]?[)D]/
let incr = 0;
for (face of arr) { 
  if (faceRegex.test(face)) { 
    incr++;
  }
}
return incr;
}
//11

function palindrome(str) {
    let res = str.replace(/[^a-z0-9]/gi, "").toLowerCase().trim();
    console.log(res)
    let asd = res.toLowerCase().trim().split('').reverse().join('')
    console.log(asd)
    if(res === asd) {
        return true;
    }else{
        return false
    }
}

console.log(palindrome("1 eye for of 1 eye."))
//12
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}
//13
function upArray(arr) {
    if (!isInputIsNonEmptyArray(arr)) {
        return null;
    }

    const isNumber = num =>  typeof num === 'number';
    const isIntSingleDigit = num => Number.isInteger(num) && num >= 0 && num <10;

    let resultArr = [];
    let i = arr.length;
    let num;
    while (i-- > 0) {
        num = arr[i];
        if (!isNumber(num) || !isIntSingleDigit(num)) {
            return null;
        }
        
        if (num === 9) {
            resultArr[i] = 0;
            if (i === 0) { //means we're in the msb/left most digit, so we need to insert 1 to the left
                resultArr.unshift(1);
                break; //you can leave it out really, as the next check in the while will fail anyway
            }  
        }
        else {
            resultArr[i] = num + 1; //No more + 1 should be made, just check for validity 
            //of the rest of the input and copy to the result arr
            while (--i > -1) {
                num = arr[i];
                if (!isNumber(num) || !isIntSingleDigit(num)) {
                    return null;
                }
                resultArr[i] = arr[i];
            }
            break;
        }
    }

    return resultArr;

    function isInputIsNonEmptyArray(arr) {
        return Array.isArray(arr) && arr.length > 0;
    }
}
