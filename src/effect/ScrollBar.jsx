"use client";

import { motion, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function ScrollBar({ children }) {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"], // Change "end start" -> "end end"
    });

    const [topPosition, setTopPosition] = useState(80); // Valeur par défaut pour les écrans de bureau

    useEffect(() => {
        // Fonction qui ajuste la position du `top` en fonction de la taille de l'écran
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setTopPosition(70); // Pour les écrans <= 768px
            } 
            else if (window.innerWidth <= 930 && window.innerHeight > 768) {
                setTopPosition(110);
            }
            else {
                setTopPosition(80); // Par défaut, pour les écrans plus grands
            }
        };

        // Ajouter l'événement de redimensionnement
        window.addEventListener('resize', handleResize);

        // Initialiser la fonction lors du premier rendu
        handleResize();

        // Nettoyer l'événement lors du démontage du composant
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div ref={targetRef} style={{ position: "relative", overflow: "hidden" }}>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: `${topPosition}px`,  // Dynamique, basé sur la taille de l'écran
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#5feef8",
                    boxShadow: "0 0 15px #5feef8",
                    transition: "box-shadow 0.3s ease-in-out",
                    zIndex: 1000,
                }}
            />
            {children}
        </div>
    );
}
