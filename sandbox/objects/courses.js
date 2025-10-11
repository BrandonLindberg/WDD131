const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  section:[{ sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
           { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}],

           enrollStudent: function (sectionNum) {
            console.log("in e")
            const section = this.sections.find(
                (section) => section.sectionNum === sectionNum
            );
        }
};

function setCourse(course) {
    let courseName = document.querySelector("#courseName");
    let courseCode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    courseCode.textContent = course.code;

}

function sectionTemplate(section) {
    return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
    const sectionsElement = document.querySelector("#sections");
    const htmlStrings = sections.map(sectionTemplate);
    sectionsElement.innerHTML = htmlStrings.join("");
}

setCourse(aCourse);
renderSections(aCourse.section);

function clickHandler() {
    aCourse.enrollStudent(2);
}

document.querySelector("#enrollStudent").addEventListener("click", clickHandler);




//one way to access object attributes
aCourse["code"];

//preferred way to access object attributes
aCourse.code;

//or
aCourse[code];

aCourse.section[0].roomNum;