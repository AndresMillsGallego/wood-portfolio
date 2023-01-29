import React from "react";
import { Link } from "react-router-dom";
import { Nav, Container, Row, Col } from "react-bootstrap";
import "./assets/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";

import Menu from "../Menu/Menu";

const Header = () => {
  return (
    <div id="header-container">
      <Nav>
        <Row xs={1} md={"auto"} lg={"auto"} xl={"auto"} id="header-div">
          <Col>
            <Container id="logo-div">
              <Nav.Item>
                <Nav.Link as={Link} to="/">
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
            </Container>
          </Col>
          <Col>
            <Container id="links">
              <Nav.Item>
                <Nav.Link as={Link} to="/" title="Home">
                  <p className="link-text">Home</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/floors" title="Floors">
                  <p className="link-text">Floors</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/stairs" title="Stairs">
                  <p className="link-text">Stairs</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="furniture" title="Furniture">
                  <p className="link-text">Furniture</p>
                </Nav.Link>
              </Nav.Item>
            </Container>
          </Col>
          <Col>
            <Container id="nav-dropdown">
              <Menu />
            </Container>
          </Col>
        </Row>
      </Nav>
    </div>
  );
};

export default Header;
