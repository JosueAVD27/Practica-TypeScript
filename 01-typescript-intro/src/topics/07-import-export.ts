import { Product } from "./06-function-destructuring"
import { taxCalculation } from "./06-function-destructuring"

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 300
    },
    {
        description: 'iPad',
        price: 500
    }
]

const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
})

console.log('Total', total)
console.log('Tax', tax)