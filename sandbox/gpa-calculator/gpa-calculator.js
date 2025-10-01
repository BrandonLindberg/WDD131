function convertGradeToPoints(grade){

}

function calculateGpa(gpaPoints){

}

function getGrades(){
    //get grades from input
    const gradesElement = document.querySelector("#grades");
    //split grades on comma
    let grades = gradesElement.value.split(",");
    //clean up whitespace
    grades = grades.map(cleanGrade);
    //convert all grades to uppercase
    //return grade list
    return grades;
}

function calculateHandler(event){
    //get grades
    const gpaPoints = getGrades;
    console.log(gpaPoints);
    //calculate GPA
    const gpa = calculateGpa(gpaPoints)
    //output to browser
    outputGpa(gpa, "#output");
}

function outputGpa(gpa, selector){
    //insert GPA into DOM
}

document.querySelector("#submitButton").addEventListener("click", calculateHandler);