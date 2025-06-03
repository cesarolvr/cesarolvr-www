import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import PropTypes from 'prop-types';

gsap.registerPlugin(SplitText);

const SplitTextAnimation = ({ text, className, delay = 0 }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitText(textRef.current, {
      type: 'chars',
      charsClass: 'char',
      wordsClass: 'word'
    });

    gsap.from(split.chars, {
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: '0% 50% -50',
      duration: 1,
      stagger: 0.02,
      delay: delay,
      ease: 'linear'
    });

    return () => {
      split.revert();
    };
  }, [text, delay]);

  return (
    <div className={className} ref={textRef}>
      {text}
    </div>
  );
};

SplitTextAnimation.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number
};

export default SplitTextAnimation; 