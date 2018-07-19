import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
  
class Top extends Component {
   
      render() {
        return (
          <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">reactstrap</NavbarBrand>
              
              
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Clicky Game</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">GitHub</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Score: {this.state.score} Top score: {this.state.topScore}</NavLink>
                  </NavItem>
                </Nav>
              
            </Navbar>
          </div>
        );
      }

}
export default Top;