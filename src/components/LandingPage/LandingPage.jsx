import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

import { TypeAnimation } from "react-type-animation";

const LandingPage = () => {
  const [showH1, setShowH1] = useState(true);
  const [showH2, setShowH2] = useState(false);
  const [showButton, setShowButton] = useState(false);

  return (
    <div id="landing-div">
      {showH1 ? (
        <TypeAnimation
          sequence={[
            1000,
            "Hello,",
            1000,
            "Hello, My name is Andres Mills Gallego.",
            1000,
            () => {
              setShowH2(true);
            },
          ]}
          speed={50}
          wrapper="h1"
          repeat={0}
        />
      ) : null}
      {showH2 ? (
        <TypeAnimation
          sequence={[
            () => {
              setShowH1(false);
            },
            1000,
            "I am a Software Develo-...",
            1000,
            "I am a Software Engin-...",
            1000,
            "I am a Carpent-...",
            1000,
            "I....",
            1000,
            "I just love to build things ⚒️",
            1000,
            () => {
              setShowButton(true);
            },
          ]}
          speed={50}
          wrapper="h1"
          repeat={0}
        />
      ) : null}
      {showButton ? <Button>Enter</Button> : null}
    </div>
  );
};

export default LandingPage;
