import { useState } from "react"

let Login =()=>{
    let [user,setUser] = useState({'email':"",'pwd':""})
    let emailHandler = (event)=>{
        setUser({ ...user , 'email':event.target.value})
    }
    let pwdHandler = (event)=>{
         setUser({...user, 'pwd':event.target.value})
    }
    let submitHandler=(event)=>{}
    return <div><h4>Login Component</h4>
                <pre>{JSON.stringify(user)}</pre>
                <form >
                    <label >Email Id:</label>
                    <input type="text" onInput={emailHandler} /> <br />

                    <label >Password</label>
                    <input type="text" onInput={pwdHandler} /> <br />
                    
                    <input type="submit" />
                </form>
            </div>
}
export default Login