import React, { useEffect, useState } from 'react';
import './TypewriterEffect.css';

const TypewriterEffect = () => {
  const texts = ["Making it in the digital world one step at a time...       ",
    "Lay down your pieces and let's begin object creation...      ",
    'world.execute(me);...      ',
    'Symmetry is overrated me thinks...      ',
    "What's my endgame, there came a zero?...      "];
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentText((prevText) => {
        const currentLength = prevText.length;
        const targetText = texts[currentIndex];

        if (currentLength < targetText.length) {
          return targetText.slice(0, currentLength + 1);
        } else if (currentLength === targetText.length) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
          return '';
        } else {
          return prevText;
        }
      });
    }, 200);

    return () => clearTimeout(timeout);
  }, [currentIndex, currentText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);


  return (
    
    <h3 class="text-teal-400 text-5xl leading-relaxed">{currentText}
    <span className={`cursor ${showCursor ? 'blink' : ''}`} />
    </h3>
  );
};

export default TypewriterEffect;
