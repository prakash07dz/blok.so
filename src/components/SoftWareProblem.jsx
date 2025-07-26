export default function SoftwareProblem() {
  return (
    <section
      className="
        relative w-full min-h-screen flex items-center justify-center
        border-t border-[#212121]
        bg-black
        px-4 md:px-0
      "
      style={{ height: "100vh" }}
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-12 md:gap-20">
        {/* LEFT: Heading & Paragraph */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl md:text-5xl  text-white mb-5">
            Software solutions don't work.
          </h2>
          <p className="text-white text-base md:text-lg leading-relaxed">
            Screen time limits are too easy to bypass.
            <br />
            <br />
            You always end up hitting “ignore” or “extend”.
          </p>
        </div>
        {/* RIGHT: Two Images Side by Side */}
        <div className="w-full md:w-1/2 flex items-center justify-center gap-6">
          <div className="w-1/2 max-w-[180px] md:max-w-[220px] aspect-[3/5]  flex items-center justify-center">
            <img
              src="/soft-solution1.webp"
              alt="Phone ignore screen for limit"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-1/2 max-w-[180px] md:max-w-[220px] aspect-[3/5] flex items-center justify-center">
            <img
              src="/soft-solution2.webp"
              alt="Extend time screen"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
