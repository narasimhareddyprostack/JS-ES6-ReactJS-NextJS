import React from 'react'

const UserList = (props) => {
  let selectedUserHandler = (x)=>{
    //alert(x.username)
    props.selectedUserfn(x);
  }
  return (
    <div>
      <h3>User List</h3>
      <pre>{JSON.stringify(props)}</pre>
      <table className='table'>
        <thead>
        <tr>
          <th>User Id</th>
          <th>User Name</th>
          <th>User City</th>
          </tr>
        </thead>
      <tbody>
        {
          props.userData.map((suo,ind)=>{
            return <tr key={ind} onClick={selectedUserHandler.bind(null,suo)}>
                  <td>{suo.id}</td>
                  <td>{suo.username}</td>
                  <td>{suo.address.city}</td>
                  </tr>
          })
        }
      </tbody>
      </table>
    </div>
  )
}

export default UserList