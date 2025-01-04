//explicit return
const add = (num1,num2) => {
    return num1+num2
}
console.log(add(3,4));



//implicit return if you have to return directly    //don't use {} instead you can use () or without any brackets

const multiply = (num1,num2) => num1*num2
console.log(multiply(3,4));

const obj1 = () => ({username : "Shivansh"})    // if you are returning object make sure to use () after {}
console.log(obj1());

//immediately invoked arrow function  IIFE

(function hello(){
    console.log("Hello, DB connected");
})();                 //here semicolon is required if you want further execution


//or you can use IIFE with arrow function
( () => {
    console.log("Hey, DB connected");
})();

( (name) => {
    console.log(`Hello, ${name} connected`);
})("Shivansh")
