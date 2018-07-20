import React, { Component } from "react";
import {   
    Navbar,  
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
  
class Top extends Component {
   
      render() {
        return (
          <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">Clicky Game</NavbarBrand>
              
              
                <Nav className="ml-auto" navbar>
                  
                  <NavItem>
                    <NavLink href="#">{this.props.guessCorrect? "You guessed correctly!":"You guessed wrong!"}</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Score: {this.props.score} Top score: {this.props.topScore}</NavLink>
                  </NavItem>
                </Nav>
              
            </Navbar>
          </div>
        );
      }

}
export default Top;