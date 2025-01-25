const nums = [1,2,3,4,5,6,7,8,9]

// const newNums = nums.forEach( (val) =>{
    // console.log(val)    
// } )

// console.log(newNums);        // it will not work, in forEach values are not returned

// const newNums = nums.filter ( (item) => item > 5)
// console.log(newNums);        // it will work, in filter values are returned

//filter
const newNums = nums.filter ( (item) => {
    return item > 5                                                 //explicit return if using {}
})
// console.log(newNums); 

//map
const Addten = nums.map( (item) => item + 10)
// console.log(Addten);

//chaining : using multiple methods in same
const newNums2 = nums.map( (val) => val * 10).map( (val) => val + 5).filter( (val) => val > 50)
// console.log(newNums2);

//reduce
const sum = nums.reduce( (acc,val) => {          //acc will store the current result in every iteration and in starting acc will store initial val which is written after function
    return acc + val
}, 0)                // 0 here is initial value
console.log(sum);