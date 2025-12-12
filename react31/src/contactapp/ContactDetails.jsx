import React from 'react'

const ContactDetails = (props) => {
  return <div>
        <h3>Contact Details </h3>
        <pre>{JSON.stringify(props)}</pre>
         <div className="card">
         <div className="card-header">
          <h4>{props.fName} {"  "} {props.lName}</h4>
         </div>
      
         </div> 
          </div>
}

export default ContactDetails