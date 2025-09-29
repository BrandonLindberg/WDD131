const PI = 3.14;
let radius = 3;
let area = 0;

function calculateArea(radius){
    const area = radius * radius * PI;
    return(area);
}

area = calculateArea(3);
console.log(area);