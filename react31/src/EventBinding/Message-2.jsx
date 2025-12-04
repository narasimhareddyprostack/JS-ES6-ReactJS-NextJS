import React, { useState } from 'react'

const Message = () => {
    let [msg,setMsg]  = useState("Hello");
    let updateHandler = ()=>{
        setMsg("GM")
    }
    return  <div>
                <h3>Message Component</h3>
                <hr/>
                <h2>Message:{msg}</h2>
                <button onClick={updateHandler}>GM</button> 
                <button onClick={updateHandler}>GA</button> 
                <button onClick={updateHandler}>GE</button> 
                <button onClick={updateHandler}>GN</button> 
            </div>
}

export default Message