import React, { Component } from "react";

const Img = props => 
    
     <div className = "container">
        {props.images.map((image,i) => <div 
            role="img"
            key = {i}
            // shake = {props.shake}
            
            value = {image}
            aria-label="click item" 
            className="click-item" 
            // style={"background-image: url('./assets/images/"+{image}+"')"}
            style={{
                backgroundImage:  `url('./assets/images/${image}')`,
                width: 200,
                height: 200      
              }}
            onClick={props.handleClick}
            >test: {i}: {image}</div>)}
     </div>
    



export default Img;