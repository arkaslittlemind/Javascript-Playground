// Write a function that strictly returns the name of students in Capital letters

let students = [
    { name: 'Arka', age: 23, marks: 80 },
    { name: 'Shristi', age: 23, marks: 69 },
    { name: 'Anik', age: 24, marks: 90 },
    { name: 'Aritra', age: 24, marks: 85 },
    { name: 'Debarpan', age: 24, marks: 75 }
];

// Traditional approach

let names = [];
for(let i = 0; i < students.length; i++) {
    names.push(students[i].name.toUpperCase());
}

console.log(names); 


// Using map
const namesMap = students.map((students) => {
    students.name.toUpperCase();
})

console.log(namesMap);// [ 'ARKA', 'SHRISTI', 'ANIK', 'ARITRA', 'DEBARPAN' ]