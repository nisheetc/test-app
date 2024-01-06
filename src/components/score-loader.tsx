'use client';

import React, { useEffect, useState } from 'react';
import miles from './temp.module.css';

const styles = {
  scoreLoader: `flex items-center justify-center transition-opacity duration-1000`,
  phraseBox: `flex flex-col h-[150px] overflow-hidden w-[400px]`,
};

const generateSlideUpStyle = (
  steps: number,
  moveDistance: number,
  duration: number
): string => {
  let keyframes = '';

  for (let i = 0; i <= steps; i++) {
    const percentage = Math.round((i / steps) * 100);
    const translateY = -moveDistance * i;
    keyframes += `${percentage}% { transform: translateY(${translateY}px); }\n`;
  }

  const animationName = `slideUpAnimation`;

  // Construct the complete CSS string
  let style = `@keyframes ${animationName} { ${keyframes} }\n`;
  style += `.${animationName} { `;
  style += `animation: ${animationName} ${duration}s ease-out; `;
  style += `}`;

  return style;
};

const PhraseSvg: React.FC<{
  phrase: string;
  yOffset: number;
  isFinal: boolean;
}> = ({ phrase, yOffset, isFinal }) => (
  <text fill="currentColor" x="50" y={yOffset}>
    {phrase}
    {isFinal ? '.' : '...'}
  </text>
);

const CheckSvg: React.FC<{ yOffset: number; index: number }> = ({
  yOffset,
  index,
}) => {
  const checkmarkIdPrefix = 'checkmark-1';
  const checkmarkCircleIdPrefix = 'checkmark-circle-1';
  const animationDelay = `${(index - 1.5) * 1}s`;

  return (
    <g transform={`translate(13 ${yOffset - 17}) scale(.7)`}>
      <circle
        // id={checkmarkCircleIdPrefix + index}

        // style={{
        //   animation: `fill-to-opacity 5000ms ${animationDelay} forwards`,
        // }}
        // fill="white"
        fill="background"
        cx="16"
        cy="16"
        r="15"
      />
      <polygon
        // id={checkmarkIdPrefix + index}
        id={'loadingCheckSVG-' + index}
        points="21.661,7.643 13.396,19.328 9.429,15.361 7.075,17.714 13.745,24.384 24.345,9.708"
        fill="currentColor"
        style={
          {
            // animation: `fill-to-coral 5000ms ${animationDelay} forwards`,
          }
        }
      />
      <path
        d="M16,0C7.163,0,0,7.163,0,16s7.163,16,16,16s16-7.163,16-16S24.837,0,16,0z M16,30C8.28,30,2,23.72,2,16C2,8.28,8.28,2,16,2 c7.72,0,14,6.28,14,14C30,23.72,23.72,30,16,30z"
        id={'loadingCheckSVG-' + index}
        fill="currentColor"
      />
    </g>
  );
};

type ScoreLoaderProps = {
  phrases: string[];
  yOffset?: number;
  verticalSpacing?: number;
};

