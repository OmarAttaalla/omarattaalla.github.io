import React from "react";
import { motion } from "framer-motion";
import "./Technologies.css"
import CppImage from '../assets/Cpp.png'
import PythonImage from '../assets/python.png'
import NodejsImage from '../assets/Nodejs.png'
import ExpressImage from '../assets/express.png'
import ReactImage from '../assets/React.png'
import LuaImage from '../assets/Lua.png'
import JsImage from '../assets/javascript.png'
import CssImage from '../assets/css.png'
import HtmlImage from '../assets/html.png'
import QtImage from '../assets/qt.png'
import ROS2Image from '../assets/ros-ros2.webp'
import UbuntuImage from '../assets/ubuntu_logo.png'
import NextJS from '../assets/next-js.svg'
import DjangoImage from '../assets/Django-Logo.png'
import aws from '../assets/aws.png'
import awsEC2 from '../assets/AWS-rc2.png'
import awsDynamo from '../assets/dynamo_db-image.svg'
import gcp from '../assets/gcp.webp'
import firebase from '../assets/Firebase.png'
import { useDarkMode } from "../context/DarkModeContext";

export default function Technologies() {
    const { darkMode } = useDarkMode();

    const techStack = [
        { name: "C++", src: CppImage },
        { name: "Python", src: PythonImage },
        { name: "JavaScript", src: JsImage },
        { name: "React", src: ReactImage },
        { name: "Next.js", src: NextJS, invert: true },
        { name: "Node.js", src: NodejsImage },
        { name: "Express", src: ExpressImage },
        { name: "Django", src: DjangoImage },
        { name: "ROS2", src: ROS2Image, invert: true },
        { name: "Ubuntu", src: UbuntuImage },
        { name: "Qt", src: QtImage },
        { name: "AWS", src: aws },
        { name: "EC2", src: awsEC2 },
        { name: "DynamoDB", src: awsDynamo },
        { name: "GCP", src: gcp },
        { name: "Firebase", src: firebase },
        { name: "Lua", src: LuaImage },
        { name: "HTML", src: HtmlImage },
        { name: "CSS", src: CssImage },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <section id="Technologies" className="section TechnologiesSection">
            <motion.div 
                className="SectionHeader"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="SectionTitle">Technologies</h2>
                <div className="SectionDivider" />
            </motion.div>

            <motion.div 
                className="TechGrid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {techStack.map((tech, index) => (
                    <motion.div 
                        key={index} 
                        className="TechCard"
                        variants={itemVariants}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <img 
                            className={`TechIcon ${tech.invert && darkMode ? "inverted" : ""}`}
                            src={tech.src} 
                            alt={tech.name} 
                        />
                        <span className="TechName">{tech.name}</span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
