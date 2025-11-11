let enames=["rahul","sonia","priyanka","modi"]
//create new employee array contain upper case names 
//using exting source - enames
let new_enames=[]
for(let ename of enames){
    new_enames.push(ename.toUpperCase())
}
console.log(new_enames)

