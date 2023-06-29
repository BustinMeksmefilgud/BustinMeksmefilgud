import React, { useEffect, useState } from 'react';
import './TypewriterEffect.css';

const TypewriterEffect = () => {
  const texts = ["Making it in the digital world one step at a time...       ",
    "world.execute(me);...      ",
    "Lay down your pieces and let's begin object creation...      ",
    "Setup our new world and let's begin the simulation...      ",
    "Symmetry's overrated me thinks...      ",
    "Do you know that when you blink, each eye winks slighty off sync...      ",
    "I am lopsided and so are you...      ",
    "Nothing worth loving isn't askewed...      ",
    "Don't stop me now!...      ",
    "I'm having such a good time, I'm having a ball...      ",
    "I'm up all night to get lucky...      ",
    "One time I'd tried to sing about a Spring and a Strom...      ",
    "Would it please you to listen to thunder instead?...      ",
    "We've got only one sky. Blue, Red, and Black Paranoia...      ",
    "What's my endgame, there came a zero?...      ",
    "It took me 10 years to find the answer to something, I forgot about it in 2 seconds...      ",
    "I don't have anything that's really importnant to me...      ",
    "That's why everything is beautiful...      ",
    "Almost christmas means it wasn't christmas...      ",
    "In battle, it's not a question of guilty or not guilty...      ",
    "Working Harder does make me Better...      ",
    "Doing it Faster does make me Stronger...      ",
    "Red is the color heroes...      ",
    "Boy 18, continued waiting...      ",
    "I'd wear a mask of my own face...      ",
    "Music, sweet music...      ",
    "One man cheesburger apocalypse...      ",
    "Just like the ocean under the moon...      ",
    "Give me your heart, make it real...      ",
    "Let's not forget about it...      ",
    "Let the bass kick OOOHHHHHH...      ",
    "Come on and jam out again in this city where anxiety's never any fun...      ",
    "Don't you ever succumb...      ",
    "Ringo, Mogire, BEAM!...      ",
    "You've been thunderstruck!...      ",
    "Everything works out right in the end, the sun will marry the moon...      ",
    "It'll be fine...      ",
    "Sit back mellow again and have a nice afternoon...      ",
    "Sometimes, all you need is something simple...      ",
    "Like sommething to take care of...      ",
    "If everyone is not special maybe you can be what you want to be...      ",
    "Sometimes, it's ok to run away...      ",
    "Your life is your own...      ",
    "One and only one...      ",
    "It seems like we have to deafeat this one to win...      ",
    "We are Happy, We are Hype, We are Here, We are H...      ",
    "Go next...      ",
    "Don't need no credit card to Lag this train...      "];
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
