import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  // Optional: handle actual submit if needed
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle your newsletter subscription here
  };

  return (
    <section className="w-full h-[100vh] bg-black py-10 flex items-center justify-center px-1">
      <div className="w-full max-w-xl bg-[#121212] rounded-2xl p-4 md:p-8 flex flex-col items-center shadow-lg">
        <h2 className="text-xl md:text-2xl text-white text-center mb-1">
          Follow along
        </h2>
        <p className="text-gray-300 text-base md:text-lg text-center mb-2">
          Be part of the Blok story.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full  flex flex-col sm:flex-row gap-4 items-center"
        >
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:flex-1 bg-[#181818] border border-[#232323] rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button
            type="submit"
            className="
              w-full sm:w-auto px-7 py-3 rounded-2xl bg-white text-black text-base font-semibold
              shadow-[0_0_16px_2px_rgba(255,255,255,0.8)]
              hover:shadow-[0_0_32px_8px_rgba(255,255,255,1)]
              hover:bg-white transition
              focus:outline-none focus:ring-2 focus:ring-white
            "
          >
            Join
          </button>
        </form>
      </div>
    </section>
  );
}
