import React, { Component } from "react";

class Imgcard extends Component {
   
    render () {
        const {shake, image, id, handleClick} = this.props;
        const divStyle = {
            backgroundImage:  `url(${image})`,
            border: '1px solid red',
            width: 200,
            height: 200      
        }
        return (
            <div role="img"
            aria-label="click item" 
            className="click-item" 
            id={id}
            shake={shake}
            style={divStyle}
            onClick={handleClick}>           
            </div>
        )
    }
}



export default Imgcard;