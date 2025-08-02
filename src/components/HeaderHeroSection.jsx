import { useState } from "react";
import { FaApple, FaStar } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function HeaderHeroSection() {
  const [open, setOpen] = useState(false);

  const CurvedLeaf = ({ className = "" }) => (
    <svg
      viewBox="0 0 10.454 21.327"
      width={32}
      height={32}
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6.873 19.643c-.567-.049-1.27.107-1.748.4-.205.117-.235.303-.059.46.44.4 1.113.702 1.69.741a2.587 2.587 0 0 0 1.787-.468c.156-.108.166-.274.02-.41-.43-.4-1.104-.684-1.69-.723Zm2.05-3.3c-.312.478-.488 1.18-.468 1.747.039.596.312 1.28.693 1.7.127.146.283.146.41-.01.381-.45.586-1.163.527-1.768-.039-.566-.322-1.24-.712-1.69-.147-.175-.323-.165-.45.02Zm-4.804.653a3.112 3.112 0 0 0-1.817-.048c-.215.068-.273.234-.156.43.322.497.899.956 1.436 1.152a2.56 2.56 0 0 0 1.845-.01c.186-.069.235-.215.127-.39a2.927 2.927 0 0 0-1.435-1.134ZM6.93 14.34c-.42.381-.781 1.006-.888 1.563-.127.585-.04 1.318.224 1.816.078.186.235.215.4.098.47-.342.85-.977.948-1.582.117-.557.02-1.29-.244-1.817-.088-.215-.274-.244-.44-.078ZM.007 13.217c.079.566.42 1.23.84 1.64.41.43 1.084.723 1.69.743.195.01.302-.117.273-.313-.098-.595-.44-1.23-.86-1.611-.42-.4-1.064-.713-1.63-.781-.234-.03-.352.098-.313.322Zm5.596-.84a3.228 3.228 0 0 0-1.445 1.074c-.352.46-.557 1.153-.537 1.758.02.186.146.284.341.254.586-.137 1.202-.556 1.514-1.064.322-.498.537-1.192.498-1.768 0-.234-.146-.332-.37-.254Zm-1.63-2.285c-.46.371-.84.996-.958 1.572-.03.176.069.313.254.323.606.02 1.299-.245 1.738-.635.44-.381.83-1.016.957-1.582.03-.215-.087-.362-.302-.352-.586.05-1.26.303-1.69.674ZM.016 8.812a3.074 3.074 0 0 0 .41 1.798c.293.527.87.986 1.436 1.142.176.059.332-.039.351-.234.059-.557-.107-1.27-.42-1.777-.312-.489-.869-.958-1.386-1.163-.205-.087-.371 0-.39.235Zm4.494-2c-.556.195-1.132.635-1.445 1.142-.107.157-.049.323.127.4.557.225 1.29.225 1.846 0 .566-.214 1.152-.683 1.435-1.18.117-.177.059-.343-.156-.411-.557-.156-1.28-.146-1.807.049Zm-3.28-2.56C.973 4.79.876 5.512.983 6.078c.107.596.488 1.221.977 1.573.146.117.302.068.4-.108.254-.508.342-1.23.215-1.806-.117-.567-.489-1.192-.899-1.582-.156-.137-.341-.098-.449.097Zm5.048-.254c-.576.108-1.211.479-1.572.928-.118.137-.088.303.068.41.518.303 1.25.4 1.826.244a3.157 3.157 0 0 0 1.582-.937c.147-.176.108-.352-.097-.44a3.163 3.163 0 0 0-1.807-.205ZM3.397.99c-.333.499-.528 1.211-.49 1.778.01.596.304 1.27.733 1.7.147.136.313.116.42-.04.322-.498.518-1.21.469-1.777-.04-.557-.303-1.221-.674-1.68-.156-.176-.332-.156-.459.02ZM8.434.004c-.566.088-1.21.43-1.621.83-.41.4-.732 1.074-.8 1.64-.02.196.087.313.282.304a2.532 2.532 0 0 0 1.67-.801c.391-.41.713-1.065.801-1.65.02-.225-.097-.352-.332-.323Z"
        fill="#fff"
        fillOpacity=".85"
      ></path>
    </svg>
  );

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
          className={`md:hidden fixed top-16 left-0 right-0 bg-black/80 py-6 px-8 z-30 transition-transform duration-700 ease-in-out ${
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
              placeholder="Email"
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
        <div className="text-center px-4 mt-8 md:mt-20 max-w-xl mx-auto">
          {/* Static Rating Section */}

          <div className="flex flex-row items-center justify-center mb-8 gap-2 sm:gap-2 md:gap-4">
            {/* Left Leaf */}
            <CurvedLeaf className="w-6 h-16 sm:w-8 sm:h-20 md:w-10 md:h-24 opacity-70" />

            {/* Review Content */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-4 mb-1">
                {/* Stars */}
                <div className="flex space-x-1 text-white">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={18}
                      className="sm:text-xl md:text-2xl"
                    />
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="text-white font-bold text-base sm:text-lg md:text-xl mb-1">
                4.8/5
              </div>

              {/* Reviews */}
              <div className="text-gray-300 text-xs sm:text-x md:text-base">
                628+ Reviews
              </div>
            </div>

            {/* Right Leaf */}
            <CurvedLeaf className="w-6 h-16 sm:w-8 sm:h-20 md:w-10 md:h-24 opacity-70 -scale-x-100" />
          </div>

          {/* Headline */}
          <h2 className="font-extrabold drop-shadow mb-5  custom-gradient-heading text-3xl tracking-wide sm:text-4xl md:text-6xl">
            Set Your Mind Free
          </h2>

          <p className="text-base sm:text-lg md:text-2xl text-[#ffffff7f] mb-10">
            The Physical Solution to Digital Distractions.
          </p>

          <div className="flex items-center justify-center gap-3 sm:gap-5">
            <a
              href="#"
              className="
      flex items-center gap-2
      px-3 py-2 sm:px-5 sm:py-3
      text-sm sm:text-base md:text-lg
      font-semibold rounded-2xl 
      bg-black/80 text-white 
      hover:bg-black/95 shadow transition
    "
            >
              <FaApple size={18} />
              <span className="hidden xs:inline">Download App</span>
              <span className="xs:hidden sm:inline">Download</span>
            </a>
            <a
              href="#"
              className="
      px-3 py-2 sm:px-5 sm:py-3
      rounded-2xl bg-white text-black 
      text-sm sm:text-base md:text-lg
      font-semibold 
      shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]
      hover:shadow-[0_0_10px_6px_rgba(255,255,255,1)]
      hover:bg-white transition
      focus:outline-none focus:ring-2 focus:ring-white
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
