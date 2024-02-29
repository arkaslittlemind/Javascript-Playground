//Question 5- Return only names of students who scored more than 60


let students = [
    { name: 'Arka', rollNumber: 31, marks: 80 },
    { name: 'Shristi', rollNumber: 15, marks: 69 },
    { name: 'Anik', rollNumber: 16, marks: 90 },
    { name: 'Aritra', rollNumber: 7, marks: 35 },
    { name: 'Debarpan', rollNumber: 24, marks: 55 }
];


const names = students.filter((student) => student.marks > 60)
    .map((student) => student.name);

console.log(names); // [ 'Arka', 'Shristi', 'Anik' ]

