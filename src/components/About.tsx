import { FC } from "react";

const About: FC = () => {
  return (
    <div className="min-h-screen relative bg-[#0a0a13] flex items-center">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_80%)] opacity-20"></div>
      
      <div className="relative z-10 w-full p-4 md:p-20 lg:p-60">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Heading */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-6">
              I'm an experienced front-end developer proficient in
              <span className="text-[#7c8fff]"> ReactJS, TailwindCSS, JavaScript</span> since 2022.
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              My experience spans from basic HTML and CSS to advanced ReactJS and TailwindCSS. 
              I've been a web dev for over 3 years, and I'm always looking for new challenges to grow my skills.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#7c8fff] mb-2">3+</div>
              <div className="text-gray-400 text-sm md:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#7c8fff] mb-2">4+</div>
              <div className="text-gray-400 text-sm md:text-base">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#7c8fff] mb-2">100%</div>
              <div className="text-gray-400 text-sm md:text-base">Satisfaction</div>
            </div>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1a1a2e] p-6 rounded-lg border border-gray-800 hover:border-[#7c8fff]/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-[#7c8fff] text-3xl mb-4">💻</div>
              <h3 className="text-white text-xl mb-3 font-medium">Frontend Development</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Creating stellar user interfaces and web experiences using the latest technologies.
              </p>
            </div>

            <div className="bg-[#1a1a2e] p-6 rounded-lg border border-gray-800 hover:border-[#7c8fff]/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-[#7c8fff] text-3xl mb-4">🎨</div>
              <h3 className="text-white text-xl mb-3 font-medium">UX Design</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building intuitive, user-centric designs that drive engagement and conversion.
              </p>
            </div>

            <div className="bg-[#1a1a2e] p-6 rounded-lg border border-gray-800 hover:border-[#7c8fff]/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-[#7c8fff] text-3xl mb-4">📱</div>
              <h3 className="text-white text-xl mb-3 font-medium">Responsive Design</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Designing websites that look and perform equally well on all devices and screen sizes.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;