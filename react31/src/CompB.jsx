import React from 'react'
const CompB = (props) => {
  let {greet,emp_Id}  = props;  //Object Destructuring
  return (
    <div>
        <h3>Component B</h3><h3>{JSON.stringify(props)}</h3>
        <h4>{greet()}</h4><h4>{emp_Id}</h4>
        <table border={3}>
            <thead>
                <th>Employee Id</th> <th>Name</th> <th>Gender</th>
            </thead>
            <tbody>
            {
                props.employees.map((emp)=>{
                    return <tr>
                            <td>{emp.eid}</td>
                            <td>{emp.ename}</td>
                            <td>{emp.gender}</td>
                           </tr>
                })
            }
            </tbody>
        </table>
    </div>
  )
}
export default CompB;