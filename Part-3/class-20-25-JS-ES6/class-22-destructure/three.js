let emp={
    eid:101,
    ename:"Rahul",
    esal:45000,
    details:{
        email:"rg@gmail.com",
        loc:'Wayanad'
    }
}
let {ename,details}  = emp;
let {loc} = details;
console.log(ename)
console.log(loc)