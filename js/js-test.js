const numbers = [10, 23, 4, 3]
const moreNumbers = [4, 9, 20, 16, 88]

let sum1 = 0
let sum2 = 0

for (let i = 0; i < numbers.length; i++) {
    sum1 += numbers[i]
}

for (let i = 0; i < moreNumbers.length; i++) {
    sum2 += moreNumbers[i]
}

console.log(sum1)
console.log(sum2)
