/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-[70vh] flex flex-col md:flex-row items-center justify-between">
      {/* Left Side - Text Content */}
      <div className="container px-6 mx-auto text-white md:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
            Hey, I'm <span className="text-cyan-400">Dollar Sid</span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl">
            Software engineer focused on building reliable full-stack web apps.
            I love building products that work offline & online, and solving real
            problems with clean code.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#projects"
              className="px-5 py-3 rounded-xl bg-cyan-400 text-[#0f172a] font-semibold"
            >
              Explore WeSigned
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-xl border border-cyan-400 text-gray-200 hover:bg-cyan-400 hover:text-[#0f172a] transition"
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Video Content */}
      <motion.div
        className="md:w-1/2 w-full px-6 mt-8 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="relative w-full max-w-[500px] aspect-video bg-linear-to-t from-cyan-800 to-cyan-300 overflow-hidden rounded-2xl shadow-lg">
                <video
                    src="/hero_vid.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-contain"
                />
            </div>
        
        </motion.div>
    </section>
  );
}

export default Hero;