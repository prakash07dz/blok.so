import React from "react";

const words = [
  "to relax",
  "to inspire",
  "to connect",
  "to create",
  "to love",
  "for family",
  "for yourself",
  "for friends",
];

export default function TimeSlider() {
  const loopedWords = [...words, ...words];

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white text-4xl md:text-6xl font-semibold">
      <div className="flex gap-6 items-center">
        <span className="whitespace-nowrap leading-[1.2em]">Time</span>

        <div className="relative h-[6em] overflow-hidden">
          <div className="slider-smooth">
            {loopedWords.map((word, idx) => (
              <div
                key={idx}
                className="h-[1.2em] leading-[1.2em] flex items-center"
              >
                {word}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
