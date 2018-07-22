import React, { Component } from "react";

class Imgcard extends Component {
   
    render () {
        const {image, id, handleClick} = this.props;
        const divStyle = {
            backgroundImage:  `url(${image})`,
            border: '1px solid red',
            width: 200,
            height: 200      
        }
        return (
            <div role="img"
            className="click-item" 
            id={id}
            style={divStyle}
            onClick={handleClick.bind(this,id)}>           
            </div>
        )
    }
}



export default Imgcard;