const ScoreLoader: React.FC<ScoreLoaderProps> = ({
  phrases,
  yOffset = 30,
  verticalSpacing = 50,
}) => {
  const [position, setPosition] = useState(0);
  const slideUpStyle = generateSlideUpStyle(20, 50, 20); // 20 steps, 50px each, 20s duration

  // useEffect(() => {
  //   const shuffledPhrases = shuffleArray(array);
  //   setPhrases(shuffledPhrases);
  //   setAnimationStart(new Date().getTime());
  // }, []);

  useEffect(() => {
    const animationStart = new Date().getTime();

    const animateLoading = () => {
      // Animation logic here
      // Use React state to manage properties like position, color, etc.
    };

    // Start the animation
    const animationFrame = requestAnimationFrame(animateLoading);

    // Clean up
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPosition((prevPos) => prevPos - 1); // Adjust this value for speed and direction
  //   }, 100); // Adjust interval for smoother animation

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className={styles.scoreLoader}>
      <div className={styles.phraseBox}>
        <svg width="100%" height="100%">
          <defs>
            <mask
              id="mask"
              maskUnits="userSpaceOnUse"
              maskContentUnits="userSpaceOnUse"
            >
              <linearGradient
                id="linearGradient"
                gradientUnits="objectBoundingBox"
                x2="0"
                y2="1"
              >
                <stop stop-color="white" stop-opacity="0" offset="0%" />
                <stop stop-color="white" stop-opacity="1" offset="30%" />
                <stop stop-color="white" stop-opacity="1" offset="70%" />
                <stop stop-color="white" stop-opacity="0" offset="100%" />
              </linearGradient>
              <rect width="100%" height="100%" fill="url(#linearGradient)" />
            </mask>
          </defs>

          <g mask="url(#mask)">
            {/* <g style={slideUpStyle}> */}
            {/* <style>
              {slideUpStyle}
              {`
                @keyframes slideUp {
                  from { transform: translateY(0); }
                  to { transform: translateY(-1000px); }
                }
                @keyframes pauseAtPhrase {
                  0%, 5% { opacity: 1; }
                  10%, 15% { opacity: 1; }
                  20%, 25% { opacity: 1; }
                  95%, 100% { opacity: 1; }
                }
                .phrases {
                  animation: slideUp 20s linear, pauseAtPhrase 20s steps(1, end) infinite;
                }
              `}
            </style> */}
            <g id="phrases">
              {phrases.map((phrase, index) => (
                <React.Fragment key={index}>
                  <PhraseSvg
                    phrase={phrase}
                    yOffset={yOffset + verticalSpacing * index}
                    isFinal={phrases.length === index + 1}
                  />
                  <CheckSvg
                    yOffset={yOffset + verticalSpacing * index}
                    index={index}
                  />
                </React.Fragment>
              ))}
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default ScoreLoader;

{
  /* <g style={{ mask: 'url(#mask)' }}>
  <g id="phrases">
    {phrases.map((phrase, index) => (
      <React.Fragment key={index}>
        {createPhraseSvg(phrase, 30 + verticalSpacing * index)}
        {createCheckSvg(30 + verticalSpacing * index, index)}
      </React.Fragment>
    ))}
  </g>
</g>; */
}
// function shuffleArray(arr: string[]): string[] {
//   let array = [...arr];
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

// function createSVG(
//   tag: string,
//   properties: { [key: string]: string },
//   opt_children?: Node[]
// ): SVGElement {
//   const newElement = document.createElementNS(
//     'http://www.w3.org/2000/svg',
//     tag
//   ) as SVGElement;
//   for (const prop in properties) {
//     if (properties.hasOwnProperty(prop)) {
//       newElement.setAttribute(prop, properties[prop]);
//     }
//   }
//   if (opt_children) {
//     opt_children.forEach((child) => {
//       newElement.appendChild(child);
//     });
//   }
//   return newElement;
// }

// function createPhraseSvg(phrase: string, yOffset: number): SVGTextElement {
//   const textProperties = {
//     fill: "white",
//     x: "50",
//     y: yOffset.toString(),
//     "font-size": "18",
//     "font-family": "Arial"
//   };

//   const text = createSVG("text", textProperties) as SVGTextElement;
//   text.appendChild(document.createTextNode(phrase + "..."));
//   return text;
// }

// function createCheckSvg(yOffset: number, index: number): SVGGElement {
//   const checkmarkIdPrefix = 'checkmark-1'; // Replace with your actual prefix
//   const checkmarkCircleIdPrefix = 'checkmark-circle-1'; // Replace with your actual prefix

//   const check = createSVG('polygon', {
//     points:
//       '21.661,7.643 13.396,19.328 9.429,15.361 7.075,17.714 13.745,24.384 24.345,9.708 ',
//     fill: 'rgba(255,255,255,1)',
//     id: checkmarkIdPrefix + index.toString(),
//   }) as SVGPolygonElement;

//   const circleOutline = createSVG('path', {
//     d: 'M16,0C7.163,0,0,7.163,0,16s7.163,16,16,16s16-7.163,16-16S24.837,0,16,0z M16,30C8.28,30,2,23.72,2,16C2,8.28,8.28,2,16,2 c7.72,0,14,6.28,14,14C30,23.72,23.72,30,16,30z',
//     fill: 'white',
//   }) as SVGPathElement;

//   const circle = createSVG('circle', {
//     id: checkmarkCircleIdPrefix + index.toString(),
//     fill: 'rgba(255,255,255,0)',
//     cx: '16',
//     cy: '16',
//     r: '15',
//   }) as SVGCircleElement;

//   const group = createSVG(
//     'g',
//     {
//       transform: 'translate(10 ' + (yOffset - 20).toString() + ') scale(.9)',
//     },
//     [circle, check, circleOutline]
//   ) as SVGGElement;

//   return group;
// }

// function addPhrasesToDocument(phrases: string[]): void {
//   const verticalSpacing = 50;

//   phrases.forEach((phrase, index) => {
//     const yOffset = 30 + verticalSpacing * index;
//     const phrasesElement = document.getElementById('phrases');

//     if (phrasesElement) {
//       phrasesElement.appendChild(createPhraseSvg(phrase, yOffset));
//       phrasesElement.appendChild(createCheckSvg(yOffset, index));
//     }
//   });
// }

// function easeInOut(t: number): number {
//   const period: number = 200;
//   return (Math.sin(t / period + 100) + 1) / 2;
// }
