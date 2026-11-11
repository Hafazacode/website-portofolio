import React, { useState, useRef, useEffect } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

// Efek acak huruf singkat waktu tombol di-hover
export default function ScrambleButton({
  text,
  href,
  onClick,
  className = '',
  style,
  target,
  rel,
  download,
  type = 'button',
}) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);

  useEffect(() => {
    setDisplayText(text);
  }, [text]);

  const triggerScramble = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    let iteration = 0;
    const totalLength = text.length;
    const step = Math.max(0.6, totalLength / 14);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            // skip spasi & simbol panah biar gak ikut teracak
            if (char === ' ' || char === '↓' || char === '→' || char === '↗' || char === '⎘') {
              return char;
            }
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      iteration += step;
      if (iteration >= totalLength) {
        clearInterval(intervalRef.current);
        setDisplayText(text);
      }
    }, 28);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const content = (
    <span className="scramble-wrap">
      <span className="scramble-ghost" aria-hidden="true">
        {text}
      </span>
      <span className="scramble-live">{displayText}</span>
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        className={className}
        style={style}
        target={target}
        rel={rel}
        download={download}
        onMouseEnter={triggerScramble}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={className}
      style={style}
      onClick={onClick}
      onMouseEnter={triggerScramble}
    >
      {content}
    </button>
  );
}
