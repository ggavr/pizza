const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 10
let timerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})
function moveMole() {
    timerId = setInterval(randomSquare, 1000)
}

moveMole()
function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }

}
let countDownTimerId = setInterval(countDown, 1000)
function dropElements(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        while (!func(i)){
            delete arr[i]
        }
    }
    return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
function steamrollArray(arr) {

    return arr;
}

steamrollArray([ 1, [2], [ 3, [ [4] ] ] ]);