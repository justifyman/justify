import { FC, useEffect } from "react";
import { highlightAll } from "../utils/prism";

const Hero: FC = () => {
  useEffect(() => {
    highlightAll();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center relative p-4 md:p-60">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 items-center">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-6xl lg:text-8xl font-small text-white tracking-tight">
            Hello, I'm
            <br />
            <span className="text-[#7c8fff]">justify.</span>
          </h1>
          <p className="text-gray-400 max-w-md pt-3 lg:pt-6 text-sm md:text-lg lg:text-xl">
            An experienced front-end website developer with a passion for
            crafting unique digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-4 lg:mt-8">
            <a href="#contact" className="bg-[#7c8fff] text-black px-3 md:px-6 py-2 rounded hover:bg-indigo-500 transition-colors duration-500 text-xs md:text-base text-center">
              @ contact me
            </a>
            <a href="#about" className="text-white px-3 md:px-6 py-2 rounded border border-white/20 hover:bg-white/10 transition-colors text-xs md:text-base text-center">
              learn more
            </a>
          </div>
        </div>
        <div className="flex-1 w-full lg:flex items-center justify-center mt-6 lg:mt-0">
          <div className="bg-[#1a1a2e] rounded-lg p-2 md:p-4 lg:p-10 w-full lg:w-[700px] font-mono text-[10px] md:text-sm shadow-xl overflow-hidden">
            <pre className="text-gray-300 overflow-x-auto">
              <code className="language-html">
                {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div class="container">
      <h1>I'm justify!</h1>
      <p>the frontend dev for you!</p>
    </div>
  </body>
</html>`}
              </code>
            </pre>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2">
        <span className="text-[10px] md:text-xs">Scroll to discover</span>
        <svg
          className="w-4 h-4 md:w-6 md:h-6 animate-bounce pt-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
