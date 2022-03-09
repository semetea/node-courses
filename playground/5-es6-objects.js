// Object property shorthand

const name = 'Terry'
const age = 24

const user = {
    name,
    age,
    location: 'Seoul'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

// const {label: productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transcation = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transcation('order', product)