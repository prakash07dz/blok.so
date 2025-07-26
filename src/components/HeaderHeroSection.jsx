import { useState } from "react";
import { FaApple, FaStar } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function HeaderHeroSection() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
        style={{ zIndex: 0 }}
        src="/video-placeholder.mp4"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50">
        <nav className="flex items-center justify-between py-4 px-3 md:px-10 bg-black/60 backdrop-blur-md">
          {/* Left: Logo + Links */}
          <div className="flex items-center gap-8">
            <img
              src="/logo.avif"
              alt="Logo"
              className="h-6 w-auto"
              loading="lazy"
            />
            <ul className="hidden md:flex gap-6">
              <li>
                <a
                  href="#shop"
                  className="text-[#74777b] font-medium hover:text-white transition"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-[#74777b] font-medium hover:text-white transition"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#74777b] font-medium hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Right: Email & Join */}
          <form
            className="hidden md:flex items-center gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 rounded-2xl bg-[#2B2B2B] text-[#74777b] placeholder-gray-400 focus:outline-none"
            />
            <a
              href="#"
              className="
    px-3
    py-2
    rounded-2xl 
    bg-white 
    text-black 
    text-base 
    md:text-lg 
    font-semibold 
    shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]
    hover:shadow-[0_0_10px_6px_rgba(255,255,255,1)]
    hover:bg-white
    transition
    focus:outline-none
    focus:ring-2
    focus:ring-white
  "
            >
              Get Blok
            </a>
          </form>
          {/* Mobile Nav */}
          <button
            className="md:hidden text-white text-3xl focus:outline-none"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </nav>
        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden fixed top-16 left-0 right-0 bg-black/80 py-6 px-8 z-30 transition-transform ${
            open ? "translate-y-0" : "-translate-y-[200%]"
          }`}
        >
          <ul className="flex flex-col gap-5 mb-5">
            <li>
              <a
                href="#shop"
                className="text-[#74777b] font-medium hover:text-white "
                onClick={() => setOpen(false)}
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="text-[#74777b] font-medium hover:text-white "
                onClick={() => setOpen(false)}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-[#74777b] font-medium hover:text-white "
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
          <form
            className="flex items-center gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded bg-white/80 text-black placeholder-gray-400 focus:outline-none w-full"
            />
            <button
              className="
    px-4 py-2 
    bg-white 
    text-black 
    rounded 
    font-semibold 
    shadow-[0_0_10px_2px_rgba(255,255,255,0.7)]
    transition
    hover:shadow-[0_0_10px_4px_rgba(255,255,255,1)]
    hover:bg-white
    focus:outline-none
    focus:ring-2
    focus:ring-white
  "
              type="submit"
            >
              Join
            </button>
          </form>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center h-screen w-full z-20"
        style={{ minHeight: "100vh" }}
      >
        <div className="text-center px-4 mt-15 md:mt-20 max-w-xl mx-auto">
          {/* Static Rating Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex space-x-1 text-white">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={20} />
              ))}
            </div>
            <div className="text-white font-bold text-lg mt-1">4.8/5</div>
            <div className="text-gray-300 text-sm mt-1">628+ reviews</div>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-5xl drop-shadow mb-5 tracking-tight custom-gradient-heading">
            Set Your Mind Free
          </h2>

          <p className="text-lg md:text-2xl text-[#ffffff7f] mb-10 ">
            The Physical Solution to Digital Distractions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#"
              className="flex items-center gap-3 px-5 py-3 text-base md:text-lg font-semibold rounded-2xl bg-black/80 text-white hover:bg-black/95 shadow transition"
            >
              <FaApple size={24} />
              Download App
            </a>
            <a
              href="#"
              className="
    px-5 
    py-3 
    rounded-2xl 
    bg-white 
    text-black 
    text-base 
    md:text-lg 
    font-semibold 
    shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]
    hover:shadow-[0_0_10px_6px_rgba(255,255,255,1)]
    hover:bg-white
    transition
    focus:outline-none
    focus:ring-2
    focus:ring-white
  "
            >
              Get Blok
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
