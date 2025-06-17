import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const ScrambleText = ({ text, className, delay = 0, duration = 1, placeholder = "." }) => {
  const textRef = useRef(null);
  const chars = placeholder;

  const scramble = (element, originalText) => {
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

  return (
    <div
      className={className}
      ref={textRef}
    >
      {text}
    </div>
  );
};

export default ScrambleText;
