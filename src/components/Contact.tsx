import { FC } from "react";

const Contact: FC = () => {
  return (
    <section className="min-h-screen bg-[#0a0a13] flex items-center justify-center relative p-4 md:p-20 lg:p-60">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_80%)] opacity-20"></div>
      
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        
        {/* Main Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
            Let's work <span className="text-[#7c8fff]">together</span>.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            I'm available for freelance work and open to discussing new projects.
            <br />
            Ready to bring your ideas to life.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Email */}
          <a
            href="mailto:manjustify@gmail.com"
            className="bg-[#1a1a2e] p-8 rounded-lg border border-gray-800 hover:border-[#7c8fff]/50 transition-all duration-300 hover:transform hover:scale-105 group"
          >
            <div className="text-[#7c8fff] mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 mx-auto"
              >
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
              </svg>
            </div>
            <h3 className="text-white text-xl mb-2 font-medium">Email</h3>
            <p className="text-gray-400 text-sm">manjustify@gmail.com</p>
          </a>

          {/* Discord */}
          <a
            href="https://discord.com/users/877654517733261342/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a1a2e] p-8 rounded-lg border border-gray-800 hover:border-[#7c8fff]/50 transition-all duration-300 hover:transform hover:scale-105 group"
          >
            <div className="text-[#7c8fff] mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 mx-auto"
              >
                <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
              </svg>
            </div>
            <h3 className="text-white text-xl mb-2 font-medium">Discord</h3>
            <p className="text-gray-400 text-sm">justifyman</p>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/justifyguy/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a1a2e] p-8 rounded-lg border border-gray-800 hover:border-[#7c8fff]/50 transition-all duration-300 hover:transform hover:scale-105 group"
          >
            <div className="text-[#7c8fff] mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 mx-auto"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <h3 className="text-white text-xl mb-2 font-medium">Instagram</h3>
            <p className="text-gray-400 text-sm">@justifyguy</p>
          </a>

        </div>

        {/* Call to Action */}
        <div className="bg-[#1a1a2e] p-8 rounded-lg border border-gray-800">
          <h3 className="text-white text-2xl mb-4 font-medium">Ready to start your project?</h3>
          <p className="text-gray-400 mb-6 text-lg">
            Drop me a message and let's discuss how we can bring your vision to life.
          </p>
          <a
            href="mailto:manjustify@gmail.com"
            className="inline-block bg-[#7c8fff] text-black px-8 py-3 rounded-lg hover:bg-indigo-500 transition-colors duration-300 font-medium"
          >
            Get In Touch
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;