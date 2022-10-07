// let array = ["a", "b", "c"]
// const number = (array) => {
//     return array.map((arr, i)=>((i+1) +':'+ arr))
// }
//
// console.log(number(array))
let array = [1,1,2,2,3,4,]
const hasDuplicate = (arr, el) => arr.includes(el)
const duplicate = (arr) => arr.filter(el => hasDuplicate(arr, el))
const arrTrim = (arr) => [...new Set(arr)]
const duplicates =(arr) => arrTrim(duplicate(arr))
console.log(duplicate(array))