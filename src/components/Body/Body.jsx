import React from "react";
import { Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import SpiralStairs from "../../assets/SpiralStairs.jpg";
import Hutch from "../../assets/furniture/Hutch.jpg";
import HerringBone from "../../assets/HerringBone.jpg";
import CharacterWhiteOak from "../../assets/floors/CharacterWhiteOak.jpg";

import Divider from "../Divider/Divider";
import pageText from "./__data__/pageText";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./assets/Body.css";

const Body = () => {
  const { quote, author, intro } = pageText;
  return (
    <div id="main-div">
      <div id="main-page-quote">
        <q>{quote}</q>
        <p>{author}</p>
      </div>
      <div id="main-image-knot" className="lazyImg-main-div">
        <LazyLoadImage
          src={HerringBone}
          width="100%"
          alt="Hand Scraped White Oak"
          effect="blur"
        />
      </div>
      <Divider />
      <div id="intro-full-width">
        <div id="main-page-intro">
          <p>{intro}</p>
        </div>
      </div>
      <Divider />
      <div id="secondary-image-div">
        <Row className="rows gy-4 gx-5">
          <Col xs={12} sm={8} md={4} xl={4} className="columns">
            <h4 className="secondary-image-header">
              Beautiful Hardwood Floors
            </h4>
            <div className="lazyImg-secondary-div">
              <Nav.Link as={Link} to="/floors" title="Floors">
                <LazyLoadImage
                  className="main-page-images"
                  src={CharacterWhiteOak}
                  width="100%"
                  alt="Character Grade White Oak Floors"
                  effect="blur"
                />
              </Nav.Link>
            </div>
          </Col>
          <Col xs={12} sm={8} md={4} xl={4} className="columns">
            <h4 className="secondary-image-header">
              Majestic Sweeping Staircases
            </h4>
            <div className="lazyImg-secondary-div">
              <Nav.Link as={Link} to="/stairs" title="Stairs">
                <LazyLoadImage
                  className="main-page-images"
                  src={SpiralStairs}
                  width="100%"
                  alt="Walnut Shelf Main Image"
                  effect="blur"
                />
              </Nav.Link>
            </div>
          </Col>

          <Col xs={12} sm={8} md={4} xl={4} className="columns">
            <h4 className="secondary-image-header">Elegant Furniture Pieces</h4>
            <div className="lazyImg-secondary-div">
              <Nav.Link as={Link} to="/furniture" title="Furniture">
                <LazyLoadImage
                  className="main-page-images"
                  src={Hutch}
                  width="100%"
                  alt="Corner Hutch"
                  effect="blur"
                />
              </Nav.Link>
            </div>
          </Col>
        </Row>
      </div>
      <Divider />
    </div>
  );
};

export default Body;
