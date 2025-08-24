import React, { useState, useRef, useEffect } from 'react';
import './BoxContainer.css';
import { useDarkMode } from "../context/DarkModeContext";

export default function BoxContainer({ data }) {
  const { title, imageSrc, invertImage, MainComponent, SubComponent } = data;

  const { darkMode } = useDarkMode();

  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleExpand = () => {
    setIsExpanded(prev => !prev);
  };

  useEffect(() => {
    if (isExpanded && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isExpanded]);

  return (
    <div className={`BoxContainer ${SubComponent && !isExpanded ? 'bottom-padding-zero' : ''}`}>

        {imageSrc && <img className={`boxItem projectImage ${invertImage && darkMode ? 'inverted' : ''}`} src={imageSrc} alt={title} />}

        <div className="boxItem InfoContainer">
            <MainComponent />
        </div>

      {SubComponent && (
        <>
          <button className="arrow-button" onClick={toggleExpand}>
            {isExpanded ? '▲' : '▼'}
          </button>

          <div
            className="content-box"
            style={{
              maxHeight: isExpanded ? `${contentHeight}px` : '0px',
            }}
          >
            <div ref={contentRef}>
              <SubComponent />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
