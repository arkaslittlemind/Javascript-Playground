//Question 2- Return details of those who scored more than 60

let students = [
    { name: 'Arka', age: 23, marks: 80 },
    { name: 'Shristi', age: 23, marks: 69 },
    { name: 'Anik', age: 24, marks: 90 },
    { name: 'Aritra', age: 24, marks: 35 },
    { name: 'Debarpan', age: 24, marks: 55 }
];

const studentsFilter = students.filter((student) => 
    student.marks > 60
);

console.log(studentsFilter); // [ { name: 'Arka', age: 23, marks: 80 }, { name: 'Shristi', age: 23, marks: 69 }, { name: 'Anik', age: 24, marks: 90 } ]