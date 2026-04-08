import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./AnimationSection.css"
import lottie from 'lottie-web'

export default function AnimationSection() {
    const container = useRef(null)

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../animations/96971-code-blue.json')
        });
        return () => anim.destroy();
    }, []);

    return (
        <section className="AnimationSection">
            <motion.div 
                className="LottieContainer" 
                ref={container}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />
        </section>
    )
}