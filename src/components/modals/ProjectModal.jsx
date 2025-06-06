import React from "react";
import cross from "../../assets/cross.svg";
import waterBotImage from "../../assets/water-bot.jpg";
import eLearningImage from "../../assets/elearning-app.png";
import eLearningImage1 from "../../assets/elearning-app1.png";

const ProjectModal = (props) => {
  const isDarkMode = props?.mode;
  
  const projects = [
    {
      title: "AUTOMATE WATER CLEANING BOT",
      description: "Developed a smart robot integrated with RaspberryPi, ultrasonic sensors to clean water surfaces efficiently. Designed and prototyped the system to enhance automated water cleaning solutions. Presented the project at the SDG Hackathon at Christ University, demonstrating innovation in environmental sustainability.",
      images: [waterBotImage], // Single image for water bot
      technologies: ["RaspberryPi", "Ultrasonic Sensors", "Python", "IoT", "AI"],
    },
    {
      title: "E-Learning Web Application",
      subtitle: "Madilu Sevashrama Bangalore",
      description: "Developed an e-learning platform using PHP, MySQL, HTML, CSS, JavaScript, and Bootstrap to streamline academic resource management. The platform features secure content organization, real-time discussions, and a user-friendly interface, enhancing accessibility for students and educators. Designed with scalability and security, it modernizes traditional learning by promoting interactive and efficient education.",
      images: [eLearningImage1, eLearningImage], // Array of images for e-learning app
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    }
  ];

  return (
    <div className="fixed inset-0 z-[1000] w-[90%] md:w-[75%] lg:w-[50%] mx-auto my-auto h-full grid place-items-center overflow-auto">
      <div
        className={`relative backdrop-blur-lg py-8 px-6 md:px-10 ${
          isDarkMode
            ? "text-white border border-gray-500 bg-gradient-to-br from-gray-700 to-gray-900"
            : "text-black border border-gray-200 bg-gradient-to-br from-white to-blue-50"
        } shadow-lg rounded-lg w-full max-h-[90vh] overflow-y-auto`}
      >
        <img
          src={cross}
          alt="Close"
          className="absolute top-5 right-5 w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out"
          onClick={() => props?.onClose()}
        />
        <div
          className={`text-3xl font-bold text-center border-b mx-6 pb-4 mb-6 ${
            isDarkMode
              ? "border-gray-400 text-teal-300"
              : "border-gray-300 text-blue-600"
          }`}
        >
          Project Details
        </div>
        <div className="p-5 space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${
                isDarkMode
                  ? "bg-gray-800 hover:bg-gray-700 border-gray-600"
                  : "bg-white hover:bg-blue-100 border-gray-200"
              } transition-all duration-200 ease-in-out p-6 border rounded-lg shadow-sm`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image Gallery Column */}
                <div className="md:w-1/3 space-y-4">
                  {project.images.map((img, imgIndex) => (
                    <div key={imgIndex} className="relative group">
                      <img 
                        src={img} 
                        alt={`${project.title} screenshot ${imgIndex + 1}`}
                        className="w-full h-auto rounded-lg object-cover shadow-md transition-transform group-hover:scale-105"
                      />
                      {project.images.length > 1 && (
                        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                          {imgIndex + 1}/{project.images.length}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Text Content Column */}
                <div className="md:w-2/3">
                  <h3 className={`text-xl font-bold mb-1 ${
                    isDarkMode ? "text-teal-300" : "text-blue-600"
                  }`}>
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-sm italic mb-3">
                      {project.subtitle}
                    </p>
                  )}
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`text-xs px-3 py-1 rounded-full ${
                          isDarkMode
                            ? "bg-gray-700 text-teal-200"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto flex justify-center mt-6">
          <button
            onClick={() => props?.onClose()}
            className={`px-6 py-2 font-semibold rounded-md shadow-md transition-all duration-200 ease-in-out ${
              isDarkMode
                ? "bg-teal-500 text-white hover:bg-teal-600"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;