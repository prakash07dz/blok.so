import { FaStar } from "react-icons/fa";

export default function QuoteTestimonialSection() {
  return (
    <section className="w-full bg-black px-4 py-16 flex flex-col items-center border-t border-[#212121]">
      <p className="text-[#737373] text-lg md:text-2xl text-center max-w-2xl mb-8">
        &quot;I used blok all day today. I left it at home. It felt quite
        literally like a breath of fresh air knowing I could not, and would not,
        respond to anything on socials.&quot;
      </p>
      {/* Testimonial Row: Image left, stars/name on right */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        {/* Avatar Image (left) */}
        <img
          src="/testimonial-avtar2.png"
          alt="Rishi Parikh"
          className="w-14 h-14 rounded-full border-2 border-white shadow"
        />
        {/* Stars & Name (right) */}
        <div className="flex flex-col items-center sm:items-start">
          {/* 5 stars */}
          <div className="flex text-yellow-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={20} />
            ))}
          </div>
          <span className="text-white font-bold text-sm">Harpriya B.</span>
          <span className="text-gray-500 text-xs">@harpriiya</span>
        </div>
      </div>
    </section>
  );
}
