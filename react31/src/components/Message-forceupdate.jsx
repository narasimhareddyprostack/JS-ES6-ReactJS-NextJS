import React from "react"
class Message extends React.Component{
    constructor(props){
        super(props)
        console.log("First constructor")
    }
    msg="Hello"; //Property
    gmHandler=()=>{ 
        this.msg="Good Morning"
        console.log(this.msg);
        this.forceUpdate();
    }
    render(){
        console.log("Inside Render Method")
        return <div>
                    <h4>Message Component</h4>
                    <h4>Message Value:{this.msg}</h4>
                    <button onClick={this.gmHandler}>GM</button>
                </div>
    }
}

export default Message