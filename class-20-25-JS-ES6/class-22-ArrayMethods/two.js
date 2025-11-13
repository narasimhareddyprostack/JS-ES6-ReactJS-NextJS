let employees=[
    {eid:101,ename:"Rahul",gender:"Male"},
    {eid:102,ename:"Sonia",gender:"Female"},
    {eid:103,ename:"Priyanka",gender:"Female"},
    {eid:104,ename:"Modi",gender:"Male"},
    {eid:102,ename:"Sonia",gender:"Female","dupicate":true},
    {eid:105,ename:"Amith",gender:"Male"},
    {eid:106,ename:"VS",gender:"Male"},
]
/* let employee=employees.find((emp)=>{
    return emp.ename=="Maddi"
}) */
let employee=employees.find(emp=>emp.ename==="Sonia")
console.log(employee)