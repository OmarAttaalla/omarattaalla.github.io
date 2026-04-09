import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './BoxContainer.css';
import { useDarkMode } from "../context/DarkModeContext";

export default function BoxContainer({ data }) {
  const { title, imageSrc, invertImage, MainComponent, SubComponent } = data;
  const { darkMode } = useDarkMode();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(prev => !prev);
  };

  const isPaper = imageSrc && (imageSrc.toLowerCase().includes('pdf') || imageSrc.toLowerCase().includes('matrices') || imageSrc.toLowerCase().includes('astar') || imageSrc.toLowerCase().includes('chains') || imageSrc.toLowerCase().includes('salesman') || imageSrc.toLowerCase().includes('rflow'));

  return (
    <motion.div 
      className="BoxContainer"
    >
        {imageSrc && (
          <div className={`ImageWrapper ${isPaper ? 'paper-aspect' : ''}`}>
            <img 
              className={`boxItem projectImage ${invertImage && darkMode ? 'inverted' : ''}`} 
              src={imageSrc} 
              alt={title} 
            />
          </div>
        )}

        <div className="InfoContainer">
            <MainComponent />
            
            {SubComponent && (
              <>
                <button className="arrow-button" onClick={toggleExpand}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {isExpanded ? 'Show Less' : 'Learn More'}
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </span>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      className="content-box"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <div style={{ paddingTop: '10px' }}>
                        <SubComponent />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
        </div>
    </motion.div>
  );
}
