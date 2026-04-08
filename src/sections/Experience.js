import React from "react";
import { motion } from "framer-motion";
import "./Experience.css"
import experience from "../data/experience.js";
import BoxContainer from "../components/BoxContainer.js";

export default function Experience() {
    return (
        <section id="Experience" className="section ExperienceSection">
            <motion.div 
                className="SectionHeader"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="SectionTitle">Experience</h2>
                <div className="SectionDivider" />
            </motion.div>

            <div className="ExperienceGrid">
                {experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <BoxContainer data={exp} />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
