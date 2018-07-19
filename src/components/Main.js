import React, { Component } from "react";
// import Img from "./Img";
import Imgcard from "./Imgcard";
import "./main.css";

// const Main = Imgcard =>
  class Main extends Component {
    constructor(props) {
        super(props);   
        this.state = {
          score: 0,
          topScore: 0,
          guessed: false,
          imagesArr : ["img1.jpg","img2.jpeg","img3.jpg","img4.jpg","img5.jpg","img6.jpg","img7.jpg","img8.jpg","img9.jpg","img10.png","img11.png","img12.jpg"]
        };
        this.handleClick = this.handleClick.bind(this);
      }
  
      handleClick = event => {
        event.preventDefault();
        this.setState({
            score: guessed? 0 : score + 1,
            topScore: guessed? 0 : topScore + 1,
            guessed: true,
            imagesArr: shuffleArray(imagesArr)
          });

    //    const images = shuffleArray(imagesArr);


        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
            }
        }     

      }
          
    render () {
        const {imagesArr, score, topScore, guessed} = this.state;
        return (
           <div className="container" {...this.state}>
             {{imagesArr}.map((image, i) =>
             <Imgcard key={i} image={image} shake={guessed} handleClick = {this.handleClick} />
             )}
           </div>

        )
    }
  }

export default Main;