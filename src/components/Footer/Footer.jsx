import React from "react";
import { Nav, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Colombia from "../../assets/Colombia.png";
import "./assets/Footer.css";

const Footer = () => {
  return (
    <div id="footer-container">
      <div id="footer-name">
        <p>&copy; 2023</p>
        <p>Andres Mills Gallego</p>
        <img id="flag" src={Colombia} alt="Colombia" />
      </div>
    </div>
  );
};

export default Footer;
