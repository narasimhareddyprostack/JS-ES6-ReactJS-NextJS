import { useState } from "react";
let Message =()=>{
    //let msg="Hello";
    let [msg,setMsg]=useState("Hello...");
    return <div>
            <h3>Message Component</h3><hr/>
            <h4>Message Value:{msg}</h4>
            <button onClick={()=>{setMsg("Good Morning")}}>GM</button>
            <button onClick={()=>{setMsg("Good Afternoon")}}>GA</button>
            <button onClick={()=>{setMsg("Good Night")}}>GN</button>
            </div>
}
export default Message;