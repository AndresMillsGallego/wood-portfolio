import React from "react";
import { useState } from "react";
import { Nav, Offcanvas, OffcanvasBody, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "../Header/assets/Header.css";
import "./assets/Menu.css";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShow = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div id="menu">
      <FontAwesomeIcon id="menu-button" onClick={handleShow} icon={faBars} />
      <Offcanvas
        show={showMenu}
        onHide={handleShow}
        placement="end"
        scroll
        id="off-canvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="menu-title">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <OffcanvasBody>
          <Nav className="flex-column">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                title="About Me"
                onClick={handleShow}
              >
                <p className="menu-links">About Me</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="#" title="Contact">
                <p className="menu-links">Contact</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="#" title="Connect">
                <p className="menu-links">Connect!</p>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};

export default Menu;
