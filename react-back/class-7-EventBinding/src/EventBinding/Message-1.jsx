import React, { useState } from 'react'

const Message = () => {
    let [msg,setMsg]  = useState("Hello");
    let gmHandler = ()=>{
        setMsg("Good Morning")
    }
    let gaHandler = ()=>{
          setMsg("Good Afternoon")
    }
    let gnHandler = ()=>{
          setMsg("Good Night")
    }
    return  <div>
                <h3>Message Component</h3>
                <hr/>
                <h2>Message:{msg}</h2>
                <button onClick={gmHandler}>GM</button> 
                <button onClick={gaHandler}>GA</button> 
                <button onClick={gaHandler}>GE</button> 
                <button onClick={gnHandler}>GN</button> 
            </div>
}

export default Message