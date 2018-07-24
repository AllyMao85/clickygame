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
          clicked: [],
          imagesArr : ["/assets/images/img1.jpg","/assets/images/img2.jpeg","/assets/images/img3.jpg","/assets/images/img4.jpg","/assets/images/img5.jpg","/assets/images/img6.jpg","/assets/images/img7.jpg","/assets/images/img8.jpg","/assets/images/img9.jpg","/assets/images/img10.png","/assets/images/img11.png","/assets/images/img12.jpg"],
          lostGame: false
        //   scoreHistory:[]
        };
        this.handleClick = this.handleClick.bind(this);
      }
  
      handleClick = id => {
        const {lostGame, score, topScore, clicked} = this.state;
        // const nextValue = e.target.value;
        // this.setState({ ["value" + param]: nextValue });
        // event.preventDefault();
        console.log(this);
        console.log(id);
        let shuffled = this.state.imagesArr
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value) 
       
        let guesd = clicked.indexOf(id);
        let clickedArr = clicked.concat(id);
        
        console.log(guesd);
        console.log(clickedArr);
        this.setState({
            
            
            lostGame: guesd!== -1 ? true : false,
            clicked: lostGame? [] : clickedArr,
            score: lostGame ? 0 : score + 1,           
            // scoreHistory: lostGame? scoreHistory.push(score) : scoreHistory,
            // // eslint-disable-next-line
            // topScore: lostGame ? Math.max(scoreHistory.join(",")) : topScore,
            topScore: lostGame ? score > topScore ? score: topScore
                               : topScore,
            
            imagesArr: shuffled
            
          });
          
        
          
    }
          
    render () {
        const {imagesArr, score, topScore, lostGame} = this.state;
        return (    
            <div>
            {  <Top score={score} topScore={topScore} guessCorrect={!lostGame}/>}
               <div className="container">
                  {imagesArr.map((image, i) =>
                      <Imgcard key={i} id={i} image={image} handleClick = {()=>this.handleClick(i)}/>
                   )}
               </div>
           </div>

        )
    }
  }

export default Main;