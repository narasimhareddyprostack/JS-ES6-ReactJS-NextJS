import React from 'react'

const ContactDetails = (props) => {
  return <div>
        <h3>Contact Details </h3>
        
         <div className="card">
         <div className="card-header">
          <img src={props.contact.picture.large} alt="" />
         </div>
         <div className="card-body">
         <ul className='list-group'>
         <li className='list-group-item'>{props.contact.name.last}</li>
         <li className='list-group-item'>{props.contact.gender}</li>
         <li className='list-group-item'>{props.contact.dob.age}</li>
         <li className='list-group-item'>{props.contact.cell}</li>
         </ul>
         </div>
         </div> 
          </div>
}

export default ContactDetails