import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon, Menu, X } from "lucide-react"
import "./Header.css"
import { useDarkMode } from "../context/DarkModeContext";

export default function Header() {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#About" },
        { name: "Education", href: "#Education" },
        { name: "Experience", href: "#Experience" },
        { name: "Projects", href: "#Projects" },
        { name: "Contact", href: "#Contact" },
    ];

    return (
        <motion.header 
            className={`MainHeader ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="HeaderContainer">
                <div className="Logo">
                    <a href="/">OA<span>.</span></a>
                </div>

                <nav className="desktop-nav">
                    {navLinks.map((link) => (
                        <a key={link.name} className="NavItem" href={link.href}>
                            {link.name}
                        </a>
                    ))}
                    <button className="ThemeToggle" onClick={toggleDarkMode} aria-label="Toggle theme">
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </nav>

                <div className="mobile-controls">
                    <button className="ThemeToggle" onClick={toggleDarkMode} aria-label="Toggle theme">
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        className="hamburger"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.nav 
                        className="mobile-nav"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                className="NavItem" 
                                href={link.href} 
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
