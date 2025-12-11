import React from 'react'

const ContactList = (props) => {
  let {contacts} = props;
  let contactHandler=(user)=>{
    alert(user.name.first)
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
                  contacts.map((user)=>{
                    return <tr key={user.login.uuid} onClick={contactHandler.bind(null,user)}>
                            <td>{user.login.uuid.substring(32)}</td>
                            <td>{user.name.first}</td>
                            <td>{user.email}</td>
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