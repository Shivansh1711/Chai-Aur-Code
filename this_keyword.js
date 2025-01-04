const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);          //this refers to the current object
        console.log(this);                                             //it will print all methods and properties of this class
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);               // it will return an empty bracket

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);       // this will not work for separate function , only inside object methods
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }