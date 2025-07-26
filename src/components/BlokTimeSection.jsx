import { useEffect, useRef, useState } from "react";

export default function BlokTimeSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const cards = [
    {
      id: 1,
      backgroundImage: "/blog1.png",
      buttonText: "Explore",
      bottomText: "More time in nature",
    },
    {
      id: 2,
      backgroundImage: "/blog2.png",
      buttonText: "Connect",
      bottomText: "More time with loved ones",
    },
    {
      id: 3,
      backgroundImage: "/blog3.png",
      buttonText: "Create",
      bottomText: "More time reading & writing",
    },
    {
      id: 4,
      backgroundImage: "/blog4.png",
      buttonText: "Become",
      bottomText: "More time being mindful",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black px-4 py-16 border-t border-[#212121]"
    >
      <h2 className="text-xl md:text-3xl text-white text-center mb-12 max-w-3xl mx-auto">
        Blok gifts you the most valuable asset in life - time.
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`
              group cursor-pointer relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg transform transition-all duration-700 ease-out
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }
            `}
            style={{
              transitionDelay: `${index * 150}ms`,
            }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-out group-hover:scale-110 cursor-pointer"
              style={{
                backgroundImage: `url(${card.backgroundImage})`,
              }}
            />

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Responsive Transparent Button with smaller font */}
            <div className="absolute top-1 left-1 md:top-2 md:left-2">
              <button
                className="px-2 py-1 md:px-3 md:py-2 bg-white/20 backdrop-blur-sm text-white text-[10px] md:text-xs font-medium rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300
"
              >
                {card.buttonText}
              </button>
            </div>

            {/* Bottom Text - Responsive */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <p className="text-white text-sm md:text-base font-medium">
                {card.bottomText}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
