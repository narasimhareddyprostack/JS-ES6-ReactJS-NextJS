let employees=[
    {eid:101,ename:"Rahul",esal:45000},
    {eid:102,ename:"Sonia",esal:55000}

]
let createNewEmployee=(emp)=>{
    setTimeout(()=>{
    employees.push(emp)
    },4000)
}
let getEmployees=()=>{
    setTimeout(()=>{
     let rows=""
     for(let emp of employees){
        rows=rows+`<tr>
                        <td>${emp.eid}</td>
                        <td>${emp.ename}</td>
                        <td>${emp.esal}</td>
                    </tr>`
     }   

    document.getElementById('tb_data').innerHTML=rows
    },1000)
}
createNewEmployee({eid:103,ename:"Priya",esal:65000})
getEmployees()