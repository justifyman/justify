import { FC } from "react";

const About: FC = () => {
  const skills = [
    { name: "React", level: 95, color: "#61DAFB" },
    { name: "TypeScript", level: 88, color: "#3178C6" },
    { name: "TailwindCSS", level: 92, color: "#06B6D4" },
    { name: "JavaScript", level: 90, color: "#F7DF1E" },
    { name: "HTML/CSS", level: 95, color: "#E34F26" },
    { name: "Node.js", level: 75, color: "#339933" },
  ];

  const experiences = [
    {
      year: "2022-Present",
      title: "Frontend Developer",
      description: "Building modern web applications with React and TypeScript",
      highlight: true
    },
    {
      year: "2021-2022",
      title: "Learning Phase",
      description: "Mastered HTML, CSS, and JavaScript fundamentals",
      highlight: false
    },
    {
      year: "2020-2021",
      title: "Started Journey",
      description: "First steps into web development and programming",
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen relative bg-[#0a0a13] py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7c8fff]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_80%)] opacity-20"></div>
      
      <div className="relative z-10 w-full px-4 md:px-20 lg:px-60">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-[#7c8fff] text-sm font-medium tracking-wider uppercase">About Me</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-8">
              Crafting Digital
              <br />
              <span className="text-[#7c8fff]">Experiences</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              I'm a passionate frontend developer with 3+ years of experience creating 
              beautiful, functional, and user-centered digital experiences.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            
            {/* Left Column - Story & Stats */}
            <div className="space-y-12">
              
              {/* Personal Story */}
              <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#1a1a2e]/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50">
                <h3 className="text-2xl font-medium text-white mb-6">My Journey</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Started my web development journey in 2020, driven by curiosity and 
                    a passion for creating things that live on the internet. What began 
                    as simple HTML pages has evolved into building complex, interactive 
                    web applications.
                  </p>
                  <p>
                    I specialize in React ecosystem and modern JavaScript, with a keen 
                    eye for design and user experience. Every project is an opportunity 
                    to learn something new and push the boundaries of what's possible.
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#1a1a2e]/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 text-center group hover:border-[#7c8fff]/30 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-[#7c8fff] mb-2 group-hover:scale-110 transition-transform duration-300">3+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="bg-[#1a1a2e]/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 text-center group hover:border-[#7c8fff]/30 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-[#7c8fff] mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
                  <div className="text-gray-400 text-sm">Projects Built</div>
                </div>
                <div className="bg-[#1a1a2e]/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 text-center group hover:border-[#7c8fff]/30 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-[#7c8fff] mb-2 group-hover:scale-110 transition-transform duration-300">6+</div>
                  <div className="text-gray-400 text-sm">Technologies</div>
                </div>
                <div className="bg-[#1a1a2e]/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 text-center group hover:border-[#7c8fff]/30 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-[#7c8fff] mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-gray-400 text-sm">Satisfaction</div>
                </div>
              </div>

            </div>

            {/* Right Column - Skills & Experience */}
            <div className="space-y-12">
              
              {/* Skills Section */}
              <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#1a1a2e]/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50">
                <h3 className="text-2xl font-medium text-white mb-8">Technical Skills</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-1000 ease-out group-hover:brightness-110"
                          style={{ 
                            width: `${skill.level}%`,
                            backgroundColor: skill.color,
                            animationDelay: `${index * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Timeline */}
              <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#1a1a2e]/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50">
                <h3 className="text-2xl font-medium text-white mb-8">Experience Timeline</h3>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="flex gap-4 group">
                      <div className="flex flex-col items-center">
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          exp.highlight 
                            ? 'bg-[#7c8fff] border-[#7c8fff]' 
                            : 'bg-transparent border-gray-600'
                        } group-hover:scale-125 transition-transform duration-300`}></div>
                        {index < experiences.length - 1 && (
                          <div className="w-0.5 h-12 bg-gray-700 mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <div className="text-[#7c8fff] text-sm font-medium mb-1">{exp.year}</div>
                        <h4 className="text-white font-medium mb-2">{exp.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Services Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-light text-white mb-4">What I Do</h3>
              <p className="text-gray-400 text-lg">Services I provide to bring your ideas to life</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#1a1a2e]/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 hover:border-[#7c8fff]/30 transition-all duration-500 hover:transform hover:scale-105 group">
                <div className="text-[#7c8fff] text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">💻</div>
                <h4 className="text-white text-xl mb-4 font-medium">Frontend Development</h4>
                <p className="text-gray-400 leading-relaxed">
                  Building responsive, interactive web applications using React, TypeScript, and modern CSS frameworks.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#1a1a2e]/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 hover:border-[#7c8fff]/30 transition-all duration-500 hover:transform hover:scale-105 group">
                <div className="text-[#7c8fff] text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🎨</div>
                <h4 className="text-white text-xl mb-4 font-medium">UI/UX Design</h4>
                <p className="text-gray-400 leading-relaxed">
                  Creating intuitive user interfaces with attention to detail, accessibility, and user experience.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#1a1a2e]/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 hover:border-[#7c8fff]/30 transition-all duration-500 hover:transform hover:scale-105 group">
                <div className="text-[#7c8fff] text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
                <h4 className="text-white text-xl mb-4 font-medium">Performance Optimization</h4>
                <p className="text-gray-400 leading-relaxed">
                  Optimizing web applications for speed, SEO, and exceptional user experience across all devices.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-[#7c8fff]/10 to-purple-500/10 backdrop-blur-sm p-12 rounded-3xl border border-[#7c8fff]/20">
              <h3 className="text-3xl font-light text-white mb-4">Ready to work together?</h3>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Let's create something amazing. I'm always excited to take on new challenges 
                and bring innovative ideas to life.
              </p>
              <a
                href="#contact"
                className="inline-block bg-[#7c8fff] text-black px-8 py-4 rounded-xl hover:bg-indigo-500 transition-all duration-300 font-medium hover:transform hover:scale-105 hover:shadow-lg hover:shadow-[#7c8fff]/25"
              >
                Let's Talk
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;