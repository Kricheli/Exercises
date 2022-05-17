import React, { Component } from "react";

class RangeCounter extends React.Component{
  constructor(propes){
    super(propes);
    this.state={
      label: 0,
    color:"black"};
  }
  increment=()=>{
    const incrementNum = this.state.label + 1;
    this.setState({label:incrementNum})
  };
  decrement=()=>{
    const decrementNum=this.state.label - 1;
    this.setState({label:decrementNum})
  };
  
  render(){
    if(this.state.label > 10 || this.state.label < -10 ){
      return(
        <div>
      <label>=====</label>
      <button onClick={this.decrement}>Decremnent</button>
      <button onClick={this.increment}>Incremnent</button>
      </div>)
    }
    if(this.state.label < 0 ){
      return(
        <div>
      <label style={{color:"red"}}>{this.state.label}</label>
      <button onClick={this.decrement}>Decremnent</button>
      <button onClick={this.increment}>Incremnent</button>
      </div>)
    }    if(this.state.label > 0 ){
      return(
        <div>
      <label style={{color:"green"}}>{this.state.label}</label>
      <button onClick={this.decrement}>Decremnent</button>
      <button onClick={this.increment}>Incremnent</button>
      </div>)
    }
      return(
        <div>
      <label style={{color:"black"}}>{this.state.label}</label>
      <button onClick={this.decrement}>Decremnent</button>
      <button onClick={this.increment}>Incremnent</button>
      </div>
      )
  }
}

export default RangeCounter;