function classDecorator<T extends { new(...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newPropety = 'New york'
        hello = 'override'
    }
}

@classDecorator
export class SuperClase {
    public myPropety: string = 'ABC123'

    print() {
        console.log('Hola mundo')
    }
}

console.log(SuperClase)

const myClass = new SuperClase()

console.log(myClass)