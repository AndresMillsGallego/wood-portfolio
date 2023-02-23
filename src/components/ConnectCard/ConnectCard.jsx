import React from "react";

import { Card, Tabs, Tab, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import MirrorMe from "../../assets/MirrorMe.jpg";
import PlutoAndMe from "../../assets/PlutoAndMe.jpg";

import "./assets/ConnectCard.css";

const ConnectCard = () => {
  return (
    <div id="connect-div">
      <Card bg="dark" text="white">
        <Card.Body>
          <Tabs justify>
            <Tab eventKey="github" title="Github">
              <div className="tab-div">
                <h4>Check out my Github!</h4>
                <Nav.Item>
                  <Nav.Link
                    href="https://github.com/AndresMillsGallego"
                    title="My Github"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Nav.Link>
                </Nav.Item>
              </div>
              <img src={MirrorMe} alt="Andres" />
            </Tab>
            <Tab eventKey="linkedIn" title="LinkedIn">
              <div className="tab-div">
                <h4>Check out my LinkedIn!</h4>
                <Nav.Item>
                  <Nav.Link
                    href="https://www.linkedin.com/in/andres-mills-gallego/"
                    title="My LinkedIn"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Nav.Link>
                </Nav.Item>
              </div>
              <img src={PlutoAndMe} alt="Andres" />
            </Tab>
            <Tab eventKey="email" title="Email">
              Email
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ConnectCard;
