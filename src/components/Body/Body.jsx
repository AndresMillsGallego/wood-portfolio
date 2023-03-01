import React from "react";
import { Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import SpiralStairs from "../../assets/SpiralStairs.jpg";
import WalnutShelf from "../../assets/WalnutShelf.jpg";
import HerringBone from "../../assets/HerringBone.jpg";
import FirFloors from "../../assets/floors/FirFloors.jpg";

import Divider from "../Divider/Divider";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./assets/Body.css";

const Body = () => {
  return (
    <div id="main-div">
      <div id="main-page-quote">
        <q>
          The whole difference between construction and creation is exactly
          this: That a thing constructed can only be loved after it is
          constructed, but a thing created is loved before it exists.
        </q>
        <p>- Charles Dickens</p>
      </div>
      <div id="main-image-knot" className="lazyImg-main-div">
        <LazyLoadImage
          src={HerringBone}
          width="100%"
          alt="Spiral Stairs Main Image"
          effect="blur"
        />
      </div>
      <Divider />
      <div id="intro-full-width">
        <div id="main-page-intro">
          <p>
            This page exists to showcase a love and appreciation for art,
            creativity, and the unmatched satisfaction that comes from seeing
            something created from nothing. I have always loved to learn and to
            work with my hands, wether it's playing music, working with wood, or
            building something new with code. These pages contain a collection
            of some of my favorite projects that I have been able to work on
            over the years, including one of my most recent projects...this very
            web application.
          </p>
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
                  src={FirFloors}
                  width="100%"
                  alt="Old Fir Floors"
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

          <Col
            xs={12}
            sm={8}
            md={4}
            xl={4}
            className="columns"
            id="last-image-col"
          >
            <h4 className="secondary-image-header">Elegant Furniture Pieces</h4>
            <div id="last-image-div" className="lazyImg-secondary-div">
              <Nav.Link as={Link} to="/furniture" title="Furniture">
                <LazyLoadImage
                  className="main-page-images"
                  src={WalnutShelf}
                  width="100%"
                  alt="Herringbone Main Image"
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
