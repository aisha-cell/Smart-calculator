const prompt = require("prompt-sync")();

//function for calculating average
function getaverage(marks){
    total = 0
    for(let mark of marks){
        total += mark
    }

    return total/marks.length
}

function calculateGrade(average){
    if(average >= 90) return "A";
    else if(average >= 80) return "B";
    else if(average >= 70) return "C";
    else if(average >= 60) return "D";
    else return "F";
}

let name = prompt("Enter student's name: ")
let marks = []

let numSubjects = parseInt(prompt("Enter No.of Subjects: "))
for(i = 0; i< numSubjects; i++){
    let mark = parseFloat(prompt(`Enter marks for subject ${i + 1}: `))
    marks.push(mark);
}

let average = getaverage(marks);
let grade = calculateGrade(average);

console.log(`Name: ${name}`);
console.log(`Average marks: ${average.toFixed(1)}`);
console.log(`Garde: ${grade}`)
