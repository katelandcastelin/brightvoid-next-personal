import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const textGlitchKeyframes = keyframes`
  0% {
    opacity: 1;
  }
  94% {
    opacity: 1;
    transform: translateX(0px);
  }
  95% {
    opacity: 0.1;
  }
  96% {
    opacity: 1;
    transform: translateX(1px);
  }
  97% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const displayLetterKeyframes = keyframes`
  0% {
    transform: translateY(2px);
    color: white;
    opacity: 0;
  }
  10%, 20% {
    opacity: 1;
    color: limegreen;
  }
  50% {
    opacity: 1;
    color: darkgreen;
    transform: translateY(1px);
  }
  60%, 100% {
    opacity: 1;
    color: white;
    transform: translateY(0);
  }
`;

const generateSpanStyles = () => css`
  animation-delay: ${Math.random() * 2}s;
`;

const GlitchText = styled.div`
  font-size: 48px;
  font-family: 'Share Tech Mono', monospace;
  color: white;
  text-align: center;
  animation: ${textGlitchKeyframes} 3s ease-in-out infinite alternate;
`;

const GlitchSpan = styled.span`
  display: inline-block;
  min-width: 1rem;
  opacity: 0;
  animation: ${displayLetterKeyframes} 0.5s ease-in-out forwards;
  letter-spacing: 1px;
  ${generateSpanStyles}
`;

const GlitchingText = ({ text }) => {
  const renderText = () => {
    return text.split("").map((char, index) => (
      <GlitchSpan key={index}>
        {char}
      </GlitchSpan>
    ));
  };

  return (
    <GlitchText>
      {renderText()}
    </GlitchText>
  );
};

export default GlitchingText;
