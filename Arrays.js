const myArr = [1,2,3,true,"Noob"]
const arr1 = ["Superman","Ironman","Thor","Antman","Hulk"]
const arr2 = new Array(5,6,7,9)

// console.log(myArr);
// console.log(arr1);
// console.log(arr2);

// Array methods
// console.log(myArr.length);


myArr.push("Tuber")
myArr.push(6)
// console.log(myArr);
myArr.pop();
// console.log(myArr);

myArr.unshift(0);     // 0 will be inserted in start of the array
// console.log(myArr);
myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf("Noob"));

// console.log(arr2.join(""))

const newArr = arr1.slice(1,3)       // copy elements of arr1 with index 1 to index 2.
console.log(newArr);
console.log(arr1)                    // original array remains same


const newArr1 = arr1.splice(1,3);     //copy elements of arr1 with index 1 to index 3 and also alter the original array by deleting these elements
console.log(newArr1);
console.log(arr1);                    // modified array will be printed
console.log(arr1.splice(1,2,"Batman","Spiderman"));      //  delete element from index 1 to index 2 and inplace put these values
console.log(arr1);

const num1 = "Hello world welcome to programming"
const arr4 = num1.split(" ");
console.log(arr4);






