import {
  FaCamera,
  FaPhone,
  FaSpotify,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import { SiUber, SiOpenai, SiX, SiSnapchat } from "react-icons/si";

export default function SocialMediaSection() {
  const left = [
    { icon: FaCamera, label: "Camera" },
    { icon: FaPhone, label: "Phone" },
    { icon: FaSpotify, label: "Spotify" },
    { icon: SiUber, label: "Uber" },
    { icon: SiOpenai, label: "ChatGPT" },
  ];
  const right = [
    { icon: FaInstagram, label: "Instagram" },
    { icon: FaYoutube, label: "YouTube" },
    { icon: SiX, label: "X" },
    { icon: SiSnapchat, label: "Snapchat" },
    { icon: FaFacebook, label: "Facebook" },
  ];

  return (
    <section className="w-full bg-black py-12 px-4 flex items-center justify-center">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-10 md:gap-20 items-stretch">
        {/* Left Column */}
        <div className="flex-1 flex flex-col items-center flex-wrap md:items-center">
          <p className="text-white text-lg md:text-xl font-semibold mb-5 text-center md:text-left">
            Keep the tools
          </p>
          <div className="flex flex-row gap-4 flex-wrap md:gap-6 justify-center md:justify-start">
            {left.map(({ icon: Icon, label }, idx) => (
              <div
                key={label}
                className="
                  bg-[#121212]
                  rounded-xl
                  p-3
                  flex items-center justify-center
                  w-15 h-15
                  cursor-pointer
                  text-white
                  border border-[#212121]
                "
                title={label}
                aria-label={label}
              >
                <Icon size={28} />
              </div>
            ))}
          </div>
        </div>
        {/* Right Column */}
        <div className="flex-1 flex flex-col items-center flex-wrap md:items-center">
          <p className="text-[#888] text-lg md:text-xl font-semibold mb-5 text-center md:text-left">
            Block the distractions
          </p>
          <div className="flex flex-row gap-4 md:gap-6 justify-center flex-wrap md:justify-start">
            {right.map(({ icon: Icon, label }, idx) => (
              <div
                key={label}
                className="
                  bg-[#121212]
                  rounded-xl
                  p-3
                  flex items-center justify-center
                  w-15 h-15
                  cursor-pointer
                  text-[#888]
                  border border-[#212121]
                "
                title={label}
                aria-label={label}
              >
                <Icon size={28} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
