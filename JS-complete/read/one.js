const input=require('prompt-sync')()
let num=parseInt(input("Enter Number:"))

if(num>=100 && num<=1000){
    console.log("Yes!Given Number is 3 Digit No")
}
else{
    console.log("Not a 3 Digit Number")
}