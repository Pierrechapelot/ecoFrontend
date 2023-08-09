const faker = require('faker');

const generateProducts = (count = 10) => {
    const products = []
    for (let i = 0; i < count; i++) {
        products.push( {
            id: i,
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription(),
            image: faker.random.image()
        });
    }
    return products;
};

const products = generateProducts(50);
console.log(products);