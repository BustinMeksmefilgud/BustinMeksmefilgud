import React, { useEffect, useState } from 'react';
import './TypewriterEffect.css';

const TypewriterEffect = () => {
  const texts = ["Making it in the digital world one step at a time...                                                    ",
    "world.execute(me);...                                                    ",
    "Symmetry's overrated me thinks...                                                    ",
    "The worst of times is when you have to force your biggest smile...                                                    ",
    "Don't stop me now!...                                                    ",
    "Working Harder does make me Better...                                                    ",
    "Doing it Faster does make me Stronger...                                                    ",
    "Don't need no credit card to Lag this train...                                                    ",
    "Everything works out right in the end, the sun will marry the moon...                                                    ",
    "It'll be fine...                                                    ",
    "Sometimes, all you need is something simple...                                                    ",
    "One and only one...                                                    ",
    "It seems like we have to defeat this one to win...                                                    ",
    "We are Happy, We are Hype, We are Here, We are H...                                                    ",
    "Can you put it down like New York City?...                                                    ",
    "Good, he's still in One Piece...                                                    ",
    "world.search(you);...                                                    ",
    "You can't see me behind the screen...                                                    ",
    "Go next...                                                    "];
    
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
    }, 50);

    return () => clearTimeout(timeout);
  }, [currentIndex, currentText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);


  return (
    
    <h3 class="text-teal-400 sm:text-3xl lg:text-5xl leading-relaxed animate-pulse cursor-default">{currentText}
    <span class={`cursor ${showCursor ? 'blink' : ''}`} />
    </h3>
  );
};

export default TypewriterEffect;
