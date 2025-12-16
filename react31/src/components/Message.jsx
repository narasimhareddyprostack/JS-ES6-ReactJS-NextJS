import React, { Component } from 'react'

class Message extends Component {
  constructor(props){
    super(props)
    console.log("constructor is special J- Execute first")
    this.state={
        msg:"Hello"
    }
  }
 
  gmHandler=()=>{
    this.setState({msg:"Good Monring"})
  }
  gaHandler=()=>{
    this.setState({msg:"Good Afternooon"})
  }
  componentDidMount(){
    console.log("Automatically - after render")
  }
  render() {
      console.log("second Render")
      return <div>
                <h4>Message Component</h4>
                <h4>{this.state.msg}</h4>
                <button onClick={this.gmHandler}>GM</button>
                <button onClick={this.gaHandler}>GA</button>
            </div>
  }
}

export default Message