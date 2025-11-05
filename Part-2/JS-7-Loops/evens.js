let numbers=[18,31,8,7,232,1055,96,11]
//WAP to print no of even numbers using
/*
1.for loop
2.while loop
3.do..while loop
4.for of 
*/
let i=0;
even_numbres=0;
while(i<=numbers.length-1){
    if( numbers[i]%2===0) even_numbres++;

    i++;
}
console.log("No of Even Numbers: ",even_numbres)