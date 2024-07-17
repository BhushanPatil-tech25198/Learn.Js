// const user = {
//     username: "bhushan",
//     price:666,

//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomeMessage()
// user.username ="patil"
// user.welcomeMessage()
// const chai = () => {
//     let userName = "sagar"
//     console.log(this.userName);
// }
// chai()

// explicite return
// const addTwo =(num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(5,7))

// ======implicite return

const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(8, 9));