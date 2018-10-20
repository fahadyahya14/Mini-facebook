import React, { Component } from 'react';




class Img extends Component {
    render() {
return(
<div className="card">
  <div className="card-body">
    <p className="card-text">{this.props.about}</p>
  </div>
        <img src={this.props.src} alt={this.props.alt} />
</div>
      );
    }
  }
  
  export default Img;