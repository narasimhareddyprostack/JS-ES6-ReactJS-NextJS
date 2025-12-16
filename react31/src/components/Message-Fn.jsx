import React, { useState } from 'react'

const Message = () => {
  //var state="Hello";  
  let [state,setState] = useState("Hello");
  let gmHandler = ()=>{
    console.log("inside handler")
    //state="Goood Monring"
    setState("Goooooood Morning")
   
  }
  return <React.Fragment>
            <h4>Message Component</h4>
            <h3>Message Value:{state}</h3>
            <button onClick={gmHandler}>GM</button>
         </React.Fragment>
}

export default Message