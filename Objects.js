// singleton
// Object.create           //objects which are defined through constructor are called singleton
// const Object1 = new Object()  // example of singleton


// object literals         //objects which are defined through literal are not singleton
const mySym = Symbol("key1")


const JsUser = {
    name: "Shivansh",                  // in objects, keys are treated as string by-default
    "full name": "Shivasnh ojha",   //you will not able to access this if you use dot operator
    [mySym]: "mykey1",                 //symbols are used with [] if you want to use it as a symbol
    age: 18,
    location: "Arrah",
    email: "nothingSerious@sam.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)         // using dot operator
// console.log(JsUser["email"])      // using square bracket
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "bettercallSaul@gmail.com"
// Object.freeze(JsUser)            // if you don't want to alter any further changes in object, you can freeze it
JsUser.email = "jk@microsoft.com"   // this will not be changed, email will remain which is previously defined 
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello, I am Shivansh");
}
console.log(JsUser.greeting());  // this will print the function definition
// console.log(JsUser.greeting);  // this will print the prototypeof the function

JsUser.Salutation = function(){
    console.log(`Yo ${this.name}, bitch`);
}
JsUser.Salutation();  // this will print the function definition