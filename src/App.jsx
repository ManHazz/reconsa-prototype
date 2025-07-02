import "./App.css";
import teamEventImg from "./assets/team-event.png";
import worldImg from "./assets/world-wo-bg.png";
import eventVideo from "./assets/event-managing-veo.mp4";
import joinUsImg from "./assets/join-us.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [mediaIndex, setMediaIndex] = useState(0);
  const mediaList = [
    { type: "video", src: eventVideo, width: 400, height: 300 },
    { type: "image", src: teamEventImg, width: 400, height: 300 },
    { type: "image", src: joinUsImg, width: 400, height: 300 },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".md\\:hidden")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMediaIndex((prev) => (prev + 1) % mediaList.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [mediaIndex]);

  const fadeUpScale = {
    initial: { opacity: 0, y: 40, scale: 0.95 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.7, ease: "easeOut" },
    viewport: { once: true, amount: 0.3 },
  };

  const fadeLeft = {
    initial: { opacity: 0, x: -60, scale: 0.95 },
    whileInView: { opacity: 1, x: 0, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.3 },
  };

  // Animation for seamlessly scrolling RECONSA text
  const marqueeText = "☆ RECONSA ☆ RECONSA ☆ RECONSA ☆ RECONSA";
  const marqueeWidth = 1800; // Should be at least as wide as the text
  const marqueeAnimation = {
    animate: { x: -marqueeWidth },
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 16,
      ease: "linear",
    },
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #2C0D4E 0%, #6B2C84 40%, #D3A6E1 80%, #6D2B8D 100%)",
      }}
    >
      {/* Triangular SVG Pattern Texture */}
      <svg
        className="absolute inset-0 w-full h-full z-0"
        width="100%"
        height="100%"
        style={{ pointerEvents: "none" }}
      >
        <defs>
          <pattern
            id="triangles"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <polygon points="20,0 40,40 0,40" fill="#ffffff0d" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#triangles)" />
      </svg>

      {/* Title Header Container */}
      <div className="fixed top-0 left-0 w-full z-30">
        <div className="relative flex items-center justify-between w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/20 backdrop-blur-lg shadow-lg border-b border-white/20 rounded-none min-h-[56px]">
          {/* Left: Title */}
          <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-gray-100 tracking-tight whitespace-nowrap">
            RECONSA
          </h1>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center">
            <div className="flex flex-1 justify-center items-center gap-4 mx-4">
              <a
                href="#about"
                className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-[#6D2B8D] hover:text-white transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#events"
                className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-[#6D2B8D] hover:text-white transition-colors duration-200"
              >
                Events
              </a>
              <a
                href="#partners"
                className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-[#6D2B8D] hover:text-white transition-colors duration-200"
              >
                Partners
              </a>
            </div>
            <button className="px-4 py-2 bg-[#6D2B8D] text-white rounded-full text-sm font-medium shadow-lg hover:bg-[#451B5A] transition-colors duration-200">
              Join Us!
            </button>
          </div>

          {/* Mobile Navigation - Hidden on desktop */}
          <div className="flex md:hidden items-center">
            <button
              className="p-2 rounded-full hover:bg-[#6D2B8D]/30 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Dropdown Content */}

            {isOpen && (
              <div className="absolute right-0 top-full mt-1 w-48 bg-white/90 backdrop-blur-md rounded-md shadow-lg py-1 z-40">
                <a
                  href="#about"
                  className="block px-4 py-2 text-sm text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
                <a
                  href="#events"
                  className="block px-4 py-2 text-sm text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  Events
                </a>
                <a
                  href="#partners"
                  className="block px-4 py-2 text-sm text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  Partners
                </a>
                <a
                  href="#joinus"
                  className="block px-4 py-2 text-sm text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  Join Us!
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Add spacing for fixed header */}
      <div className="h-[76px] sm:h-[80px]" />

      {/* Hero Section: Image and Button Animation */}
      <motion.div
        className="w-full flex flex-col items-center justify-start px-4 sm:px-6 text-center relative z-10"
        initial={fadeUpScale.initial}
        whileInView={fadeUpScale.whileInView}
        transition={fadeUpScale.transition}
        viewport={fadeUpScale.viewport}
      >
        {/* Circular Marquee Around World Image */}
        <div
          className="relative flex items-center justify-center w-full"
          style={{ minHeight: "40vw", minWidth: "40vw", height: 400 }}
        >
          {/* World Image Centered */}
          <img
            src={worldImg}
            alt="World"
            className="block mx-auto"
            style={{
              width: "30vw",
              minWidth: 200,
              maxWidth: 400,
              height: "auto",
              zIndex: 2,
              filter: "drop-shadow(0 0 40px rgba(255,255,255,0.25)) blur(.6px)",
              borderRadius: "50%",
            }}
          />
          {/* Circular Marquee Text */}
          <div
            className="absolute left-1/2 top-1/2"
            style={{
              width: "40vw",
              minWidth: 300,
              maxWidth: 500,
              height: "40vw",
              minHeight: 300,
              maxHeight: 500,
              transform: "translate(-50%, -50%)",
              zIndex: 3,
              pointerEvents: "none",
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                left: 0,
                top: 0,
                transformOrigin: "50% 50%",
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 500 500"
                style={{ display: "block" }}
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 250, 250 m -200, 0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0"
                  />
                </defs>
                <text
                  fill="#fff"
                  fontFamily="'Bitcount Grid Double Var', monospace"
                  fontSize="35"
                  fontWeight="700"
                  letterSpacing="10"
                  style={{ fontVariationSettings: "'wght' 700, 'wdth' 70" }}
                >
                  <textPath xlinkHref="#circlePath" startOffset="0">
                    {marqueeText}
                  </textPath>
                </text>
              </svg>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full flex flex-col items-center justify-start px-4 sm:px-6 text-center relative z-10"
        initial={fadeUpScale.initial}
        whileInView={fadeUpScale.whileInView}
        transition={fadeUpScale.transition}
        viewport={fadeUpScale.viewport}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl text-purple-100 font-bold mb-4 sm:mb-6 mt-8">
          #CultivatingSustainableVolunteerism
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-purple-200 max-w-2xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0">
          The 10th Regional Conference in Universiti Teknologi PETRONAS on
          Student Activism (RECONSA) 2026.
        </p>
      </motion.div>

      {/* Features Section */}
      <motion.section
        className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 py-8 sm:py-12 z-10"
        initial={fadeUpScale.initial}
        whileInView={fadeUpScale.whileInView}
        transition={{ ...fadeUpScale.transition, delay: 0.2 }}
        viewport={fadeUpScale.viewport}
      >
        <div className="flex flex-col items-center text-center p-4">
          <div className="w-12 sm:w-16 h-12 sm:h-16 mb-3 sm:mb-4 flex items-center justify-center rounded-full bg-[#D3A6E1] bg-opacity-60">
            <span className="text-2xl sm:text-3xl">🤝</span>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-purple-100">
            Collaboration
          </h3>
          <p className="text-sm sm:text-base text-purple-200">
            Empowering volunteers to work together and make a greater impact
            through teamwork and shared goals.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <div className="w-12 sm:w-16 h-12 sm:h-16 mb-3 sm:mb-4 flex items-center justify-center rounded-full bg-[#6B2C84] bg-opacity-60">
            <span className="text-2xl sm:text-3xl">🌱</span>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-purple-100">
            Sustainability
          </h3>
          <p className="text-sm sm:text-base text-purple-200">
            Fostering long-term positive change by promoting sustainable
            volunteer initiatives and community projects.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <div className="w-12 sm:w-16 h-12 sm:h-16 mb-3 sm:mb-4 flex items-center justify-center rounded-full bg-[#6D2B8D] bg-opacity-60">
            <span className="text-2xl sm:text-3xl">🔗</span>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-purple-100">
            Connectivity
          </h3>
          <p className="text-sm sm:text-base text-purple-200">
            Connecting volunteers and communities to opportunities for greater
            collective impact.
          </p>
        </div>
      </motion.section>

      {/* Video Section */}
      <motion.section className="w-full flex flex-col items-center justify-center py-8 sm:py-12 px-4 sm:px-6 bg-white bg-opacity-10 z-10">
        <div
          className="w-full flex justify-center items-center min-h-[240px] min-w-[240px]"
          style={{ minHeight: 320 }}
        >
          <AnimatePresence initial={false} mode="wait">
            {mediaList.map((media, idx) =>
              idx === mediaIndex ? (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8, x: 100 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -100 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute w-full flex justify-center items-center"
                  style={{ position: "absolute" }}
                >
                  {media.type === "video" ? (
                    <video
                      src={media.src}
                      controls
                      autoPlay
                      loop
                      muted
                      className="rounded-xl shadow-lg object-cover"
                      style={{
                        width: media.width,
                        height: media.height,
                        background: "#222",
                      }}
                    />
                  ) : (
                    <img
                      src={media.src}
                      alt="Media"
                      className="rounded-xl shadow-lg object-cover"
                      style={{
                        width: media.width,
                        height: media.height,
                        background: "#222",
                      }}
                    />
                  )}
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Footer */}
      <div className="w-full flex justify-center py-4 sm:py-6 bg-transparent z-10">
        <span className="text-xs sm:text-sm text-purple-200">
          &copy; {new Date().getFullYear()} Reconsa. All rights reserved.
        </span>
      </div>
    </div>
  );
}

export default App;
