import React from "react";
import './Hero.scss';
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../assets/dessin-homme.png";
import Typewriter from "typewriter-effect";

function Hero() {
    return (
        <section className="hero-section" id="home" >
          <Container fluid>
            <Row className="align-items-center">
              {/* Colonne pour le texte */}
              <Col md={7} className="hero-text">
                <h1 className="hero-heading">
                  Salut !{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
                <h1 className="hero-name">
                  JE SUIS <strong className="highlighted-name">MARS HAMZA</strong>
                </h1>
                <div className="typewriter-text">
                  <Typewriter
                    options={{
                      strings: ["DÉVELOPPEUR WEB"],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      deleteSpeed: 50
                    }}
                  />
                </div>
              </Col>

              {/* Colonne pour l'image */}
              <Col md={5} className="hero-image">
                <img
                  src={homeLogo}
                  alt="Mars Hamza"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
          </Container>
        </section>
    );
}

export default Hero;