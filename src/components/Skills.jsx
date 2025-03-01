import React from "react";
import './Skills.scss';

function Skills() {
  return (
<section class="skills" id='skills'>
  <h1>Mes <strong style={{ color: "#5feef8" }}>Compétences</strong></h1>
  <div class="skills__container">
    <div class="skills__section">
      <h2>Langages de programmation</h2>
      <ul>
        <li>
          <i class="bx bxl-python skills__icon"></i> Python
          <span class="skill-level">Intermédiaire</span>
        </li>
        <li>
          <i class="bx bxl-c-plus-plus skills__icon"></i> C
          <span class="skill-level">Intermédiaire</span>
        </li>
        <li>
          <i class="bx bxl-c-plus-plus skills__icon"></i> C#
          <span class="skill-level">Connaissances des bases</span>
        </li>
        <li>
          <i class="bx bxl-java skills__icon"></i> Java
          <span class="skill-level">Connaissances des bases</span>
        </li>
        <li>
          <i class="bx bxl-html5 skills__icon"></i> HTML
          <span class="skill-level">Avancé</span>
        </li>
        <li>
          <i class="bx bxl-css3 skills__icon"></i> CSS
          <span class="skill-level">Avancé</span>
        </li>
        <li>
          <i class="bx bxl-javascript skills__icon"></i> JavaScript
          <span class="skill-level">Intermédiaire</span>
        </li>
        <li>
          <i class="bx bx-code-alt skills__icon"></i> SQL
          <span class="skill-level">Intermédiaire</span>
        </li>
        <li>
          <i class="bx bx-code-alt skills__icon"></i> OCaml
          <span class="skill-level">Connaissances des bases</span>
        </li>
        <li>
          <i class="bx bxl-react skills__icon"></i> React
          <span class="skill-level">Intermédiaire</span>
        </li>
        <li>
          <i class="fa-solid fa-cube skills__icon"></i> Shell/Bash
          <span class="skill-level">Connaissances des bases</span>
        </li>
        <li>
          <i class="bx bxl-php skills__icon"></i> PHP
          <span class="skill-level">Connaissances des bases</span>
        </li>
        <li>
          <i class="bx bxl-typescript skills__icon"></i> TypeScript
          <span class="skill-level">Connaissances des bases</span>
        </li>
        <li>
          <i class="bx bxl-nodejs skills__icon"></i> Node.js
          <span class="skill-level">Intermédiaire</span>
        </li>
      </ul>
    </div>

    <div class="skills__section">
      <h2>Outils et logiciels</h2>
      <ul>
        <li>
          <i class="bx bxl-figma skills__icon"></i> Figma
          <span class="skill-level">Connaissances des bases</span>
        </li>
        <li>
          <i class="fa-brands fa-cuttlefish skills__icon"></i> Canva
          <span class="skill-level">Connaissances des bases</span>
        </li>
        <li>
          <i class="bx bxl-visual-studio skills__icon"></i> Visual Studio Code
          <span class="skill-level">Avancé</span>
        </li>
        <li>
          <i class="bx bxs-down-arrow skills__icon"></i> Vite
          <span class="skill-level">Intermédiaire</span>
        </li>
        <li>
          <i class="bx bxl-github skills__icon"></i> Git/GitHub
          <span class="skill-level">Avancé</span>
        </li>
        <li>
          <i class="bx bxs-plane-take-off skills__icon"></i> Postman
          <span class="skill-level">Intermédiaire</span>
        </li>
        <li>
          <i class="bx bxl-mongodb skills__icon"></i> Compass
          <span class="skill-level">Intermédiaire</span>
        </li>
        <li>
          <i class="bx bxl-mongodb skills__icon"></i> MongoDB
          <span class="skill-level">Intermédiaire</span>
        </li>
        <li>
          <i class="bx bxs-category skills__icon"></i> Notion
          <span class="skill-level">Intermédiaire</span>
        </li>
        <li>
          <i class="fa-brands fa-jira skills__icon"></i> Jira
          <span class="skill-level">Intermédiaire</span>
        </li>
        <li>
          <i class="bx bxl-microsoft skills__icon"></i> Suite Microsoft Office
          <span class="skill-level">Connaissances des bases</span>
        </li>
        <li>
          <i class="bx bxl-google skills__icon"></i> Google Workspace
          <span class="skill-level">Avancé</span>
        </li>
      </ul>
    </div>
  </div>
</section>

  );
}

export default Skills;
