// const promiseOne = new Promise(function(resolve, reject) {
//     // Do something async
//     setTimeout(function() {
//         console.log('Async task completed');
//         resolve();
//     }, 1000)
// }) 

// promiseOne.then(function() {
//     console.log('Promise Consumed!');
// })


// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('Async task 2 completed');
//         resolve();
//     }, 1000)
// }).then(function() {
//     console.log('Async 2 resolved!');
// })


// const promiseThree = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve({userName: 'John Doe', age: 25});
//     }, 1000)
// })

// promiseThree.then(function(data) {
//     console.log(data);
// })

// Promises using .then() and .catch()

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;
        if (!error) {
            resolve({userName: 'Arkadipta', email: 'arka@js.com'});
        } else {
            reject('Error: Something went wrong!');
        }
    }, 1000)
})

const userName = promiseFour
.then((data) => {
    console.log(data);
    return data.userName;
})
.then((userName) => {
    console.log(userName);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("Promise is either resolved or rejected!");
})

// Promises using async/await

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({userName: 'Anik Some', email: 'anik@js.com'});
        } else {
            reject('Error: Anik is sick!');
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);    
    } catch (error) {
       console.log('Error: ', error); 
    }
    
}

consumePromiseFive();


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);    
//     } catch (error) {
//         console.log('Error: ', error);
//     } 
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log('Error: ', error))
.finally(() => console.log('API call completed!'))