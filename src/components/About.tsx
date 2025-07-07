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
    { name: "Tailwind CSS", level: 100, color: "#06B6D4" },
    { name: "JavaScript", level: 95, color: "#F7DF1E" },
    { name: "HTML/CSS", level: 100, color: "#E34F26" },
  ];

  return (
    <div id="about-section" className="min-h-screen relative overflow-hidden bg-[#0a0a13]">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_80%)] opacity-30"></div>

      <div className="relative z-10 flex flex-col justify-center min-h-screen p-4 md:p-60">
        <div className="space-y-8">
          {/* Main heading - matching Hero section style */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-2xl md:text-6xl font-small text-white tracking-tight">
              I'm an experienced front-end developer proficient in
              <span className="text-[#7c8fff]">
                {" "}
                ReactJS, TailwindCSS, JavaScript, etc.
              </span>{" "}
              since 2022.
            </h2>
          </div>
          
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <p className="text-gray-400 max-w-5xl text-sm md:text-xl leading-relaxed">
              My experience spans from basic HTML and CSS to advanced ReactJS and
              TailwindCSS. I've been a web dev for over 3 years, and I'm always
              looking for new challenges to grow my skills. Contact me and we can
              start discussing your next project!
            </p>
          </div>

          {/* Stats Section - matching original style */}
          <div className={`flex flex-col sm:flex-row gap-6 sm:gap-20 pt-4 md:pt-10 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="space-y-1 md:space-y-2">
              <h3 className="text-[#7c8fff] text-3xl md:text-5xl font-bold">
                3+
              </h3>
              <p className="text-gray-400 text-sm md:text-base">Years of experience</p>
            </div>
            <div className="space-y-1 md:space-y-2">
              <h3 className="text-[#7c8fff] text-3xl md:text-5xl font-bold">
                Several
              </h3>
              <p className="text-gray-400 text-sm md:text-base">Projects completed</p>
            </div>
            <div className="space-y-1 md:space-y-2">
              <h3 className="text-[#7c8fff] text-3xl md:text-5xl font-bold">
                4+
              </h3>
              <p className="text-gray-400 text-sm md:text-base">Technologies mastered</p>
            </div>
          </div>

          {/* Skills Section */}
          <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h3 className="text-white text-xl md:text-2xl font-medium mb-6">Technical Skills</h3>
            <div className="space-y-6 max-w-2xl">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium text-sm md:text-base">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#1a1a2e] rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        backgroundColor: skill.color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section - matching original card style */}
          <div className={`transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#1a1a2e] p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <div className="text-[#7c8fff] text-2xl mb-4">⚡</div>
                <h3 className="text-white text-xl mb-2">Frontend Development</h3>
                <p className="text-gray-400">
                  Creating stellar user interfaces and web experiences using the
                  latest technologies.
                </p>
              </div>

              <div className="bg-[#1a1a2e] p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <div className="text-[#7c8fff] text-2xl mb-4">🎨</div>
                <h3 className="text-white text-xl mb-2">UX Design</h3>
                <p className="text-gray-400">
                  Building intuitive, user-centric designs that drive engagement
                  and conversion.
                </p>
              </div>

              <div className="bg-[#1a1a2e] p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <div className="text-[#7c8fff] text-2xl mb-4">📱</div>
                <h3 className="text-white text-xl mb-2">Responsive Design</h3>
                <p className="text-gray-400">
                  Designing websites that look and perform equally well on all
                  devices and screen sizes.
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