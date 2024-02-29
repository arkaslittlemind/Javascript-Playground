//Question 6 - Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60


let students = [
    { name: 'Arka', rollNumber: 31, marks: 80 },
    { name: 'Shristi', rollNumber: 15, marks: 69 },
    { name: 'Anik', rollNumber: 16, marks: 90 },
    { name: 'Aritra', rollNumber: 7, marks: 35 },
    { name: 'Debarpan', rollNumber: 24, marks: 55 }
];



const totalMarks = students.map((student) => {
    if (student.marks < 60) {
        student.marks += 20;
    }
    return student;
}).filter((student) => student.marks > 60)
    .reduce((accumulator, currentValue) => accumulator + currentValue.marks, 0);

console.log(totalMarks);
