import { FaInstagram, FaYoutube, FaXTwitter, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative w-full min-h-[420px] sm:h-[60vh] md:h-[60vh] bg-black overflow-hidden flex flex-col justify-between">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/footer-background.png"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          draggable={false}
        />
      </div>

      {/* Centered Content Stack */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full flex-grow px-6 py-12 sm:py-16">
        {/* Logo */}
        <img
          src="/logo.avif"
          alt="Blok"
          className="w-24 sm:w-28 md:w-32 mb-4"
          draggable={false}
        />

        <h3 className="text-xl sm:text-2xl md:text-3xl text-white mb-5 drop-shadow-lg">
          Break free from distractions
        </h3>

        <a
          href="#"
          className="px-6 sm:px-8 py-3 rounded-2xl bg-white text-black text-base md:text-lg font-semibold
            shadow-[0_0_16px_2px_rgba(255,255,255,0.8)] 
            hover:shadow-[0_0_32px_8px_rgba(255,255,255,1)]
            hover:bg-white transition
            focus:outline-none focus:ring-2 focus:ring-white
            mb-4"
        >
          Get Blok
        </a>
      </div>

      {/* Footer Bottom Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-4 space-y-4 sm:space-y-0 text-gray-300">
        {/* Links */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5 text-sm">
          <a href="#" className="hover:underline transition">
            Terms & Conditions
          </a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:underline transition">
            Privacy Policy
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 sm:gap-6">
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-white transition"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="hover:text-white transition"
          >
            <FaYoutube size={22} />
          </a>
          <a href="#" aria-label="X" className="hover:text-white transition">
            <FaXTwitter size={22} />
          </a>
          <a
            href="#"
            aria-label="TikTok"
            className="hover:text-white transition"
          >
            <FaTiktok size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
