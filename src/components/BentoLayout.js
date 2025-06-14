import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import githubLogo from "../assets/github.svg";
import linkedInLogo from "../assets/linkedin.svg";
import xLogo from "../assets/x-logo.svg";
import mailLogo from "../assets/mail.png";
import resumeImage from "../assets/resume.svg";
import backgroundImage from "../assets/profile.png";
import setupImage from "../assets/setup.jpg";
import cameraLogo from "../assets/camera.svg";
import { email, github, linkedin, twitter, resume,Photography} from "../profileconfig";
import ProjectModal from "./modals/ProjectModal";
import ContactModal from "./modals/ContactModal";
// import rookieLogo from '../assets/experience/Rookie.svg';
// import intermediateLogo from '../assets/experience/Intermediate.svg';
// import advancedLogo from '../assets/experience/Advanced.svg';
// import oneyearLogo from '../assets/experience/+1.svg';
// import twoyearLogo from '../assets/experience/+2.svg';
// import threeyearLogo from '../assets/experience/+3.svg';
// import fouryearLogo from '../assets/experience/+4.svg';
// import fiveyearLogo from '../assets/experience/+5.svg';
// import sixyearLogo from '../assets/experience/+6.svg';

// import applemusicLogo from "../assets/appleMusic.svg";
// import spotifyLogo from "../assets/spotify.svg";
// import twitchLogo from "../assets/twitch.svg";
// import leetcodeLogo from "../assets/leetcode.svg";
// import figmaLogo from "../assets/figma.svg";
// import discordLogo from "../assets/discord.svg";

const BentoLayout = ({ isDarkMode, toggleDarkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const gridRef = useRef(null);
  const [animationDone, setAnimationDone] = useState(false);
  const [contactOpen, setContactOpen] = useState(false)

  useEffect(() => {
    const elements = gridRef.current.children;
    gsap.set(elements, {
      opacity: 0,
      y: () => -Math.random() * 500 - 100,
      x: () => 50 - Math.random() * 100,
    });
    gsap.to(elements, {
      opacity: 1,
      y: 0,
      x: 0,
      stagger: 0.1,
      ease: "elastic.out(1, 0.75)",
      duration: 1.2,
      delay: 0.5,
      onComplete: () => setAnimationDone(true),
    });
  }, []);

  useEffect(() => {
    if (animationDone) {
      const elements = gridRef.current.children;
      for (let element of elements) {
        element.addEventListener("mouseenter", () => {
          gsap.to(element, {
            scale: 1.1,
            duration: 0.2,
            ease: "Power1.easeOut",
            overwrite: "auto",
            zIndex: 10,
          });
        });
        element.addEventListener("mouseleave", () => {
          gsap.to(element, {
            scale: 1,
            duration: 0.2,
            ease: "Power1.easeOut",
            overwrite: "auto",
            zIndex: 1,
          });
        });
      }
    }
  }, [animationDone]);

  return (
    <div className={`app-container ${isDarkMode ? "dark" : "light"} p-4`}>
      <button
        onClick={toggleDarkMode}
        className="p-3 px-4 bg-gray-800 text-white rounded-md fixed top-4 right-4 z-50"
      >
        {isDarkMode ? (
          <i className="fas fa-sun"></i>
        ) : (
          <i className="fas fa-moon"></i>
        )}
      </button>

      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Profile Image */}
       <div 
  className="col-span-1 sm:col-span-2 lg:col-span-2 aspect-square sm:aspect-[2/1] rounded-xl border-transparent shadow-md relative overflow-hidden"
  style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>
  {/* Gradient overlay at bottom */}
  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
  
  {/* Text positioned absolutely at bottom */}
  <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xl lg:text-4xl text-white font-bold w-full text-center">
    Who Am I?
  </span>
</div>

        {/* Resume */}
        <div className="col-span-1 aspect-square rounded-xl border-transparent shadow-md overflow-hidden">
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <img
              src={resumeImage}
              alt="Resume"
              className="w-full h-full object-cover"
            />
          </a>
        </div>
{/*   Photography */}
<div className="col-span-1 aspect-square rounded-xl border-transparent shadow-md overflow-hidden">
  <a href={Photography} target="_blank" rel="noopener noreferrer">
    <img
      src={cameraLogo}
      alt="Photography"
      className="w-full h-full object-cover"
    />
  </a>
</div>


        {/* My Setup */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-4 aspect-square sm:aspect-[4/1] rounded-xl border-transparent shadow-md overflow-hidden">
          <button className="relative w-full h-full" onClick={() => setIsModalOpen(true)}>
            <img src={setupImage} alt="Setup" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center text-3xl text-white font-bold z-10"></div>
          </button>
        </div>

        {/* GitHub */}
        <div className="col-span-1 aspect-square rounded-xl border-transparent shadow-md overflow-hidden">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <img
              src={githubLogo}
              alt="GitHub Logo"
              className="w-full h-full object-cover"
            />
          </a>
        </div>

        {/* LinkedIn */}
        <div className="col-span-1 aspect-square rounded-xl border-transparent shadow-md overflow-hidden">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <img
              src={linkedInLogo}
              alt="LinkedIn Logo"
              className="w-full h-full object-cover"
            />
          </a>
        </div>

        {/* X/Twitter */}
        <div className="col-span-1 aspect-square rounded-xl border-transparent shadow-md overflow-hidden">
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <img
              src={xLogo}
              alt="X/Twitter Logo"
              className="w-full h-full object-cover"
            />
          </a>
        </div>

        {/* Email */}
        <div className="col-span-1 aspect-square rounded-xl border-transparent shadow-md overflow-hidden">
          <a href={`mailto:${email}`}>
            <img
              src={mailLogo}
              alt="Mail Logo"
              className="w-full h-full object-cover"
            />
          </a>
        </div>

       
      </div>

      {/* Project Modal */}
      {isModalOpen && <ProjectModal onClose={() => setIsModalOpen(false)} mode={isDarkMode} />}

      {/*Contact form*/}
      {contactOpen && (
        <div className="flex flex-col md:flex-row gap-10">
          <ContactModal setContactOpen={setContactOpen} mode={isDarkMode} />
        </div>

      )}

    </div>
  );
};

export default BentoLayout;