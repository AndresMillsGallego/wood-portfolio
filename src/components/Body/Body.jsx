import React from "react";
import { Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

import SpiralStairs from "../../assets/SpiralStairs.jpg";
import WalnutShelf from "../../assets/WalnutShelf.jpg";
import HerringBone from "../../assets/HerringBone.jpg";

import TextBody from "../TextBody/TextBody";
import Divider from "../Divider/Divider";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./assets/Body.css";

const Body = () => {
  return (
    <div id="main-div">
      <h1>My Favorite Projects</h1>
      <Divider />
      <Row className="rows gy-4 gx-5">
        <Col xs={12} md={4} lg={4} className="first-col text-col columns">
          <TextBody />
        </Col>
        <Col xs={12} md={8} lg={8} className="columns">
          <LazyLoadImage
            className="main-page-images"
            src={HerringBone}
            width="100%"
            alt="Spiral Stairs Main Image"
            effect="blur"
          />
        </Col>
        <Col lg={12}>
          <Divider />
        </Col>
      </Row>
      <Row className="rows gy-4 gx-5">
        <Col
          xs={12}
          md={8}
          lg={{ span: 8, order: "first" }}
          className="first-col"
        >
          <LazyLoadImage
            className="main-page-images"
            src={SpiralStairs}
            width="100%"
            alt="Walnut Shelf Main Image"
            effect="blur"
          />
        </Col>
        <Col
          xs={{ span: 12, order: "first" }}
          md={4}
          lg={4}
          className="text-col"
        >
          <TextBody />
        </Col>
        <Col lg={{ span: 12, order: "last" }}>
          <Divider />
        </Col>
      </Row>
      <Row className="rows gy-4 gx-5">
        <Col xs={12} md={4} lg={4} className="first-col text-col">
          <TextBody />
        </Col>
        <Col xs={12} md={8} lg={8}>
          <LazyLoadImage
            className="main-page-images"
            src={WalnutShelf}
            width="100%"
            alt="Herringbone Main Image"
            effect="blur"
          />
        </Col>
      </Row>
      <Divider />
    </div>
  );
};

export default Body;
