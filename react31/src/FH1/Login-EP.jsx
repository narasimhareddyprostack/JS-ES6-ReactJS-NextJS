import { useState } from "react"

let Login =()=>{
    let [email,setEmail]  = useState("")
    let [password,setPassword]  = useState("")
    let emailHandler=(event)=>{
        console.log(event)
        setEmail(event.target.value)
    }
    let passwordHandler=(event)=>{
        setPassword(event.target.value);
    }
    let submitHandler = (event)=>{
        event.preventDefault();
        console.log("Inside Handler")
        console.log(email,password)
    }
    return <div><h4>Login Component</h4>
                <pre>Email: {email} and Password:{password}</pre>
                <form onSubmit={submitHandler}>
                    <label >Email Id:</label>
                    <input type="text" onChange={emailHandler} /> <br />

                    <label >Password</label>
                    <input type="text" onChange={passwordHandler}/> <br />
                    
                    <input type="submit" />
                </form>
            </div>
}
export default Login