
// import { color } from "framer-motion";
import Logo from "../Components/Logo";

export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-visible bg-[#3E97E2]">

      {/* White → blue fade above footer */}
      <div
        className="absolute left-0 right-0 top-0 h-58"
        style={{
          background:
            "linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0.85) 25%, rgba(255,255,255,0.35) 60%, rgba(62,151,226,0) 100%)",
          transform: "translateY(-1px)",
        }}
      />

      {/* Moving clouds */}
      <div className="footer-sky" aria-hidden="true">
        <span className="footer-cloud footer-cloud-a footer-cloud-1" />
        <span className="footer-cloud footer-cloud-b footer-cloud-2" />
        <span className="footer-cloud footer-cloud-a footer-cloud-3" />
        <span className="footer-cloud footer-cloud-b footer-cloud-4" />
        <span className="footer-cloud footer-cloud-a footer-cloud-5" />
      </div>

      {/* Footer content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-3 pt-48">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <Logo />

            <p className="mt-5 max-w-xs text-sm leading-6 text-black/75">
              A digital identity layer for every vehicle.
              Stay connected without compromising privacy.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-black">
              Product
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-black/70">
              <a href="#product" className="hover:text-black">
                Product
              </a>
              <a href="#how-it-works" className="hover:text-black">
                How It Works
              </a>
              <a href="#pricing" className="hover:text-black">
                Pricing
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-black">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-black/70">
              <a href="#about" className="hover:text-black">
                About
              </a>
              <a href="#" className="hover:text-black">
                Contact
              </a>
              <a href="#" className="hover:text-black">
                Privacy
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-black">
              Get Started
            </h3>

            <p className="mt-4 text-sm leading-6 text-black/70">
              Give your vehicle a digital identity today.
            </p>

            <a
              href="/register"
              className="mt-5 inline-flex rounded-xl bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get Started
            </a>
          </div>

        </div>

        <div className="mt-16 border-t border-black/20 pt-6 text-sm text-white/60">
          © 2026 DriveID. All rights reserved.
        </div>
      </div>
{/* Giant DriveID footer branding */}
<div className="relative z-10 mt-2 h-[25vw] overflow-hidden">
  <h2
    className="
      px-8 py-5 text-[#FFD166]
      absolute
      bottom-0
      left-1/2
      -translate-x-1/2
      whitespace-nowrap
      text-[clamp(8rem,25vw,28rem)]
      font-black
      text-border
      leading-[0.65]
      tracking-[-0.03em]
      select-none
    "
     style={{
    WebkitTextStroke: "2px rgba(255, 255, 255, 0.8)",
  }}
  >
    DriveID
  </h2>
</div>
<div
    className="pointer-events-none absolute bottom-0 left-0 z-20 h-25 w-full"
    style={{
      background:
        "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.9) 100%)",
    }}
  />

    </footer>
  );
}