interface Product {
    name: string,
    price: number,
    id: number,
    vendor: string,
    date: string
}

const product: Product = {
    name: 'RTX 3070',
    price: 3999,
    id: 1,
    vendor: 'Meli',
    date: '2023-03-03'
}

console.log(product)

const addNumbers = function(a:number,b:number){
    return console.log(a+b)
}

addNumbers(3,4)