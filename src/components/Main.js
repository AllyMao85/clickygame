import React, { Component } from "react";
// import Img from "./Img";
import Imgcard from "./Imgcard";
import Top from "./Top";
import "./main.css";

// const Main = Imgcard =>
  class Main extends Component {
    constructor(props) {
        super(props);   
        this.state = {
          score: 0,
          topScore: 0,
          guessed: false,
          imagesArr : ["/assets/images/img1.jpg","/assets/images/img2.jpeg","/assets/images/img3.jpg","/assets/images/img4.jpg","/assets/images/img5.jpg","/assets/images/img6.jpg","/assets/images/img7.jpg","/assets/images/img8.jpg","/assets/images/img9.jpg","/assets/images/img10.png","/assets/images/img11.png","/assets/images/img12.jpg"],
          lostGame: false,
          scoreHistory:[]
        };
        this.handleClick = this.handleClick.bind(this);
      }
  
      handleClick = event => {
        event.preventDefault();
      
        let shuffled = this.state.imagesArr
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value) 
        const {guessed, lostGame, score, topScore, scoreHistory} = this.state;
        this.setState({
           
            lostGame: guessed ? true : false,
            score: lostGame ? 0 : score + 1,
            scoreHistory: lostGame? scoreHistory.push(score) : scoreHistory,
            // eslint-disable-next-line
            topScore: lostGame ? Math.max(scoreHistory.join(",")) : topScore,
            guessed: true,
            imagesArr: shuffled
            
          });

    }
          
    render () {
        const {imagesArr, score, topScore, guessed, lostGame} = this.state;
        return (    
            <div>
            {  <Top score={score} topScore={topScore} guessCorrect={!lostGame}/>}
               <div className="container">
                  {imagesArr.map((image, i) =>
                      <Imgcard key={i} id={i} image={image} shake={guessed.toString()} handleClick = {this.handleClick}/>
                   )}
               </div>
           </div>

        )
    }
  }

export default Main;