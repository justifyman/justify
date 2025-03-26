import { FC } from "react";

const Projects: FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center relative p-4 md:p-60">
      <div className="space-y-8">
        <h2 className="text-3xl md:text-6xl font-small text-white tracking-tight">
          My <span className="text-[#7c8fff]">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a href="https://muslimthread.com/">
            <div className="bg-[#1a1a2e] rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#7c8fff]/20 hover:bg-[#1a1a2e]/90">
              <div className="h-64 bg-gray-700 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="Images/muslimthread.png"
                  alt=""
                  className="transition-opacity duration-300 hover:opacity-90"
                />
              </div>
              <div className="p-6 bg-[#1a1a2e]/80 backdrop-blur-sm transition-all duration-300 hover:bg-[#1a1a2e]/90">
                <h3 className="text-xl font-semibold text-white mb-2 transition-colors duration-300 hover:text-[#7c8fff]">
                  muslimthread
                </h3>
                <p className="text-gray-400 text-base md:text-xl leading-relaxed transition-colors duration-300 hover:text-gray-300">
                  Your comprehensive resource hub for Islamic knowledge,
                  learning materials, and scholarly works. Made with React &
                  Tailwind
                </p>
              </div>
            </div>
          </a>

          <a href="#">
            <div className="bg-[#1a1a2e] rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#7c8fff]/20 hover:bg-[#1a1a2e]/90">
              <div className="h-64 bg-gray-700 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="Images/comingsoon.png"
                  alt=""
                  className="transition-opacity duration-300 hover:opacity-90"
                />
              </div>
              <div className="p-6 bg-[#1a1a2e]/80 backdrop-blur-sm transition-all duration-300 hover:bg-[#1a1a2e]/90">
                <h3 className="text-xl font-semibold text-white mb-2 transition-colors duration-300 hover:text-[#7c8fff]">
                  Coming Soon 👀
                </h3>
                <p className="text-gray-400 text-base md:text-xl leading-relaxed transition-colors duration-300 hover:text-gray-300">
                  ...
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
