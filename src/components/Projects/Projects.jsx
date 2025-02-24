import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectsCards";
import booki from "../../assets/booki.png";
import ninac from "../../assets/NinaCard.png";
import './Projects.scss';

function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      <Container>
        <h1 className="project-heading">
          Mes <strong style={{ color: "#cd5ff8" }}>Projets récents</strong>
        </h1>
        <p style={{ color: "white" }}>
        Voici un aperçu de quelques-uns de mes derniers projets réalisés.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={booki}
              isBlog={false}
              title="Booki"
              description="Intégration de la page d’accueil d’un site de réservation d’hébergements et d’activités, réalisé en HTML et CSS. Ce projet consistait à reproduire les maquettes pour les versions desktop, tablette et mobile, tout en respectant les spécifications techniques et le design fourni par l’équipe. "
              ghLink="https://github.com/HamzaMrs/Booki"
              demoLink="https://hamzamrs.github.io/Booki/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ninac}
              isBlog={false}
              title="Nina Carducci Photographe"
              description="Optimisation du référencement, des performances et de l’accessibilité du site de Nina Carducci. J’ai utilisé des outils comme Lighthouse et Wave pour identifier les problèmes, puis appliqué des améliorations sur la vitesse de chargement, la structure du code et le SEO, avec un impact positif sur le référencement."
              ghLink="https://github.com/HamzaMrs/NinaCarducci"
              demoLink="https://hamzamrs.github.io/NinaCarducci/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;