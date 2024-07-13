const promiseOne = new Promise(function(resolve, reject) {
    // Do something async
    setTimeout(function() {
        console.log('Async task completed');
        resolve();
    }, 1000)
}) 

promiseOne.then(function() {
    console.log('Promise Consumed!');
})


new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task 2 completed');
        resolve();
    }, 1000)
}).then(function() {
    console.log('Async 2 resolved!');
})