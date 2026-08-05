import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavButton from "./NavButton";

export default function Navbar() {
  return (
    <header className="fixed top-8 left-0 right-0 z-50">
      <div className="mx-auto flex w-[90%] max-w-7xl items-center justify-between">

        <Logo />

        <nav className="glass hidden md:flex items-center gap-10 px-10 py-3">

          <NavButton to="/">Product</NavButton>

          <NavButton to="/how-it-works">
            How It Works
          </NavButton>

          <NavButton to="/pricing">
            Pricing
          </NavButton>

          <NavButton to="/about">
            About
          </NavButton>

        </nav>

        <div className="glass flex items-center gap-2 rounded-2xl border border-white/70 bg-white/70 px-4 py-2 shadow-lg backdrop-blur-xl">

          <Link
            to="/login"
            className=" px-4  text-slate-700 transition hover:text-black"
          >
            Log In
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-blue-500 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-lg"
          >
            Get Started
          </Link>

        </div>

      </div>
    </header>
  );
}