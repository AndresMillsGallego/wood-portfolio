import React from "react";

import { Card, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import MirrorMe from "../../assets/MirrorMe.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

import "./assets/ConnectCard.css";

const ConnectCard = () => {
  return (
    <div id="connect-div">
      <Card bg="dark" text="white">
        <Card.Img
          id="andres"
          as={LazyLoadImage}
          src={MirrorMe}
          effect="blur"
          alt="Andres Mills"
        />
        <Card.Text>Andres</Card.Text>
        <div id="connect-divider"></div>
        <Card.Text>Carpenter / Software Engineer / Builder</Card.Text>
        <Card.Body>
          <Nav fill>
            <Nav.Item className="contact-links">
              <Nav.Link
                href="https://github.com/AndresMillsGallego"
                title="My Github"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="contact-links">
              <Nav.Link
                href="https://www.linkedin.com/in/andres-mills-gallego/"
                title="My LinkedIn"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="contact-links">
              <Nav.Link
                href="https://www.instagram.com/geneseewoodworking/"
                title="My Instagram"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="contact-links">
              <Nav.Link
                href="mailto:andresmillswork@gmail.com"
                title="Send Email"
                target="_blank"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ConnectCard;
