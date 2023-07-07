// const arr = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 8, 8, 8]
// const uniqueArr = (arr) => {
//     let newSet = new Set(arr)
//     return [...newSet]
// }
// console.log(uniqueArr(arr))
//
// console.log('Start');
// setTimeout(() => {
//     console.log('Timeout');
// }, 0);
// Promise.resolve().then(() => {
//     console.log('Promise');
// });
// console.log('End');

const studentList = [
    {name: 'Ivan', age: 18, groupId: 1},
    {name: 'Ignat', age: 18, groupId: 1},
    {name: 'Jon', age: 17, groupId: 2},
    {name: 'Marina', age: 23, groupId: 2},
    {name: 'Bob', age: 22, groupId: 1}
]
const createStudent = (arr) => {
    let oldGroup = arr.filter(el => el.age > 17)

    let obj = {
        1: [],
        2: []
    }
    for (let i = 0; i < oldGroup.length; i++) {
        if (oldGroup[i].groupId === 1) {
            obj["1"].push(oldGroup[i])
        } else {
            obj["2"].push(oldGroup[i])
        }
    }
    return obj
}
// console.log(createStudent(studentList))
const createStudents = (arr) => {
    let obj = {
        1: [],
        2: []
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].groupId === 1 && arr[i].age > 17) {
            obj["1"].push(arr[i])
        } else if (arr[i].groupId === 2 && arr[i].age > 17) {
            obj["2"].push(arr[i])
        }
    }
    return obj
}
// console.log(createStudents(studentList))
const createStudents2 = (arr) => {
    let obj = {}
    arr.forEach(el => {
        if (!obj[el.groupId]) {
            obj[el.groupId] = []
        }
    })
    arr.forEach(el => {
        if (el.age > 17) {
            obj[el.groupId].push(el)
        }
    })
    return obj
}
/* Написать функцию sostavChisla(massivChisel: number[], chislo: number),
которая бы находила все возможные комбинации чисел из massivChisel,
    сумма которых равна chislo. При этом:
    1) massivChisel содержит, только уникальные положительные числа (> 0)
2) в комбинации не должно быть повторений чисел
3) все комбинации должны быть уникальными

Для проверки работоспособности функции запустить runTests()
*/
const arr = [8, 2, 3, 4, 6, 7, 1]

function containNum(arr, num) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === num) {
                newArr.push([arr[i], arr[j]])
            }
        }
    }
    // let asd = newArr.filter(el=>el)
    return newArr;
}

// console.log(containNum(arr, 5))
function wave(str) {
    // Code here
    let res = [];
    let a
    let b
    for (let i = 0; i < str.length; i++) {
        a = str[i].toUpperCase()
        b = str.replace(str[i])
        res.push(b)
    }
    return res
}

// console.log(wave('hello'))
function diffArray(arr1, arr2) {
    const newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            newArr.push(arr1[i])
        }
    }
    for (let j = 0; j < arr2.length; j++) {
        if (!arr1.includes(arr2[j])) {
            newArr.push(arr2[j])
        }
    }
    return newArr;
}

// console.log( diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
function destroyer(arr) {
    let args = Array.from(arguments).slice(1);
    for (let i = 0; i < arr.length; i++) {
        if (args.includes(arr[i])) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
function whatIsInAName(collection, source) {
return collection.filter(el=>el)
}

console.log(whatIsInAName([
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }],
    { last: "Capulet" }))