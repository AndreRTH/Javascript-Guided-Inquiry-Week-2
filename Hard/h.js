// HARD: Given the information below for Tom and Jerry. 
// Tom - 	height:  9in   	mass: 8 g
// Jerry - 	height: 10in 	mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using a standard BMI formula:
// Formula: weight (lb) / [height)]2 x 703
 
// Store Tom & Jerry’s mass and height as variables.
// Calculate both their BMI’s. 
// Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. 
// Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).


let tomHeight = 9;
let tomWeight = 8; 

let jerryHeight = 10;
let jerryWeight = 45; 

const tomBMI = bmi(tomWeight,tomHeight);
const jerryBMI = bmi(jerryWeight, jerryHeight);

function bmi(weight, height) {
    return (weight / height / height) * 703
}

console.log(tomBMI);
console.log(jerryBMI);

const tomBMIHigherThanJerryBMI = tomBMI > jerryBMI;
console.log(tomBMIHigherThanJerryBMI);

console.log(`Is Tom's BMI higher than Jerry's? ${tomBMIHigherThanJerryBMI}`);


