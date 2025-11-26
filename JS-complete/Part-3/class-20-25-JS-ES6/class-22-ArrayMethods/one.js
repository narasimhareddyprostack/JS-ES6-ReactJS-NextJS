let employees=[
    {eid:101,ename:"Rahul",gender:"Male"},
    {eid:102,ename:"Sonia",gender:"Female"},
    {eid:103,ename:"Priyanka",gender:"Female"},
    {eid:104,ename:"Modi",gender:"Male"},
    {eid:105,ename:"Amith",gender:"Male"},
    {eid:106,ename:"VS",gender:"Male"},
]
//let male_Employees=employees.filter(e=>e.gender==="Male")
//let male_Employees=employees.filter(emp=>emp.gender==="Male")
/* let male_Employees=employees.filter(function(emp){
    return emp.gender==="Male"
}) */
let male_Employees=employees.filter((emp)=>{
    return emp.gender==="Male";
})
console.log(male_Employees)