
export interface Product {
    description: string,
    price: number
}

interface TaxCalculationOptions {
    tax: number,
    products: Product[]
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const table: Product = {
    description: 'iPat Air',
    price: 250.0
}

// Destructuracion

export function taxCalculation(options: TaxCalculationOptions): number[] {
    let total = 0

    const { products: anotherProducts, tax: anotherTax } = options

    anotherProducts.forEach(({ price }) => {
        total += price
    })

    return [total, total * anotherTax]
}

const shoppingCard = [phone, table]
const tax = 0.15

const [result1, result2]: number[] = taxCalculation({
    products: shoppingCard,
    tax: tax
})

console.log('Total', result1)
console.log('Tax', result2)

export { }