import React from "react";
import { Link } from "react-router-dom";
import { Nav, Container, NavDropdown } from "react-bootstrap";
import "./assets/Header.css"
import Genesee from "../../assets/Genesee.png";

import Menu from "../Menu/Menu";

const Header = () => {

  return (
    <div id="header-container">
          <Nav>
            <div id="header-div">
            <Container id="logo-div">
              <Nav.Item>
                <Nav.Link as={Link} to="/">
                  <img className="logo" src={Genesee} alt="Genesee Logo" title="Home" />
                </Nav.Link>
              </Nav.Item>
            </Container>
            <Container id="links">
              <Nav.Item>
                <Nav.Link as={Link} to="/" title="Home"><p className="link-text">Home</p></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/floors" title="Floors"><p className="link-text">Floors</p></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/stairs" title="Stairs"><p className="link-text">Stairs</p></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="furniture" title="Furniture"><p className="link-text">Furniture</p></Nav.Link>
              </Nav.Item>
            </Container>
            <Container id="nav-dropdown">
              <Menu />
              {/* <NavDropdown id="tools" title="Tools" menuVariant="dark" >
                <NavDropdown.Item eventKey="1">About Us</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="2">Contact</NavDropdown.Item>
              </NavDropdown> */}
            </Container>
            </div>
            </Nav>
       
    </div>
  )
}

export default Header;