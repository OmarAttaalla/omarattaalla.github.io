import React from "react";
import { motion } from "framer-motion";
import "./Projects.css"
import BoxContainer from "../components/BoxContainer.js";
import projects from "../data/projects.js";

export default function Projects() {
    return (
        <section id="Projects" className="section ProjectsSection">
            <motion.div 
                className="SectionHeader"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="SectionTitle">Projects</h2>
                <div className="SectionDivider" />
            </motion.div>

            <div className="ProjectsGrid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <BoxContainer data={project} />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
