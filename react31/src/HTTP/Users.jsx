import React from 'react'
import Axios from 'axios'
const Users = () => {

  let getUserHandler = ()=>{
    console.log("Test Case 123")
    Axios.get('https://jsonplaceholder.typicode.com/users')
    .then((resp)=>{console.log(resp.data)})
    .catch((err)=>{console.log(err.name)})
  } 
  
  return <div>
                <h3>User Component</h3>
                <button onClick={getUserHandler}>Get Users</button>
        </div>
}

export default Users