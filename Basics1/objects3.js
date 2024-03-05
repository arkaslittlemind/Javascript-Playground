// Object Destructuring

const courseDetails = {
    courseName: "Chai aur Javascript",
    price: "999",
    courseInstructor: "Hitesh Choudhary",
}

const {courseInstructor: instructor} = courseDetails;

console.log(instructor);


// JSON Structure
// {
//     "courseName": "Chai aur Javascript",
//     "price": "999",
//     "courseInstructor": "Hitesh Choudhary"
// }