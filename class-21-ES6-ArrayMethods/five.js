let numbers=[11,7,8,31,18,232,1055,96,12]
//collect all even numbers into new array

//let even_numbers=numbers.filter(num=>num%2===0)
let even_numbers=numbers.filter((num)=>{
    return num%2 ===0;
})

console.log(numbers)
console.log(even_numbers)