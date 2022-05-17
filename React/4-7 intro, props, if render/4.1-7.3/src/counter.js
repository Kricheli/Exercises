import React, { Component } from "react";


class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state={
      label:0
    };
  }
  incerment=()=>{
    this.setState({
      label: this.state.label + 1
    })
  }
  render(){
    return(
      <div>
      <button onClick={this.incerment}>Increment</button>
      <span>{this.state.label}</span>
      <br /><br /><br />
      </div>
    )
  }
}

export default Counter;