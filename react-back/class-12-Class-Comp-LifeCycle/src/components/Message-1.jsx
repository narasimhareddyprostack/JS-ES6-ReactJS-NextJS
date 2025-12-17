import React from "react"
class Message extends React.Component{
    state={
        msg:"Hello"
    }
    gmHandler=()=>{ 
      this.setState({"msg":"Good Monring"})
    }
    render(){
        console.log("Inside Render Method")
        return <div>
                    <h4>Message Component</h4>
                    <h4>Message Value:{this.state.msg}</h4>
                    <button onClick={this.gmHandler}>GM</button>
                </div>
    }
}

export default Message