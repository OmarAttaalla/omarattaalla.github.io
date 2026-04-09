import React from "react";
import { motion } from "framer-motion";
import PersonImage from '../assets/person2.png';
import "./Introduction.css";

export default function Introduction() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="About" className="HeroSection">
            <motion.div 
                className="HeroContainer"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="HeroContent">
                    <motion.p variants={itemVariants} className="HeroGreeting">
                        Hello, I'm
                    </motion.p>
                    <motion.h1 variants={itemVariants} className="IntroTitle">
                        Omar Attaalla
                    </motion.h1>
                    <motion.div variants={itemVariants} className="Divider" />
                    <motion.h2 variants={itemVariants} className="SubInfo">
                        Programmer Analyst @ Boeing, MSCS, BS CSE @ UCI
                    </motion.h2>
                    <motion.p variants={itemVariants} className="HeroDescription">
                        Passionate about software development, robotics, machine learning, and computer vision.
                    </motion.p>
                    <motion.div variants={itemVariants} className="HeroCTA">
                        <a href="#Projects" className="PrimaryButton">View Projects</a>
                        <a href="#Contact" className="SecondaryButton">Get in Touch</a>
                    </motion.div>
                </div>
                
                <motion.div 
                    className="PersonImageContainer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="ImageFrame">
                        <img className="PersonImage" src={PersonImage} alt="Omar Attaalla" />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}
