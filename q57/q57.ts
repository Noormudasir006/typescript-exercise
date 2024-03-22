//Find the Average Grade: Given a list of grades, calculate the average grade.

let grades = ["70", "60", "50", "40", "30"];
let averageGrades = grades.reduce((total, grade)=> total + parseInt(grade), 0)/ grades.length;
console.log(averageGrades)