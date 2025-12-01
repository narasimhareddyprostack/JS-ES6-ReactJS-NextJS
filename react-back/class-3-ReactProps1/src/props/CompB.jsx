import React from 'react'
const CompB = (props) => {
  return (
    <div>
        <h4>Component B</h4>
        <pre>{JSON.stringify(props)}</pre>
        <h3>Message:{props.msg}</h3>
        <h3>Employee Id:{props.emp_Id}</h3>
        <h3>Employee Name:{props.emp_Name}</h3>
    </div>
  )
}
export default CompB