"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function ScrollBar({ children }) {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"], // Change "end start" -> "end end"
    });

    return (
        <div ref={targetRef} style={{ position: "relative", overflow: "hidden" }}>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: "80px",
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#be6adf",
                    boxShadow: "0 0 15px rgba(190, 106, 223, 0.8)", 
                    transition: "box-shadow 0.3s ease-in-out", 
                    zIndex: 1000,
                }}
            />
            {children}
        </div>
    );
}
