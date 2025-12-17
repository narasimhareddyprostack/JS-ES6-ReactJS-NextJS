import { useState } from "react"

let Login =()=>{
    let [email,setEmail]  = useState("")
    let [password,setPassword]  = useState("")
    let emailHandler=(event)=>{
        console.log(event)
        alert(event.target.value)
    }
    let passwordHandler=(event)=>{
        alert(event.target.value)
    }

    return <div><h4>Login Component</h4>
                <form>
                    <label >Email Id:</label>
                    <input type="text" onChange={emailHandler} /> <br />

                    <label >Password</label>
                    <input type="text" onChange={passwordHandler}/> <br />
                    
                    <input type="submit" />
                </form>
            </div>
}
export default Login