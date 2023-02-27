import React from "react";
import { useState, useEffect } from "react";
import { Image, Row, Col, Fade } from "react-bootstrap";
import Me from "../../assets/Me.jpg";
import bioText from "./__data__/bio";

import "./assets/AboutMe.css";

const AboutMe = () => {
  const { firstParagraph, secondParagraph } = bioText;

  const [showMe, setShowMe] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showBuild, setShowBuild] = useState(false);
  const [showBio, setShowBio] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMe(true);
    }, 500);
    setTimeout(() => {
      setShowName(true);
    }, 2000);

    setTimeout(() => {
      setShowBuild(true);
    }, 3500);

    setTimeout(() => {
      setShowBio(true);
    }, 5000);
  }, []);

  return (
    <div className="routes">
      <div id="aboutMe-div">
        <Row xs={1} sm={1} md={2}>
          <Col>
            <Fade in={showMe}>
              <Image id="me" src={Me} alt="Andres Bio" roundedCircle />
            </Fade>
          </Col>
          <Col>
            <Fade in={showName}>
              <h1 id="bio-name">Hi, I'm Andres</h1>
            </Fade>
            <Fade in={showBuild}>
              <h1 id="bio-build">I love to build things ⚒️</h1>
            </Fade>
            <Fade in={showBio}>
              <div id="bio-div">
                <div id="h3-bio">
                  <h3>Bio</h3>
                </div>
                <p className="bio-paragraph">{firstParagraph}</p>
                <p className="bio-paragraph">{secondParagraph}</p>
              </div>
            </Fade>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutMe;
