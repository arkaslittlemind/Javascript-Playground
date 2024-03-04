const gitHubUserId = "arkaslittlemind";
const repoCount = 95;

// console.log(gitHubUserId + repoCount);

//String Interpolation

console.log(`Hello my github username is ${gitHubUserId} and me repository count is ${repoCount}`);


const gameName = new String("EA-FC24-New");
// console.log(gameName[0]);
//console.log(gameName.charAt(0));
// console.log(gameName.indexOf("F"));

// console.log(gameName.__proto__); //String

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());

const newGameName = gameName.substring(0, 4);
// console.log(newGameName);

const newGameName2 = gameName.slice(0, 3);
// console.log(newGameName2);

const newString = "    arka    ";
// console.log(newString);
// console.log(newString.trim());

const url = "https://arkaslittlemind.com/arka%20mind";
console.log(url.replace("%20", "-"));

console.log(url.includes("arka")); 

console.log(gameName.split("-"));