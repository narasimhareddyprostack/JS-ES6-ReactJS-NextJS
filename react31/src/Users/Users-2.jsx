import Axios from 'axios';
import { useState } from 'react';

let Users=()=>{
    let [users,setUsers]=useState([])
    let getData=()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            console.log(resp.data)
            setUsers(resp.data)
        })
        .catch(()=>{})
    }
    return <div>
                <h3>User Component</h3>
                <button onClick={getData}>Get Data</button>
                <pre>{JSON.stringify(users)}</pre>
                <table border={2}>
                    <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user)=>{
                            return <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.city}</td>
                                   </tr>
                        })
                    }
                    </tbody>
                </table>

            </div>
}

export default Users;