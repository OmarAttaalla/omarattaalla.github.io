import React from "react";
import { motion } from "framer-motion";
import "./Education.css"
import education from "../data/education.js";
import BoxContainer from "../components/BoxContainer.js";

export default function Education() {
    return (
        <section id="Education" className="section EducationSection">
            <motion.div 
                className="SectionHeader"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="SectionTitle">Education</h2>
                <div className="SectionDivider" />
            </motion.div>

            <div className="EducationGrid">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <BoxContainer data={edu} />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
