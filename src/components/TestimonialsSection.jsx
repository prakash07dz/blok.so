import { FaStar } from "react-icons/fa";

export default function TestimonialsSection() {
  return (
    <section className="w-full flex justify-center bg-black px-4 py-12">
      <div className="max-w-3xl w-full rounded-2xl shadow-lg flex flex-col-reverse md:flex-row items-center justify-center gap-8 p-6 md:p-10">
        {/* Image LEFT */}
        <div className="flex-shrink-0 w-32 md:w-44 md:h-60">
          <div className="h-full flex items-center justify-center">
            <img
              src="/testimonial.webp"
              alt="Testimonial"
              className="w-full h-32 md:h-60 object-cover rounded-xl shadow-lg  border-1 border-[#292929]"
            />
          </div>
        </div>
        {/* RIGHT: Content*/}
        <div className="w-32 md:w-auto md:h-60 flex flex-col justify-center">
          <p className="text-base md:text-lg text-white font-semibold mb-6 text-center md:text-left">
            Since getting Blok, I decreased my screen time by 93%!
          </p>
          <div className="flex items-center">
            <img
              src="/testimonial-avtar.avif"
              alt="Rishi Parikh"
              className="w-10 h-10 rounded-full border-2 border-white shadow mr-4"
            />
            <div className="flex flex-col">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={18} />
                ))}
              </div>
              <span className="text-white font-bold text-sm">Rishi Parikh</span>
              <span className="text-gray-300 text-xs">@RishiParikh01</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
