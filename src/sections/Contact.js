import React from "react";
import { motion } from "framer-motion";
import { Mail, ExternalLink, ArrowUp } from "lucide-react";
import GithubImage from "../assets/github.png";
import "./Contact.css"
import { useDarkMode } from "../context/DarkModeContext";

export default function Contact() {
    const { darkMode } = useDarkMode();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section id="Contact" className="section ContactSection">
            <motion.div 
                className="ContactContainer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="SectionTitle">Contact</h2>
                <div className="SectionDivider" />

                <div className="ContactLinks">
                    <a href="mailto:omarattaalla@yahoo.com" className="ContactLink" aria-label="Email">
                        <Mail size={24} />
                        <span>Email</span>
                    </a>
                    <a href="https://github.com/OmarAttaalla" target="_blank" rel="noopener noreferrer" className="ContactLink" aria-label="Github">
                        <img 
                            src={GithubImage} 
                            alt="GitHub" 
                            style={{ 
                                width: '24px', 
                                height: '24px', 
                                filter: darkMode ? 'invert(1)' : 'none' 
                            }} 
                        />
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/omar-attaalla-8a1502211/" target="_blank" rel="noopener noreferrer" className="ContactLink" aria-label="LinkedIn">
                        <ExternalLink size={24} />
                        <span>LinkedIn</span>
                    </a>
                </div>

                <footer className="Footer">
                    <p>© {new Date().getFullYear()} Omar Attaalla. Built with React, JavaScript, and CSS.</p>
                    <button className="ScrollToTop" onClick={scrollToTop} aria-label="Scroll to top">
                        <ArrowUp size={20} />
                    </button>
                </footer>
            </motion.div>
        </section>
    )
}
