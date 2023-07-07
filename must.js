//minValue
const numbers = [1, 45, 66, 2, 4, 6, -2, -10, -100, 100]
let minValue = numbers[0]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minValue){
        minValue=numbers[i]
    }
}
console.log(minValue)
const factorial = (n) => {
return n ? n*factorial(n-1) : 1
}

const fibonacci = (n) => {
    return n <= 1 ? n : fibonacci(n-1) + fibonacci(n-2)
}

const sumTwo = (n) => {
    if (n===1) return 1
    return n+sumTwo(n-1)
}
// console.log(sumTwo(10))
doItAfter(2).then(() => console.log())
function doItAfter(seconds) {
    let promise = new Promise((resolve, reject) => {
        setInterval(() => {
            resolve()
        }, seconds * 1000)
    })
    return promise
}

const arr = [1,2,3,4,5]
function counter(){
    let count = 0
    function increment(){
        count++
    }
    return increment()
}