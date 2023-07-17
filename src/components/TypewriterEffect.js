import React, { useEffect, useState } from 'react';
import './TypewriterEffect.css';

const TypewriterEffect = () => {
  const texts = ["Making it in the digital world one step at a time...                                                    ",
    "world.execute(me);...                        ",
    "Symmetry's overrated me thinks...                        ",
    "Nothing worth loving isn't askewed...                        ",
    "Don't stop me now!...                        ",
    "I'm up all night to get lucky...                         ",
    "Would it please you to listen to thunder instead?...                        ",
    "The worst of times, is when you have to give your biggest smiles...                        ",
    "Working Harder does make me Better...                        ",
    "Doing it Faster does make me Stronger...                        ",
    "Red is the color heroes...                        ",
    "I'd wear a mask of my own face...                        ",
    "Music, sweet music...                        ",
    "Give me your heart, make it real...                        ",
    "Can you see the colors?...                        ",
    "Don't need no credit card to Lag this train...                        ",
    "You've been thunderstruck!...                        ",
    "Everything works out right in the end, the sun will marry the moon...                        ",
    "It'll be fine...                        ",
    "Sometimes, all you need is something simple...                        ",
    "If everyone is not special maybe you can be what you want to be...                        ",
    "One and only one...                        ",
    "It seems like we have to deafeat this one to win...                        ",
    "We are Happy, We are Hype, We are Here, We are H...                        ",
    "Go next...                        "];
    
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
    
    <h3 class="text-teal-400 sm:text-3xl lg:text-5xl leading-relaxed">{currentText}
    <span class={`cursor ${showCursor ? 'blink' : ''}`} />
    </h3>
  );
};

export default TypewriterEffect;
