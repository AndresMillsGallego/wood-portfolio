import React from "react";
import { useState, useEffect } from "react";
import { Nav, Offcanvas, OffcanvasBody, Fade } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import ConnectCard from "../ConnectCard/ConnectCard";

import "../Header/assets/Header.css";
import "./assets/Menu.css";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleShowCard = () => {
    setShowCard(!showCard);
  };

  useEffect(() => {
    if (!showMenu) {
      setShowCard(false);
    }
  }, [showMenu]);

  return (
    <div id="menu">
      <FontAwesomeIcon
        id="menu-button"
        onClick={handleShowMenu}
        icon={faBars}
      />
      <Offcanvas
        show={showMenu}
        onHide={handleShowMenu}
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
                onClick={handleShowMenu}
              >
                <p className="menu-links">About Me</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} onClick={handleShowCard} title="Connect">
                <p className="menu-links">Connect!</p>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {showCard ? <ConnectCard /> : null}
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};

export default Menu;
