import React from 'react';
import { useState, useEffect } from "react";
import '../styles/Home.css';


// created by previous FE's i.e. current TE's of GDSC AIT PUNE.

{/*Middle Section*/}

const TypingEffect = () => {
  const fullText = "Google Developer Group";
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 80;
    let timeout;

    // Handle typing or deleting
    if (!isDeleting && charIndex < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else if (charIndex === fullText.length && !isDeleting) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
    } else if (charIndex === 0 && isDeleting) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, fullText]);

  // Cursor blink effect
  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <div className="container mx-auto px-2 sm:px-6 w-full flex flex-col items-center justify-between">
      <div className="bg-white w-full max-w-lg sm:w-[60%] lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl py-3 px-3 sm:px-6 space-y-4 mx-auto rounded-3xl shadow-lg">
        
        {/*Search Text Section*/}
        <div className="flex items-center w-full space-x-2 sm:space-x-4">
          {/* Search Icon */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
              <path d="M1 1h22v22H1z" fill="none" />
            </svg>
          </div>

          {/* Search Text */}
          <div className="flex-grow">
            <span className="text-gray-800 font-semibold text-lg sm:text-lg">
              {displayedText}
              <span className={`cursor ${showCursor ? "opacity-100" : "opacity-0"}`}>
                |
              </span>
            </span>
          </div>

          {/* Mic */}
          <div className="text-gray-500">
            <img src="https://i.ibb.co/Rpy4xtXG/mic.png" alt="Mic Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          {/* Camera  */}
          <div className="text-gray-500">
            <img src="https://i.ibb.co/FkYkxZHV/lens.png" alt="Camera Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

        <div className="w-full h-[2px] bg-gray-300"></div>

        {/*Search History */}
        <div className="space-y-2 text-gray-800">
          <div className="flex items-center space-x-2">
            <img src="https://i.ibb.co/b9Y6ncd/recent.png" alt="Recent Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-lg">Google Developer Group , AIT PUNE</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src="https://i.ibb.co/b9Y6ncd/recent.png" alt="Recent Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-lg">GDG, Army Institute Of Technology Pune</span>
          </div>
        </div>

        {/*Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:space-x-4 justify-center">
          <button className="bg-blue-500 text-white rounded-full py-2 px-4 sm:px-6 font-semibold hover:bg-blue-600">
            Google Search
          </button>
          <button className="bg-gray-100 text-blue-500 rounded-full py-2 px-4 sm:px-6 font-semibold hover:bg-gray-200">
            I'm Feeling AITian
          </button>
        </div>
      </div>
    </div>
  );
};

export default TypingEffect;