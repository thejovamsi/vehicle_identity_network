import heroBg from "../assets/images/hero.png"
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="absolute bottom-0 left-0 h-14 w-full bg-gradient-to-b from-transparent to-[#b0def2]" />

  <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-8n pt-20">

    {/* Left */}
    <div className="w-full pl-10 lg:w-1/2">

      {/* Badge */}

      {/* Heading */}
      <h1 className="max-w-5xl text-3xl text-white  leading-tight tracking-tight md:text-7xl">
        Your Vehicle
        <br />
        Deserves a{" "}
        <span className="text-white">
          digital Identity
        </span>
      </h1>

      {/* Subtitle */}
        <p className="mt-6 max-w-3xl text-lg text-white/80 md:text-xl">
          Register your vehicle once. Receive anonymous notifications.
          Stay connected while keeping your identity private.
        </p>

      {/* Buttons */}
      <div className="mt-12 flex gap-4">
        <Link
          to="/register"
          className="rounded-2xl bg-blue-500 px-8 py-4 font-semibold text-white hover:bg-blue-600"
        >
          Get Started
        </Link>

        <button className="glass rounded-2xl px-8 py-4 font-semibold">
          Report Vehicle
        </button>
      </div>

    </div>

    {/* Right */}

    <div className="hidden lg:flex w-1/2 items-center justify-center">
    </div>

  </div>
</section>
  )
}

