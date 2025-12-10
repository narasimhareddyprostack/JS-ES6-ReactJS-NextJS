import React, { useEffect } from 'react'

const Message = () => {
  useEffect(()=>{
    console.log("useEffect Hooks")
  },[])

  let gmHandler = ()=>{
    console.log("gm Handler")
  }
  return <div>
            <h3>Message Comp</h3>
        </div>
  
}

export default Message