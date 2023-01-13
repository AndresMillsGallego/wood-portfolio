import React from "react";
import { Nav, Container, NavDropdown } from "react-bootstrap";
import "./assets/Header.css"
import Genesee from "../../assets/Genesee.png";

const Header = () => {

  return (
    <div id="header-container">
          <Nav>
            <div id="header-div">
            <Container id="logo-div">
              <Nav.Item>
                <Nav.Link href="/">
                  <img className="logo" src={Genesee} alt="Genesee Logo" title="Home" />
                </Nav.Link>
              </Nav.Item>
            </Container>
            <Container id="links">
              <Nav.Item>
                <Nav.Link href="/floors"><p className="link-text">Floors</p></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/stairs"><p className="link-text">StairCases</p></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="furniture"><p className="link-text">Furniture</p></Nav.Link>
              </Nav.Item>
            </Container>
            <Container id="nav-dropdown">
              <NavDropdown id="tools" title="Tools" >
                <NavDropdown.Item eventKey="1">About Us</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="2">Contact</NavDropdown.Item>
              </NavDropdown>
            </Container>
            </div>
            </Nav>
       
    </div>
  )
}

export default Header;