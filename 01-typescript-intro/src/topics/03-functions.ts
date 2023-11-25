// Funciones normales
function addNumber(a: number, b: number): number {
    return a + b
}

// Funcion flecha
const addNumberArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base
}

// const result: number = addNumber(1, 2)
// const result2: string = addNumberArrow(1, 2)
// const resultMultiply: number = multiply(5)

// console.log({
//     result, result2, resultMultiply
// })

interface Character {
    name: string,
    hp: number,
    showHP:  () => void
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHP() {
        console.log(`Puntos de vida ${this.hp}`)
    }
}

healCharacter(strider, 10)
healCharacter(strider, 10)
strider.showHP()

export { }