const products = [
    { id: 1, name: 'alu', price: 30 },
    { id: 2, name: 'begun', price: 50 },
    { id: 3, name: 'potol', price: 45 },
    { id: 4, name: 'mula', price: 20 },
    { id: 5, name: 'tomato', price: 25 }
];


// let sum = 0;

// products.forEach(item => sum += item.price);
// for(let item of products){
//     sum += item.price
// }






// const sum = products.reduce((prev, current) => {
//     return prev + current.price;
// }, 0)

const sum = products.reduce((prev, current) => prev * current.price, 1)


console.log(sum)





// filter function

// const bazar = products.filter(item => item.price <= 20 || item.price > 30);
// console.log(bazar)

// const item = products.find(item => item.price > 40);
// console.log(item.name);








// forEach function
// products.forEach(sobji => console.log(sobji.name))
// const sobji = products.forEach(sobji => sobji.name)

// // map function

// const sobjis = products.map((item) => item.name)
// console.log(sobji);
// console.log(sobjis)




