import * as React from "react";
import Confetti from "react-confetti";

const ConfettiComponent = ({ isVisible }) => {
  const [windowDimensions, setWindowDimensions] = React.useState({
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial dimensions
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isVisible) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 10000, pointerEvents: 'none' }}>
      <Confetti
        width={windowDimensions.width}
        height={windowDimensions.height}
        recycle={false}
        numberOfPieces={6000}
        colors={['#ffffff', '#f3f4f6', '#e5e7eb', '#d1d5db', '#9ca3af', '#6b7280', '#4b5563', '#374151', '#1f2937', '#000000']}
        gravity={0.3}
        wind={0.05}
        initialVelocityX={15}
        initialVelocityY={40}
      />
    </div>
  );
};

export default ConfettiComponent; 