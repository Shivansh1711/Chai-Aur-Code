let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString())

let myCreatedDate = new Date(2023,0,23,5,45)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let anotherDate = new Date("03-24-2007")
console.log(anotherDate.toLocaleString())


let myTimeStamp = Date.now();
console.log(myTimeStamp);
