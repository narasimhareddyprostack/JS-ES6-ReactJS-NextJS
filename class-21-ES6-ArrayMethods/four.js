let numbers=[11,7,8,31,18,232,1055,96,12]
//collect all even numbers into new array
let even_numbers=[]
for(let num of numbers){
    if(num%2 ===0){
        even_numbers.push(num)
    }
}
console.log(numbers)
console.log(even_numbers)