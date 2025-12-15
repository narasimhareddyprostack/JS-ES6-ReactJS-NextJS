import React from 'react'

const ContactList = (props) => {
  let {contacts,selectedContact} = props;

  let getContactHandler=(contact)=>{
    
    selectedContact(contact)
  }
  return <div className='container'>
          <h3>ContactList compoent</h3>
          <pre>{JSON.stringify(props)}</pre>
          <pre>{JSON.stringify(contacts)}</pre>
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
                    return <tr key={contact.login.uuid} onMouseOver={getContactHandler.bind(null,contact)}>
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