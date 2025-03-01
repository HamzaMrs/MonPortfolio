import React from "react";
import "./About.scss";

function About() {
    return (
        <section id="about" className="about">
            <h2>À propos de moi</h2>
            <div className="about-content">
                <p>
                    Passionné par le développement web, je suis actuellement en formation pour approfondir mes compétences 
                    et me spécialiser dans ce domaine. Après un baccalauréat général avec une spécialisation en Mathématiques 
                    et en Numérique et Sciences Informatiques, j’ai poursuivi mes études avec un bac+2 en Informatique à 
                    l’université Toulouse III - Paul Sabatier.
                </p>
                <p>
                    Grâce à ce parcours, j’ai acquis une solide base en programmation avec divers langages tels que Python, 
                    HTML-CSS, C, Java, JavaScript et autres, ainsi qu’une bonne compréhension des principes du développement logiciel. Aujourd’hui, 
                    je me consacre pleinement au développement web et affine mes compétences en front-end et back-end 
                    à travers mes projets.
                </p>
                <p>
                    Mon objectif est de poursuivre en bachelor « Développement Web » en alternance afin de gagner en expérience 
                    professionnelle et de perfectionner mes compétences dans un environnement concret.
                </p>
            </div>
        </section>
    );
}

export default About;
