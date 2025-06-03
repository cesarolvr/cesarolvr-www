import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import PropTypes from "prop-types";

const ScrambleText = ({ text, className, delay = 0, duration = 1, placeholder = "." }) => {
  const textRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const chars = placeholder;

  const scramble = (element, originalText, isHover = false) => {
    let frame = 0;
    let iteration = 0;
    const totalFrames = duration * 60; // 60fps * duration in seconds
    const framesPerChar = totalFrames / originalText.length;

    const animate = () => {
      const scrambled = originalText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return originalText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      element.textContent = scrambled;

      if (iteration >= originalText.length) {
        return;
      }

      if (frame >= framesPerChar) {
        iteration += 1;
        frame = 0;
      }

      frame++;
      requestAnimationFrame(animate);
    };

    animate();
  };

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    const originalText = text;

    // Initial scramble
    const timeout = setTimeout(() => {
      scramble(element, originalText);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [text, delay, duration]);

  const handleMouseEnter = () => {
    if (!textRef.current) return;
    setIsHovered(true);
    scramble(textRef.current, text, true);
  };

  const handleMouseLeave = () => {
    if (!textRef.current) return;
    setIsHovered(false);
    scramble(textRef.current, text, true);
  };

  return (
    <div
      className={className}
      ref={textRef}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      {text}
    </div>
  );
};

ScrambleText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  duration: PropTypes.number
};

export default ScrambleText;
