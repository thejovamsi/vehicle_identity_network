import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavButton from "./NavButton";
import { NavLink } from "react-router-dom";
import {useState, useEffect} from "react";

export default function Navbar() {
const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar near the top of the page
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling DOWN -> Hide Navbar
        setIsVisible(false);
      } else {
        // Scrolling UP -> Show Navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);




  return (
    <header className={`fixed top-5 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-16 opacity-0 pointer-events-none'
      }`} >
      <div className="mx-auto flex w-[90%] max-w-7xl items-center justify-between">

        <Logo />

        <nav className="glass hidden md:flex items-center gap-8 px-10 py-3">

          <NavButton sectionId="product">Product</NavButton>

          <NavButton sectionId="how-it-works">
            How It Works
          </NavButton>

          <NavButton sectionId="pricing">
            Pricing
          </NavButton>

           <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-slate-900"
                : "text-slate-500 transition hover:text-slate-900"
            }
          >
            About
          </NavLink>

        </nav>

        <div className="glass px-4 py-3">

          <Link
            to="/login"
            className=" px-4  text-slate-700 transition hover:text-black"
          >
            Log In
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-blue-500 text-white px-6 py-2 font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-lg"
          >
            Get Started
          </Link>

        </div>

      </div>
    </header>
  );
}