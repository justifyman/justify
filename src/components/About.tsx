import { FC, useEffect, useState } from "react";

const About: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "React", level: 95, color: "#61DAFB" },
    { name: "TypeScript", level: 90, color: "#3178C6" },
    { name: "Tailwind CSS", level: 98, color: "#06B6D4" },
    { name: "JavaScript", level: 92, color: "#F7DF1E" },
    { name: "HTML/CSS", level: 96, color: "#E34F26" },
    { name: "Node.js", level: 85, color: "#339933" }
  ];

  return (
    <div id="about-section" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0a0a13] via-[#0f0f1e] to-[#1a1a2e]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#7c8fff]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_80%)] opacity-30"></div>

      <div className="relative z-10 flex flex-col justify-center min-h-screen p-4 md:p-16 lg:p-32">
        <div className="max-w-7xl mx-auto">
          {/* Main heading with staggered animation */}
          <div className="mb-16">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <h2 className="text-4xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-tight mb-6">
                About{" "}
                <span className="relative inline-block">
                  <span className="text-[#7c8fff] relative z-10">Me</span>
                  <div className="absolute inset-0 bg-[#7c8fff]/20 blur-xl rounded-lg transform scale-110"></div>
                </span>
              </h2>
            </div>
            
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl leading-relaxed">
                I'm a passionate{" "}
                <span className="text-[#7c8fff] font-medium relative">
                  front-end developer
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#7c8fff] to-transparent"></div>
                </span>{" "}
                with over 3 years of experience crafting digital experiences that blend{" "}
                <span className="text-white font-medium">creativity</span> with{" "}
                <span className="text-white font-medium">functionality</span>.
              </p>
            </div>
          </div>

          {/* Stats and Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Stats Section */}
            <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-8">Experience & Impact</h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="group">
                  <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2a2a3e] p-6 rounded-2xl border border-[#7c8fff]/20 hover:border-[#7c8fff]/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-4xl md:text-6xl font-bold text-[#7c8fff] mb-2 group-hover:text-white transition-colors">
                      3+
                    </div>
                    <p className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors">
                      Years of Experience
                    </p>
                  </div>
                </div>
                
                <div className="group">
                  <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2a2a3e] p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-4xl md:text-6xl font-bold text-purple-400 mb-2 group-hover:text-white transition-colors">
                      15+
                    </div>
                    <p className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors">
                      Projects Completed
                    </p>
                  </div>
                </div>
                
                <div className="group">
                  <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2a2a3e] p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-4xl md:text-6xl font-bold text-blue-400 mb-2 group-hover:text-white transition-colors">
                      6+
                    </div>
                    <p className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors">
                      Technologies Mastered
                    </p>
                  </div>
                </div>
                
                <div className="group">
                  <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2a2a3e] p-6 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-4xl md:text-6xl font-bold text-green-400 mb-2 group-hover:text-white transition-colors">
                      100%
                    </div>
                    <p className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors">
                      Client Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#1a1a2e] rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          backgroundColor: skill.color,
                          boxShadow: `0 0 10px ${skill.color}40`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services/Specializations */}
          <div className={`transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h3 className="text-2xl md:text-3xl font-medium text-white mb-8 text-center">What I Do Best</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative">
                <div className="bg-gradient-to-br from-[#1a1a2e] via-[#2a2a3e] to-[#1a1a2e] p-8 rounded-2xl border border-[#7c8fff]/20 hover:border-[#7c8fff]/40 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
                  <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-[#7c8fff] transition-colors">
                    Frontend Development
                  </h4>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    Creating lightning-fast, responsive web applications with modern frameworks and cutting-edge technologies.
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7c8fff]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              <div className="group relative">
                <div className="bg-gradient-to-br from-[#1a1a2e] via-[#2a2a3e] to-[#1a1a2e] p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:-rotate-1">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🎨</div>
                  <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    UI/UX Design
                  </h4>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    Designing intuitive, user-centric interfaces that provide exceptional user experiences and drive engagement.
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              <div className="group relative">
                <div className="bg-gradient-to-br from-[#1a1a2e] via-[#2a2a3e] to-[#1a1a2e] p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">📱</div>
                  <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    Responsive Design
                  </h4>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    Building websites that look stunning and perform flawlessly across all devices and screen sizes.
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 transform transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to bring your vision to life? Let's collaborate and create something extraordinary together.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#7c8fff] to-purple-500 text-white px-8 py-4 rounded-full font-medium hover:from-purple-500 hover:to-[#7c8fff] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#7c8fff]/25"
            >
              Let's Work Together
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;