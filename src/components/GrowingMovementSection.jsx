export default function GrowingSection() {
  const images = [
    "/user1.png",
    "/user2.png",
    "/user3.png",
    "/user4.png",
    "/user5.png",
    "/user6.png",
    "/user7.png",
  ];

  const row1 = images;
  const row2 = images;
  const row3 = images;

  return (
    <section className="w-full bg-black py-16 overflow-hidden border-t border-[#212121]">
      <h2 className="text-2xl md:text-4xl text-white text-center mb-14">
        Join a growing movement
      </h2>

      <div className="space-y-4">
        {/* Row 1: right → left */}
        <div className="flex gap-4 animate-scroll-right-to-left">
          {[...row1, ...row1].map((src, idx) => (
            <div
              key={`row1-${idx}`}
              className="flex-shrink-0 w-28 h-36 md:w-36 md:h-44 rounded-xl overflow-hidden shadow-lg transform hover:scale-110 transition-transform duration-300"
            >
              <img
                src={src}
                alt={`Community member ${idx + 1}`}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Row 2: left → right */}
        <div className="flex gap-4 animate-scroll-left-to-right">
          {[...row2, ...row2].map((src, idx) => (
            <div
              key={`row2-${idx}`}
              className="flex-shrink-0 w-28 h-36 md:w-36 md:h-44 rounded-xl overflow-hidden shadow-lg transform hover:scale-110 transition-transform duration-300"
            >
              <img
                src={src}
                alt={`Community member ${idx + 8}`}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Row 3: right → left */}
        <div className="flex gap-4 animate-scroll-right-to-left">
          {[...row3, ...row3].map((src, idx) => (
            <div
              key={`row3-${idx}`}
              className="flex-shrink-0 w-28 h-36 md:w-36 md:h-44 rounded-xl overflow-hidden shadow-lg transform hover:scale-110 transition-transform duration-300"
            >
              <img
                src={src}
                alt={`Community member ${idx + 15}`}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Centered Join Button */}
      <div className="flex justify-center mt-12">
        <a
          href="#"
          className="
            px-7 py-3 rounded-2xl bg-white text-black text-base md:text-lg font-semibold
            shadow-[0_0_16px_2px_rgba(255,255,255,0.8)]
            hover:shadow-[0_0_32px_8px_rgba(255,255,255,1)]
            hover:bg-white transition
            focus:outline-none focus:ring-2 focus:ring-white
          "
        >
          Join
        </a>
      </div>
    </section>
  );
}
