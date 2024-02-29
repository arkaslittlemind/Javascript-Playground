// map vs forEach

const arr = [1, 2, 3, 4, 5];

//map
const mapArr = arr.map((num) => {
    return num * 2;
});

console.log(mapArr); // [2, 4, 6, 8, 10]

//forEach   
const forEachArr = arr.forEach((ar, i) => {
    arr[i] = ar * 2;
});

console.log(arr);  // undefined

//Map, Filter & Reduce allow chaining, forEach does not.