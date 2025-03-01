import React, { useEffect, useState } from "react";
import "./Hero.scss";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { FaChevronDown } from "react-icons/fa";

function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.3) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`hero-section ${scrolled ? "scrolled" : ""}`} id="home">
      <Container fluid>
        <Row className="align-items-center">
          {/* Colonne pour le texte */}
          <Col md={7} className="hero-text">
            <h1 className="hero-heading">
              Salut !
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
        </Row>
      </Container>

      {/* Flèche animée */}
      <div className="scroll-down">
        <FaChevronDown />
      </div>
    </section>
  );
}

export default Hero;
