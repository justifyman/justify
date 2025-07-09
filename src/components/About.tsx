import { FC } from "react";

const About: FC = () => {
  const skills = [
    { name: "React", level: 97, color: "#61DAFB" },
    { name: "TailwindCSS", level: 98, color: "#06B6D4" },
    { name: "JavaScript", level: 95, color: "#F7DF1E" },
    { name: "TypeScript", level: 90, color: "#3178C6" },
  ];

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "TailwindCSS", icon: "🎨" },
    { name: "Node.js", icon: "🟢" },
  ];

  return (
    <div className="min-h-screen relative bg-[#0a0a13] py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7c8fff]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_80%)] opacity-20"></div>
      
      <div className="relative z-10 w-full px-4 md:px-20 lg:px-60">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#7c8fff] text-sm font-medium tracking-wider uppercase">About Me</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-6">
              Crafting Digital
              <br />
              <span className="text-[#7c8fff]">Experiences</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Frontend developer with 4+ years of experience creating beautiful, 
              functional digital experiences.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            
            {/* Story & Stats Section */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              
              {/* Personal Story - Takes 3 columns */}
              <div className="lg:col-span-3">
                <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#1a1a2e]/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50">
                  <h3 className="text-xl font-medium text-white mb-4">My Journey</h3>
                  <div className="text-gray-300 leading-relaxed text-sm">
                    <p className="mb-3">
                      Started web development in 2021, evolving from simple HTML pages 
                      to building complex React applications. I specialize in modern 
                      JavaScript and have a keen eye for design and user experience.
                    </p>
                    <p>
                      Every project is an opportunity to learn and push boundaries. 
                      When not coding, I explore new technologies and contribute to 
                      the developer community.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats - Takes 1 column */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                <div className="bg-[#1a1a2e]/60 backdrop-blur-sm p-4 rounded-lg border border-gray-800/50 text-center group hover:border-[#7c8fff]/30 transition-all duration-300">
                  <div className="text-2xl font-bold text-[#7c8fff] mb-1">4+</div>
                  <div className="text-gray-400 text-xs">Years</div>
                </div>
                <div className="bg-[#1a1a2e]/60 backdrop-blur-sm p-4 rounded-lg border border-gray-800/50 text-center group hover:border-[#7c8fff]/30 transition-all duration-300">
                  <div className="text-2xl font-bold text-[#7c8fff] mb-1">Several</div>
                  <div className="text-gray-400 text-xs">Projects</div>
                </div>
              </div>

            </div>

            {/* Skills & Technologies Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Technical Skills */}
              <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#1a1a2e]/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50">
                <h3 className="text-xl font-medium text-white mb-6">Technical Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white text-sm font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-xs">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
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

              {/* Technologies */}
              <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#1a1a2e]/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50">
                <h3 className="text-xl font-medium text-white mb-6">Technologies</h3>
                <div className="grid grid-cols-2 gap-3">
                  {technologies.map((tech, index) => (
                    <div 
                      key={tech.name} 
                      className="bg-[#0a0a13]/50 p-3 rounded-lg border border-gray-700/50 hover:border-[#7c8fff]/30 transition-all duration-300 hover:transform hover:scale-105 group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="text-xl mb-1 group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <div className="text-white font-medium text-xs">{tech.name}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Services Section */}
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-light text-white mb-2">What I Do</h3>
                <p className="text-gray-400 text-sm">Services I provide</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#1a1a2e]/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-[#7c8fff]/30 transition-all duration-500 hover:transform hover:scale-105 group">
                  <div className="text-[#7c8fff] text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">💻</div>
                  <h4 className="text-white text-lg mb-3 font-medium">Frontend Development</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Building responsive web applications using React, TypeScript, and modern CSS.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#1a1a2e]/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-[#7c8fff]/30 transition-all duration-500 hover:transform hover:scale-105 group">
                  <div className="text-[#7c8fff] text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">🎨</div>
                  <h4 className="text-white text-lg mb-3 font-medium">UI/UX Design</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Creating intuitive interfaces with attention to detail and user experience.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#1a1a2e]/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-[#7c8fff]/30 transition-all duration-500 hover:transform hover:scale-105 group">
                  <div className="text-[#7c8fff] text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
                  <h4 className="text-white text-lg mb-3 font-medium">Performance Optimization</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Optimizing applications for speed, SEO, and exceptional user experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#7c8fff]/10 to-purple-500/10 backdrop-blur-sm p-8 rounded-2xl border border-[#7c8fff]/20">
                <h3 className="text-2xl font-light text-white mb-3">Ready to work together?</h3>
                <p className="text-gray-400 mb-6 max-w-xl mx-auto text-sm">
                  Let's create something amazing. I'm always excited to take on new challenges.
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-[#7c8fff] text-black px-6 py-3 rounded-lg hover:bg-indigo-500 transition-all duration-300 font-medium hover:transform hover:scale-105 text-sm"
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