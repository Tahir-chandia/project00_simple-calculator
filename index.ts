#! /usr/bin/env node 

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    { name: "firstNumber",
   type: "number",
    message: "Enter First Number" },
    { name: "secondNumber",
     type: "number", 
     message: "Enter Second Number" },
  { name: "Operators", type: "list", 
  message: "Select your Operator",
  choices:["Addition","Subtraction","Multiplication","Division"] },
]);

if (answer.Operators === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber); 
}else if (answer.Operators === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber); 
}else if (answer.Operators === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber); 
}else if (answer.Operators === "Division") {
  console.log(answer.firstNumber / answer.secondNumber); 
}else{
  console.log("Please select valid operator"); 
} 