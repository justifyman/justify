import { FC, useState } from "react";

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 px-4 md:px-60 py-4 md:py-9 flex justify-between items-center z-50 bg-[#0a0a13]/80 backdrop-blur-sm">
     <a href="#"><div className="text-white text-xl md:text-2xl font-medium">justify</div></a>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-400 hover:text-gray-300"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-5 px-20">
        <a
          href="#hero"
          className="text-gray-400 hover:text-gray-300 transition-colors"
        >
          home
        </a>
        <a
          href="#about"
          className="text-gray-400 hover:text-gray-300 transition-colors"
        >
          about
        </a>
        <a
          href="#projects"
          className="text-gray-400 hover:text-gray-300 transition-colors"
        >
          projects
        </a>
        <a
          href="#contact"
          className="text-gray-400 hover:text-gray-300 transition-colors"
        >
          contact
        </a>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0a0a13]/95 backdrop-blur-sm md:hidden py-4">
          <div className="flex flex-col items-center gap-4">
            <a
              href="#hero"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              about
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              projects
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
