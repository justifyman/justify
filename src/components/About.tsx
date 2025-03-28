import { FC } from "react";

const About: FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center relative p-4 md:p-60">
      <div className="space-y-4 md:space-y-8">
        <h2 className="text-2xl md:text-6xl font-small text-white tracking-tight">
          I'm an experienced front-end developer proficient in
          <span className="text-[#7c8fff]">
            {" "}
            ReactJS, TailwindCSS, JavaScript, etc.
          </span>{" "}
          since 2022.
        </h2>
        <p className="text-gray-400 max-w-5xl text-sm md:text-xl leading-relaxed">
          My experience spans from basic HTML and CSS to advanced ReactJS and
          TailwindCSS. I've been a web dev for over 3 years, and I'm always
          looking for new challenges to grow my skills. Contact me and we can
          start discussing your next project!
        </p>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-20 pt-4 md:pt-10">
          <div className="space-y-1 md:space-y-2">
            <h3 className="text-[#7c8fff] text-3xl md:text-5xl font-bold">
              3+
            </h3>
            <p className="text-gray-400 text-sm md:text-base">Years of experience</p>
          </div>
          <div className="space-y-1 md:space-y-2">
            <h3 className="text-[#7c8fff] text-3xl md:text-5xl font-bold">
              4+
            </h3>
            <p className="text-gray-400 text-sm md:text-base">Technologies mastered</p>
          </div>
           
        </div>

        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#1a1a2e] p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#7c8fff]/20 hover:-translate-y-1">
              <div className="text-[#7c8fff] text-2xl mb-4">⌨️</div>
              <h3 className="text-white text-xl mb-2">Frontend Development</h3>
              <p className="text-gray-400">
                Creating stellar user interfaces and web experiences using the
                latest technologies.
              </p>
            </div>

            <div className="bg-[#1a1a2e] p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#7c8fff]/20 hover:-translate-y-1">
              <div className="text-[#7c8fff] text-2xl mb-4">🎨</div>
              <h3 className="text-white text-xl mb-2">UX Design</h3>
              <p className="text-gray-400">
                Building intuitive, user-centric designs that drive engagement
                and conversion.
              </p>
            </div>

            <div className="bg-[#1a1a2e] p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#7c8fff]/20 hover:-translate-y-1">
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
  );
};

export default About;
