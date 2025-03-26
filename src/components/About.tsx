import { FC } from "react";

const About: FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center relative p-4 md:p-60">
      <div className="space-y-6 md:space-y-8">
        <h2 className="text-3xl md:text-6xl font-small text-white tracking-tight">
          I'm an experienced front-end developer proficient in
          <span className="text-[#7c8fff]">
            {" "}
            ReactJS, TailwindCSS, JavaScript, etc.
          </span>{" "}
          since 2022.
        </h2>
        <p className="text-gray-400 max-w-5xl text-base md:text-xl leading-relaxed">
          My experience spans from basic HTML and CSS to advanced ReactJS and
          TailwindCSS. I've been a web dev for over 3 years, and I'm always
          looking for new challenges to grow my skills. Contact me and we can
          start discussing your next project!
        </p>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-20 pt-6 md:pt-10">
          <div className="space-y-2">
            <h3 className="text-[#7c8fff] text-4xl md:text-5xl font-bold">
              3+
            </h3>
            <p className="text-gray-400">Years of experience</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-[#7c8fff] text-4xl md:text-5xl font-bold">
              4+
            </h3>
            <p className="text-gray-400">Technologies mastered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
