//Question 4- Return sum of marks of all the students

let students = [
    { name: 'Arka', rollNumber: 31, marks: 80 },
    { name: 'Shristi', rollNumber: 15, marks: 69 },
    { name: 'Anik', rollNumber: 16, marks: 90 },
    { name: 'Aritra', rollNumber: 7, marks: 35 },
    { name: 'Debarpan', rollNumber: 24, marks: 55 }
];

const marksSum = students.reduce((accumulator, currentValue) => accumulator + currentValue.marks, 0);

console.log(marksSum); // 329



