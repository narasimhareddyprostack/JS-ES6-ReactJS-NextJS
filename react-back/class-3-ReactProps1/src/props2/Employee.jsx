let Employee=(props)=>{
    let {employees} = props;  //Object Destructuring
    return <div>
            <h4>Employeee Component</h4>
            <pre>props: {JSON.stringify(props)}</pre>
            <table>
                <thead>
                    <th>Employee Id</th>
                    <th>Name</th>
                    <th>Location</th>
                </thead>
                <tbody>
                {
                  employees.map((emp)=>{
                    return <tr>
                           <td>{emp.uid}</td>
                           <td>{emp.uname}</td>
                           <td>{emp.loc}</td>
                           </tr>
                  })  
                }
                </tbody>
            </table>
            </div>
}
export default Employee;