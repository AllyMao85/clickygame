import React, { Component } from "react";


class Imgcard extends Component {
    // constructor (props) {
    //     super(props)
    //     this.state={
    //         shake: false
    //     }
    
    // }
    render () {
        const {shake, image, handleClick} = this.props
        return (
            <div role="img"
            aria-label="click item" 
            className="click-item" 
            shake={shake}
            style={{
                backgroundImage:  `url('./assets/images/${image}')`,
                width: 200,
                height: 200      
              }}
            onClick={handleClick}>           
            </div>
        )
    }
}



export default Imgcard;