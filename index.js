export function add(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') throw new Error('error type of value input')
    return num1 + num2
}