export function whatMyType<T>(argument: T): T {
    return argument
}

const amIString = whatMyType<string>('Hola mundo')
const amINumber = whatMyType<number>(100)
const amIArray = whatMyType<number[]>([1,2,3,4,5])

console.log(amIString.split(' '))
console.log(amINumber.toFixed())
console.log(amIArray.join('-'))