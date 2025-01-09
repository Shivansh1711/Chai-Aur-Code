// for of

// ["", "", ""]
// [{}, {}, {}]


// for of loop is used to iterate over the values of an iterable object like array, set,map etc.
// it is used to iterate over the values of an iterable object like array, set,map etc.

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }
//myObject is not iterable
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

const map1 = new Map()
map1.set('IN', "India")
map1.set('USA', "United States of America")
map1.set('Fr', "France")
map1.set('IN', "India")

for (const key in map1) {     // for in will not work for map as it is iterable
    console.log(key);         
}


//for of : Iterates over the values of an iterable (like arrays, strings, Maps, Sets, etc.).
//for in : Iterates over the keys of an object (like objects, arrays, etc.).
