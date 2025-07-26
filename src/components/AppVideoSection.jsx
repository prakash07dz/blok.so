import { useState } from "react";
import { PiArrowBendDownRightFill } from "react-icons/pi";

export default function AppVideoSection() {
  const [playing, setPlaying] = useState(false);

  // Poster image URL — you can replace this with your own cover image link
  const poster = "/youtube-poster.webp";

  return (
    <section className="w-full bg-black px-4 py-16 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
      {/* LEFT: Text and Icon */}
      <div className="flex flex-col items-center md:items-center md:w-2/5 w-full max-w-sm">
        <p className="text-gray-400 text-xl mb-6">The app in two minutes</p>
        <PiArrowBendDownRightFill
          size={48}
          className="text-gray-400"
          aria-label="Arrow pointing to video"
        />
      </div>

      {/* RIGHT: Video */}
      <div className="relative w-full md:w-3/5 aspect-video rounded-2xl shadow-lg overflow-hidden bg-black flex items-center justify-center">
        {!playing ? (
          <div
            className="w-full h-full relative cursor-pointer flex items-center justify-center group"
            onClick={() => setPlaying(true)}
            aria-label="Play video"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setPlaying(true);
            }}
          >
            {/* Poster Image */}
            <img
              src={poster}
              alt="Video cover"
              className="absolute w-full h-full object-cover"
              draggable={false}
            />
            {/* Overlay */}
            <div className="absolute  bg-black border-2 border-white  bg-opacity-40 transition group-hover:bg-opacity-60" />
            {/* Play button overlay */}
            <div className="relative z-10 flex items-center justify-center">
              <svg
                width="72"
                height="72"
                viewBox="0 0 100 100"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="50" cy="50" r="48" fill="#FFF" fillOpacity="0.85" />
                <polygon points="40,32 72,50 40,68" fill="#111" />
              </svg>
            </div>
          </div>
        ) : (
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Vy80tyFL8Lc?autoplay=1&mute=0&rel=0&playsinline=1"
            title="App Overview Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            frameBorder="0"
            loading="lazy"
          />
        )}
      </div>
    </section>
  );
}
