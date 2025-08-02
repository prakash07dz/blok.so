export default function ProblemSection() {
  const cards = [
    {
      avatar: "/avatar1.webp",
      title: "Stress and Anxiety",
      text: 'That "quick phone check" is always a waste of time',
    },
    {
      avatar: "/avatar2.webp",
      title: "Poor Sleep",
      text: "Scrolling in bed at night and first thing in the morning drains your energy.",
    },
    {
      avatar: "/avatar3.webp",
      title: "Lack of Focus",
      text: "Notifications and endless feeds make it hard to sit down and get things done.",
    },
  ];

  return (
    <section className="w-full bg-black px-4 py-16 flex flex-col items-center">
      <h2 className="text-2xl md:text-4xl  text-white text-center mb-4">
        Your constantly being distracted
      </h2>
      <p className="text-gray-300 text-base md:text-lg text-center mb-10 max-w-lg">
        Every ping, ding and buzz takes you out of the moment
      </p>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-7 mb-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-[#121212] border border-[rgb(33,33,33)] rounded-2xl px-6 py-10 text-center shadow-sm h-full"
          >
            <img
              src={card.avatar}
              alt={card.title}
              className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-gray-800 bg-gray-900"
            />
            <h3 className="text-white text-2xl mb-2">{card.title}</h3>
            <p className="text-gray-400 text-sm md:text-base">{card.text}</p>
          </div>
        ))}
      </div>

      {/* "Get Blok" Button, glowing effect */}
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
        Get Blok
      </a>
    </section>
  );
}
