// Reduce is a method that is used to reduce the array to a single value. 
// It takes a callback function and an initial value. 
// The callback function takes two parameters, the accumulator and the current value. 
// The initial value is the value that the accumulator starts with. 
// The callback function returns the new value of the accumulator. 
// The reduce method returns the final value of the accumulator.


const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, currVal) {
//     console.log(`acc: ${acc}, currVal: ${currVal}`);
//     return acc + currVal
// }, 0)

const myTotal = myNums.reduce((acc, currVal) => {
    return acc + currVal
}, 0)


// console.log(myTotal); // 6



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => {
    return acc + item.price;
}, 0)

console.log(priceToPay); // 22996