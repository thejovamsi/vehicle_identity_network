import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import heroBg from "../assets/images/hero.png";

export default function Hero() {
  return (
    // <section
    //   className="relative min-h-screen bg-cover bg-top bg-no-repeat"
    //   style={{
    //     backgroundImage: `url(${heroBg})`,
    //   }}
    // >
    <section className="relative min-h-screen  ">
      {/* Fade image into white */}
      <div className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-b from-transparent to-white" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-10 pt-28">

        {/* LEFT */}
        <div className="w-full lg:w-1/2">

          {/* Badge */}

          {/* Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 35,
              filter: "blur(6px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="mt-8 max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl"
          >
            Your Vehicle
            <br />
            Deserves a{" "}
            <span className="text-blue-300">
              Digital Identity
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 1,
            }}
            className="mt-7 max-w-2xl text-lg leading-8 text-white/80 md:text-xl"
          >
            Register your vehicle once. Receive anonymous notifications.
            Stay connected while keeping your identity private.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1.4,
            }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/register"
              className="rounded-2xl bg-orange-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl"
            >
              Get Started
            </Link>

            <button className="glass rounded-2xl px-8 py-4 font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-1">
              Report Vehicle
            </button>
          </motion.div>

          {/* Small Trust Text */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 1.6,
            }}
            className="mt-10 flex items-center gap-3 text-sm text-white/70"
          >
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full border-2 border-white bg-blue-400" />
              <div className="h-8 w-8 rounded-full border-2 border-white bg-sky-400" />
              <div className="h-8 w-8 rounded-full border-2 border-white bg-cyan-400" />
            </div>

            <p>
              Trusted by early adopters building the future of vehicle identity.
            </p>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="hidden lg:flex w-1/2 items-center justify-center">
          {/* We'll build the floating cards / 3D model later */}
        </div>

      </div>
    </section>
  );
}