export default function AppPreviewSection() {
  return (
    <section className="w-full bg-black px-4 py-16 flex flex-col items-center border-t border-[#212121]">
      <h2 className="text-2xl md:text-4xl text-white text-center mb-4">
        What the app looks like
      </h2>
      <p className="text-gray-300 text-base md:text-lg text-center mb-10 max-w-xl">
        Analytics, schedules, streaks, modes, friends, and more!
      </p>
      <div className="w-full flex justify-center">
        <img
          src="/app-preview.png"
          alt="Blok App Preview"
          className="
            w-[100vw] max-w-5xl 
            object-cover
          "
        />
      </div>
    </section>
  );
}
