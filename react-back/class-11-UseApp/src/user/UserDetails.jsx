import React from 'react'

const UserDetails = (props) => {
  return (
    <div>
    <h3>User Details</h3>
    <pre>{JSON.stringify(props)}</pre>
    <div className="card">
    <div className="card-header">
      <h4>{props.userObjData.username}</h4>
    </div>
    <div className="card-body">
      <ul className='list-group'>
        <li className='list-group-item'>{props.userObjData.email}</li>
        <li className='list-group-item'>{props.userObjData.address.city}</li>
        <li className='list-group-item'>{props.userObjData.company.name}</li>
      </ul>
    </div>
    </div>
    </div>
  )
}

export default UserDetails