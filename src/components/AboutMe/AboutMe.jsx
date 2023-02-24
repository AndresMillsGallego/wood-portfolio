import React from "react";
import { useState, useEffect } from "react";
import { Image, Row, Col, Fade } from "react-bootstrap";
import Me from "../../assets/Me.jpg";

import "./assets/AboutMe.css";

const AboutMe = () => {
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
                <p id="bio-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Alias at illo tenetur nihil soluta unde assumenda totam ipsam
                  quos molestias suscipit, cumque debitis aut eaque esse eius,
                  optio molestiae? Ab! Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Eos quod id libero, suscipit atque sunt
                  dolorum, error ea voluptatum, nesciunt tempore! Deleniti velit
                  ea, veniam minima ex cumque labore optio? Lorem ipsum dolor
                  sit, amet consectetur adipisicing elit. Amet voluptatibus
                  dolorum enim ea distinctio sed quidem nesciunt commodi, sequi,
                  ex tenetur numquam veniam maiores laboriosam eos impedit
                  cumque quis obcaecati?
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutMe;
