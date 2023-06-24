import React, { useEffect, useState } from 'react';
import './TypewriterEffect.css';

const TypewriterEffect = () => {
  const texts = ["Making it in the digital world one step at a time...       ",
    "Lay down your pieces and let's begin object creation...      ",
    "world.execute(me);...      ",
    "Symmetry's overrated me thinks...      ",
    "What's my endgame, there came a zero?...      ",
    "It took me 10 years to find the answer to something, I forgot about it in 2 seconds...      ",
    "Working Harder does make me Better...      ",
    "Doing it Faster does make me Stronger...      ",
    "I'd wear a mask of my own face...      ",
    "Everything works out right in the end, the sun will marry the moon...      ",
    "It'll be fine...      ",
    "Sit back mellow again and have a nice afternoon...      ",
    "Sometimes, all you need is sometinhg simple...      ",
    "We are Happy, We are Hype, We are Here, We are H...      "];
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
    
    <h3 class="text-teal-400 sm:text-3xl lg:text-5xl leading-relaxed">{currentText}
    <span class={`cursor ${showCursor ? 'blink' : ''}`} />
    </h3>
  );
};

export default TypewriterEffect;
