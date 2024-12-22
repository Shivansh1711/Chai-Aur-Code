// javascript is a dynamically typed language (No need to declare variable types explicitly)
// data types are converted into two types based on how they are stored and accesed

// Primitive 
// 7 types => Number, String , Boolean, BigInt, null, undefined, Symbol

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id);
console.log(anotherId);
console.log(id === anotherId) 



// Non primitive 
// 6 types => Object, Array, Function, Map, Set, Date

const heroes = ["Spiderman", "Ironman", "Loki"]
console.log(heroes);

let myObje = {
    name : "Shiva",
    age : 20,
    course : "CSE"
}
console.log(myObje);

const myFunc = function(){
    console.log("Hey buddy!!");
    
}
myFunc();