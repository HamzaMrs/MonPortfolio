import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';

// Enregistrer les plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ScrollLinked = ({ children }) => {
  useEffect(() => {
    const panels = gsap.utils.toArray(".panel");
    let scrollTween;

    // Fonction pour gérer le scroll vers une section
    const goToSection = (i) => {
      scrollTween = gsap.to(window, {
        scrollTo: { y: i * window.innerHeight, autoKill: false },
        duration: 1,
        onComplete: () => (scrollTween = null),
        overwrite: true
      });
    };

    // Créer un trigger pour chaque section
    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top bottom",
        end: "+=199%",
        onToggle: (self) => {
          if (self.isActive && !scrollTween) {
            goToSection(i);
          }
        }
      });
    });

    // Assurer que le scroll "snap" fonctionne
    ScrollTrigger.create({
      start: 0,
      end: "max",
      snap: 1 / (panels.length - 1),
    });

  }, []);

  return (
    <div className="scroll-linked">
      {children}
    </div>
  );
};

export default ScrollLinked;
