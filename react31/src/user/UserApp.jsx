import React, { useEffect, useState } from 'react'
import Axios  from 'axios';
import UserList from './UserList';
import UserDetails from './UserDetails';
const UserApp = () => {
  let [users,setUsers] = useState([])
  let [userObj,setUserObject] = useState({})
  let selectedUserfn=(y)=>{
      setUserObject(y)
  }
  useEffect(()=>{
    Axios.get('https://jsonplaceholder.typicode.com/users')
    .then((resp)=>{setUsers(resp.data)})
    .catch()
  },[])
  return <div>
            <h3>User App</h3>
            <pre>{JSON.stringify(users)}</pre>
            <div className="container">
            <div className="row">
              <div className="col-8">
              {
                users.length>0 ?
                 <><UserList userData={users} selectedUserfn={selectedUserfn}/></>:
                 <><h4>No Data</h4></>
              }
              </div>
              <div className="col-4">
              {
                Object.keys(userObj).length>0? 
                <><UserDetails userObjData={userObj}/></>:
                <><h4>No Data</h4></>
              }
              </div>
            </div></div>
          </div>
  
}

export default UserApp