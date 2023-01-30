import React from "react";
import { Nav, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./assets/Footer.css";

const Footer = () => {
  return (
    <div id="footer-container">
      <Row id="footer-row">
        <Col xs={12} md={6} lg={6}>
          <p>&copy; 2023 Andres Mills Gallego</p>
        </Col>
        <Col xs={12} md={6} lg={6} id="socials-col">
          <div id="socials">
            <Nav.Item>
              <Nav.Link
                href="https://github.com/AndresMillsGallego"
                title="My Github"
              >
                <FontAwesomeIcon icon={faGithub} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://www.linkedin.com/in/andres-mills-gallego/"
                title="My LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Nav.Link>
            </Nav.Item>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
