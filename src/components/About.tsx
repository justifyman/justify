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

  const technologies = [
    { name: "React", icon: "⚛️", description: "Component-based UI library" },
    { name: "TailwindCSS", icon: "🎨", description: "Utility-first CSS framework" },
    { name: "JavaScript", icon: "⚡", description: "Modern ES6+ development" },
    { name: "TypeScript", icon: "🔷", description: "Type-safe development" },
  ];

  const achievements = [
    { number: "3+", label: "Years Experience", delay: "delay-300" },
    { number: "15+", label: "Projects Completed", delay: "delay-500" },
    { number: "100%", label: "Client Satisfaction", delay: "delay-700" },
  ];

  return (
    <div id="about-section" className="min-h-screen relative bg-[#0a0a13] flex items-center">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_80%)] opacity-20"></div>
      
      <div className="relative z-10 w-full p-4 md:p-20 lg:p-60">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-3xl md:text-6xl font-small text-white tracking-tight mb-6">
              About <span className="text-[#7c8fff]">Me</span>
            </h2>
            <div className="w-24 h-1 bg-[#7c8fff] mx-auto rounded-full"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            
            {/* Left Side - Story */}
            <div className={`space-y-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl text-white font-medium">
                  Crafting Digital Experiences Since 2022
                </h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  I'm a passionate front-end developer who transforms ideas into stunning, 
                  interactive web experiences. My journey began with curiosity about how 
                  websites work, and has evolved into a deep expertise in modern web technologies.
                </p>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  I specialize in creating responsive, user-friendly interfaces that not only 
                  look beautiful but also provide exceptional user experiences across all devices.
                </p>
              </div>

              {/* Call to Action */}
              <div className="pt-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 bg-[#7c8fff] text-black px-6 py-3 rounded-lg hover:bg-indigo-500 transition-all duration-300 font-medium"
                >
                  Let's Work Together
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Side - Technologies */}
            <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <h3 className="text-xl md:text-2xl text-white font-medium mb-6">Technologies I Love</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div 
                    key={tech.name}
                    className={`bg-[#1a1a2e] p-4 rounded-lg border border-gray-800 hover:border-[#7c8fff]/30 transition-all duration-300 hover:transform hover:scale-105 ${isVisible ? 'animate-fade-in' : ''}`}
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="text-2xl mb-2">{tech.icon}</div>
                    <h4 className="text-white font-medium mb-1">{tech.name}</h4>
                    <p className="text-gray-400 text-sm">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="bg-[#1a1a2e] rounded-2xl p-8 md:p-12 border border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {achievements.map((achievement, index) => (
                  <div 
                    key={achievement.label}
                    className={`transform transition-all duration-1000 ${achievement.delay} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  >
                    <div className="text-3xl md:text-5xl font-bold text-[#7c8fff] mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-gray-400 text-sm md:text-base font-medium">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services Preview */}
          <div className={`mt-16 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h3 className="text-xl md:text-2xl text-white font-medium text-center mb-8">What I Do Best</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="group bg-[#1a1a2e] p-6 rounded-xl border border-gray-800 hover:border-[#7c8fff]/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-[#7c8fff]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#7c8fff]/20 transition-colors">
                  <span className="text-[#7c8fff] text-xl">💻</span>
                </div>
                <h4 className="text-white text-lg font-medium mb-2">Frontend Development</h4>
                <p className="text-gray-400 text-sm">
                  Building responsive, interactive web applications with modern frameworks and best practices.
                </p>
              </div>

              <div className="group bg-[#1a1a2e] p-6 rounded-xl border border-gray-800 hover:border-[#7c8fff]/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-[#7c8fff]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#7c8fff]/20 transition-colors">
                  <span className="text-[#7c8fff] text-xl">🎨</span>
                </div>
                <h4 className="text-white text-lg font-medium mb-2">UI/UX Design</h4>
                <p className="text-gray-400 text-sm">
                  Creating intuitive, beautiful interfaces that provide exceptional user experiences.
                </p>
              </div>

              <div className="group bg-[#1a1a2e] p-6 rounded-xl border border-gray-800 hover:border-[#7c8fff]/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-[#7c8fff]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#7c8fff]/20 transition-colors">
                  <span className="text-[#7c8fff] text-xl">📱</span>
                </div>
                <h4 className="text-white text-lg font-medium mb-2">Responsive Design</h4>
                <p className="text-gray-400 text-sm">
                  Ensuring perfect functionality and aesthetics across all devices and screen sizes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;