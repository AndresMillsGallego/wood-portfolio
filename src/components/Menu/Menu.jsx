import React from "react";
import { useState } from "react";
import { Nav, Offcanvas, OffcanvasBody, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../Header/assets/Header.css"
import "./assets/Menu.css"

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShow = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div id="menu">
      <Button variant="warning" onClick={handleShow}>Menu</Button>
      <Offcanvas show={showMenu} onHide={handleShow} placement="end" scroll id="off-canvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <OffcanvasBody>
          <Nav className="flex-column">
            <Nav.Item>
              <Nav.Link as={Link} to="#" title="About Me"><p className="link-text">About Me</p></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="#" title="Contact"><p className="link-text">Contact</p></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="#" title="Connect"><p className="link-text">Connect!</p></Nav.Link>
            </Nav.Item>
          </Nav>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  )
}

export default Menu;