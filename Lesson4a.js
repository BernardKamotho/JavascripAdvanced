let attendance = 82;

let math = 95;
let english = 85;
let science = 80;

let total = math + english + science;

//find the average of the three subjects
let average = total / 3;
console.log("The total is: " + total)
console.log("The average is: " + average.toFixed(2))

if (attendance < 75){
    console.log("Failed due to low attendance")
}
else if (average >= 90) {
    console.log("Grade: A")
}
else if (average >= 80 && average <90){
    console.log("Grade: B")
}
else if (average >= 70 && average < 80){
    console.log("Grade: C")
}
else if (average >= 60 && average < 70){
    console.log("Grade: D")
}
else{
    console.log("Grade: E")
}