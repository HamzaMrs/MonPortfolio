import React, { useState, useEffect } from 'react';
import './Header.scss';
import { AiOutlineSetting, AiOutlineUser, AiOutlineFundProjectionScreen, AiFillStar } from 'react-icons/ai';
import { CgFileDocument, CgGitFork } from 'react-icons/cg';
import CV from '../assets/CV-DevWeb-2.jpeg';

function Header() {
    const [navColour, updateNavbar] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        function scrollHandler() {
            updateNavbar(window.scrollY >= 20);
        }

        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    // Fonction pour un scroll fluide
    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        setMenuOpen(false);
    };

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className={`header ${navColour || menuOpen ? 'sticky' : ''}`}>
            <div className="header-container">
                <h1 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>
                    Mon Portfolio
                </h1>

                <div className={menuOpen ? 'hamburger open' : 'hamburger'} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
                        <AiOutlineUser /> À propos
                    </a>
                    <a href="#projects" onClick={(e) => scrollToSection(e, "projects")}>
                        <AiOutlineFundProjectionScreen /> Projets
                    </a>
                    <a href="#skills" onClick={(e) => scrollToSection(e, "skills")}>
                        <AiOutlineSetting /> Compétences
                    </a>
                    <a href={CV} target="_blank" rel="noopener noreferrer">
                        <CgFileDocument /> CV
                    </a>
                    <a href="https://github.com/HamzaMrs/MonPortfolio" target="_blank" rel="noreferrer" className="fork-btn">
                        <CgGitFork style={{ fontSize: '1.2em' }} /> <AiFillStar style={{ fontSize: '1.1em' }} />
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
