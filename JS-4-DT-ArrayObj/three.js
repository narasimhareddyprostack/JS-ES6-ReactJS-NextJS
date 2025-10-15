//create - array
let enames=["Rahul","Sonai","Priya","Modi"]
//index       0        1        2        3
//read  - array
console.log(enames)
//how to read array elements?-using index
console.log(enames[0])//Rahul
console.log(enames[1])//Sonia
console.log(enames[2])//Priyanka
console.log(enames[3])//Modi
console.log(enames[4])//Undefined
console.log(enames[-1])//Undefined
//update  - array element
enames[0] = "Rahul Gandhi"
console.log(enames)
//delete - array element - using delete keyword

delete enames[0]
console.log(enames)