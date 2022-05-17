import React, { Component } from "react";



class Buttons extends Component {
  render(){
    return(
      <div className="container">
        <button><strong>Importent</strong></button>
        <button>Not Importent</button>
      </div>
    )
  }
}

export default Buttons;