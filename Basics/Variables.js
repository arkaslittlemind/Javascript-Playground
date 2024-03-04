const accountId = 144553;
let accountName = "Arkadipta Mojumder";
var accountPassword = "12345";
accountCity = "Vellore";
let accountState;

// accountId = 2; // not allowed

accountName = "Shristi Pradhan";
accountPassword = "67890";
accountCity = "Kolkata";

// console.log(accountId);

/* 
Prefer let over var because of issue in 
block scope and functional scope
*/

console.table([accountName, accountPassword, accountCity, accountId, accountState]);
