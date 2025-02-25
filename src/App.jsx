import React, { useState, useEffect } from "react";
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preload from "./components/Preload";
import Starfield from 'react-starfield';
import ScrollBar from './effect/ScrollBar';
import ScrollLinked from "./effect/ScrollLinked";
import './styles/main.scss';

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const fadeTop = document.querySelector('.fade-effect-top');
      const fadeBottom = document.querySelector('.fade-effect-bottom');

      // Effet de fondu en haut
      if (scrollPosition > 0) {
        fadeTop.style.opacity = Math.min(scrollPosition / 100, 1);
      } else {
        fadeTop.style.opacity = 0;
      }

      // Effet de fondu en bas
      if (scrollPosition < documentHeight - windowHeight) {
        const bottomScrollPosition = documentHeight - windowHeight - scrollPosition;
        fadeBottom.style.opacity = Math.min(bottomScrollPosition / 100, 1);
      } else {
        fadeBottom.style.opacity = 0;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Preload load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Starfield
          style={{
            position: "absolute",
            width: "100%",
            height: "100%"
          }}
          numParticles={800}
          particleSpeed={0}
          dx={0.000000001}
          dy={0.000000001}
        />
        <div className="fade-effect-top"></div>
        <div className="fade-effect-bottom"></div>
        <Header />
        <ScrollBar>
        <ScrollLinked>
            <Hero/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
        </ScrollLinked>
        </ScrollBar>
      </div>
    </>
  );
}

export default App;
