import React, { Component } from "react";


class CardContent extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="page">
      <div className="ui card">
        <img className="image" src={this.props.img} />
        <div className="content">
        <h4 className="header">{this.props.header}</h4>
        <p className="description">{this.props.text}</p>
        <a href="/">{this.props.firstLink} </a>
        <a href="/">{this.props.secondLink}</a>
        </div>
      </div>
    </div>
    )
  }
} 

export default CardContent;