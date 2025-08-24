import React, { useEffect, useRef } from "react";
import "./AnimationSection.css"
import lottie from 'lottie-web'

export default function AnimationSection() {
    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../animations/96971-code-blue.json')
        })
    })

    return (
        <div className="SubSection">
            <div className="container" ref={container}></div>
        </div>
    )
}