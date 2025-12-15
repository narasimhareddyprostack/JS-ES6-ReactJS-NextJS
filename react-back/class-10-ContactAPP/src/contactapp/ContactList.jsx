import React from 'react'

const ContactList = (props) => {
  let {contacts,selectedContact} = props;

  let getContactHandler=(fn,ln)=>{
    selectedContact(fn,ln)
  }
  return <div className='container'>
          <h3>Contacts</h3>
        
          <div className="row">
            <div className="col">
              <table className='table'>
                <thead className='bg-dark text-white'>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                {
                  contacts.map((contact)=>{
                    return <tr key={contact.login.uuid} onMouseOver={getContactHandler.bind(null,contact.name.first,contact.name.last)}>
                            <td>{contact.login.uuid.substring(32)}</td>
                            <td>{contact.name.first}</td>
                            <td>{contact.email}</td>
                           </tr>
                  })
                }
                </tbody>
              </table>
            </div>
          </div>
          </div>
}

export default ContactList