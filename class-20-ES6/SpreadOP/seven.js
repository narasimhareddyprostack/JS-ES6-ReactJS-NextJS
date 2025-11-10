/*
 - merger arrays/Objects using spread operator
*/
let a=[10,20,30,40]
let b=[30,40,50,60]
let c=[...a,...b]
console.log(c)
//JS Array allowed duplicates and order maintained
let emp={eid:101,ename:"Rahul",email:"rg@gmail.com"}
let details={email:"rg@pm.com",loc:"Wayand"}

let emp_details={...emp,...details}
console.log(emp_details)