import { FC } from "react";

const About: FC = () => {
  const skills = [
    { name: "React", level: 97, color: "#61DAFB" },
    { name: "TailwindCSS", level: 98, color: "#06B6D4" },
    { name: "JavaScript", level: 95, color: "#F7DF1E" },
    { name: "HTML/CSS", level: 100, color: "#E34F26" },
    { name: "TypeScript", level: 90, color: "#3178C6" },
    { name: "Node.js", level: 85, color: "#339933" },
  ];

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "TailwindCSS", icon: "🎨" },
    { name: "Node.js", icon: "🟢" },
    { name: "Git", icon: "📝" },
    { name: "Figma", icon: "🎯" },
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

          {/* Main Content */}
          <div className="space-y-20">
            
            {/* Story & Stats Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Personal Story - Takes 2 columns */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#1a1a2e]/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 h-full">
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
                    <p>
                      When I'm not coding, you'll find me exploring new technologies, 
                      contributing to open source projects, or sharing knowledge with 
                      the developer community.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Grid - Takes 1 column */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                <div className="bg-[#1a1a2e]/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 text-center group hover:border-[#7c8fff]/30 transition-all duration-300">
                  <div className="text-3xl font-bold text-[#7c8fff] mb-2 group-hover:scale-110 transition-transform duration-300">3+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="bg-[#1a1a2e]/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 text-center group hover:border-[#7c8fff]/30 transition-all duration-300">
                  <div className="text-3xl font-bold text-[#7c8fff] mb-2 group-hover:scale-110 transition-transform duration-300">Several</div>
                  <div className="text-gray-400 text-sm">Projects Built</div>
                </div>
                <div className="bg-[#1a1a2e]/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 text-center group hover:border-[#7c8fff]/30 transition-all duration-300">
                  <div className="text-3xl font-bold text-[#7c8fff] mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-gray-400 text-sm">Satisfaction</div>
                </div>
                <div className="bg-[#1a1a2e]/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 text-center group hover:border-[#7c8fff]/30 transition-all duration-300">
                  <div className="text-3xl font-bold text-[#7c8fff] mb-2 group-hover:scale-110 transition-transform duration-300">6+</div>
                  <div className="text-gray-400 text-sm">Technologies</div>
                </div>
              </div>

            </div>

            {/* Skills & Technologies Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Technical Skills */}
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

              {/* Technologies I Use */}
              <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#1a1a2e]/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50">
                <h3 className="text-2xl font-medium text-white mb-8">Technologies I Use</h3>
                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((tech, index) => (
                    <div 
                      key={tech.name} 
                      className="bg-[#0a0a13]/50 p-4 rounded-lg border border-gray-700/50 hover:border-[#7c8fff]/30 transition-all duration-300 hover:transform hover:scale-105 group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <div className="text-white font-medium text-sm">{tech.name}</div>
                    </div>
                  ))}
                </div>
                
                {/* Additional info */}
                <div className="mt-6 p-4 bg-[#0a0a13]/30 rounded-lg border border-gray-700/30">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Always learning and exploring new technologies to stay current with 
                    industry trends and best practices.
                  </p>
                </div>
              </div>

            </div>

            {/* Services Section */}
            <div>
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
    </div>
  );
};

export default About;