

// const myArray = [0,1,2,3,4,5,6]
// const myHeros = ["bhushan", "patil"]

// //const myArr2 = (2,5,9)
// // console.log(myArray[1])
 
// // myArray.push(6)
// // console.log(myArray.indexOf(8))
// console.log("A",myArray)

// const myn1 = myArray.slice(1,3)
// console.log(myn1)
// console.log("B",myArray)

// const myn2 = myArray.splice(1,3)
// console.log("C",myArray)
// console.log(myn2)

const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)
