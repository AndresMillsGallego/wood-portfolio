import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav, Row, Col } from "react-bootstrap";
import "./assets/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";

import Menu from "../Menu/Menu";

const Header = () => {
  const currentLocation = useLocation();
  const { pathname } = currentLocation;

  return (
    <div id="header-container">
      <Row xs={1} md={3} id="header-div" className="gy-3">
        <Col>
          <Nav.Item>
            <Nav.Link as={Link} to="/" title="Home">
              <div id="header-name">
                <FontAwesomeIcon icon={faHammer} id="hammer" />
                <div id="vertical-divider"></div>
                <div>
                  <h3 id="name">Andres Mills Gallego</h3>
                  <h3 id="job">Carpenter</h3>
                </div>
              </div>
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col>
          <div id="links">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                title="Home"
                id={pathname === "/" ? "current-path" : ""}
              >
                <p className="link-text">Home</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/floors"
                title="Floors"
                id={pathname === "/floors" ? "current-path" : ""}
              >
                <p className="link-text">Floors</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/stairs"
                title="Stairs"
                id={pathname === "/stairs" ? "current-path" : ""}
              >
                <p className="link-text">Stairs</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="furniture"
                title="Furniture"
                id={pathname === "/furniture" ? "current-path" : ""}
              >
                <p className="link-text">Furniture</p>
              </Nav.Link>
            </Nav.Item>
          </div>
        </Col>
        <Col id="menu-div">
          <div id="nav-dropdown">
            <Menu />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
