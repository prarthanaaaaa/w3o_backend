// Declare a global variable using "var"
var globalVar = 10;


function ScopeFunction() {
     // Use "let" for variables with function scope
     let localLet = 20;
     // Use "const" for constants within the function scope
     const localConst = 30;

     // Access the global variable within the function
     console.log(globalVar); // Outputs 10

     // Access the local variables within the function
     console.log(localLet); // Outputs 20
     console.log(localConst); // Outputs 30
}


ScopeFunction();

// Access the global variable outside the function
console.log(globalVar); // Outputs 10

// Trying to access local variables outside the function results in an error
// console.log(localLet); // Throws an error
// console.log(localConst); // Throws an error

// Insights:
// - "var" is used for declaring global variables accessible across functions.
// - "let" is used for variables with function scope.
// - "const" is used for constants with function scope.

// Define a function called ReassignmentFunction
function ReassignmentFunction() {
     // Reassigning values to global and function-scoped variables
     globalVar = 100;
     let localLetReassigned = 200;
     // Attempting to reassign a constant variable results in an error
     // const localConstReassigned = 300; // Throws an error

     // Display the values before and after reassignment
     console.log("Before reassignment globalVar =", globalVar);
     console.log("Before reassignment localLetReassigned =", localLetReassigned);
     // console.log("Before reassignment localConstReassigned =", localConstReassigned);

     // Reassignment successful for globalVar and localLetReassigned
     globalVar = 400;
     localLetReassigned = 500;

     // Display the values after reassignment
     console.log("After reassignment globalVar =", globalVar); // Outputs 400
     console.log("After reassignment localLetReassigned =", localLetReassigned); // Outputs 500

     // Attempting to reassign a constant variable results in an error
     // localConstReassigned = 600; // Throws an error
}

// Call the ReassignmentFunction
ReassignmentFunction();
