// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);      //false
console.log(null == 0);     //false
console.log(null >= 0);     //true

//reason is equality check == and comparison operators < > <= >= works differently.
//comparison first converts null to a number , treating it as 0.
//That's why null >= 0 returns true whereas null > 0 return false.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 
// === is a strict equality operator. It checks both value and type of the operands.

console.log("2" === 2);