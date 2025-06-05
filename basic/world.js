// hoisting

// console.log("Task 1");
// for(let i = 0 ; i<=2e9 ; i++){
//     if(i==2e9){
//         console.log("Task 2");
//     }
// }
// console.log("Task 3");

// console.log("Task 1");
// setTimeout(() => {
//   console.log("Task 2 Delayed");
// }, 5000); 
// console.log("Task 3");



// const prompt = require('prompt-sync')();
// const name = prompt("What is your name? ");
// console.log("Hello, " + name + "!");
// ctrl + ` opens vscode termianl


function sq(x){
    let ans = 0;
    ans = x*x;
    return ans;
}
console.log("the answer is: " + sq(12));



// const name = "Prathamesh";
// const roll = 43;
// // Old way with concatenation
// console.log("My name is " + name + " and my roll no. is: " + roll);
// // Using template literals
// console.log(`My name is ${name} and my roll no. is: ${roll}`);



// General functions
// function greet(name) {
//   return `Hello, ${name}!`;
// }
// console.log(greet("Prathamesh"));

//function expression
// const greet = function(name) {
//   return `Hello, ${name}!`;
// };
// console.log(greet("Prathamesh"));

// Arrow Function
// const greet = (name) => `Hello, ${name}!`;
// console.log(greet("Prathamesh"));

// // This function takes a name and a callback function
// function greet(name, callback) {
//   console.log("Hello, " + name + "!");
//   callback(); // Calls the callback function after greeting
// }
// // A callback function that says goodbye
// function sayGoodbye() {
//   console.log("Goodbye!");
// }
// // Using greet with sayGoodbye as the callback
// greet("Prathamesh", sayGoodbye);





// const mixedArray = [42, "hello", true, { name: "Alice" }, [1, 2, 3]];
// console.log(mixedArray);

// const student = {
//   name: "Prathamesh",
//   roll: 43,
//   course: "JavaScript",
//   isActive: true
// };
// for (let key in student) {
//   console.log(`${key}: ${student[key]}`);
// }

// const students = [
//   { name: "Prathamesh", roll: 43 },
//   { name: "Anita", roll: 20 },
//   { name: "Ravi", roll: 21 }
// ];
// const namesWithRoll = students.map(student => {
//   return `${student.name} with roll no: ${student.roll} is From class A`;
// });
// console.log(namesWithRoll);