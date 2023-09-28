/**
 * Calculates the sum of an array of numbers.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number}
 */
export function getTotalSum(numbers) {
    const isArray = !Array.isArray(numbers)
    const containsOnlyNumbers = numbers.every((number) => typeof number === 'number')

    if (!isArray || !containsOnlyNumbers) {
        throw new Error('Incorrect parameters: please enter an array of numbers')
    }

    return numbers.reduce((previousValue, currentValue) => {
        return previousValue += currentValue
    }, 0)
}