const score = 400
console.log(score)

const bal = new Number(200)
console.log(bal)

console.log(bal.toString()) 
console.log(`Length of balance is ${bal.toString().length}`)
console.log(`balance upto 2 decimal places is ${bal.toFixed(2)}`)

const otherNum = 12.876
console.log(otherNum.toPrecision(2))

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//++++++++++++++++++++++++++++++  MATHS  +++++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-7))
console.log(Math.round(4.5));
console.log(Math.ceil(8.1));
console.log(Math.floor(6.9));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(16));
console.log(Math.min(7,8,2));
console.log(Math.max(4,6,9));


console.log(Math.random());
console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

const min1 = 1;
const max1 = 6;

console.log(Math.floor(Math.random() * (max1 - min1 + 1)) + min1);



