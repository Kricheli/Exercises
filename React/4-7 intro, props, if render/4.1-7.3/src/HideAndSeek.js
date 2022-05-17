import React, { Component } from "react";

class HideAndSeek extends React.Component{
  constructor(props){
    super(props);
    this.state={display: "none"};
  }
  changeDisplay = () => {
    const showBox = this.state.display === "none" ? "block" : "none";
    this.setState({display: showBox})
  }
  render(){
    return(
      <div style={{border:"1px solid black", height:500, width:350}}>
        <button onClick={this.changeDisplay}>Show/Hide</button>
        <div style={{backgroundColor:"pink", height:450, width:300, display:`${this.state.display}`}}></div>
      </div>
    )
  }
}
export default HideAndSeek;
