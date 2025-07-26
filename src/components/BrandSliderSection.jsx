import { useRef, useEffect } from "react";

const logos = [
  "/logo1.svg",
  "/logo2.avif",
  "/logo3.avif",
  "/logo4.avif",
  "/logo5.avif",
];

export default function BrandSliderSection() {
  const sliderRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    const slider = sliderRef.current;
    const content = contentRef.current;
    if (!slider || !content) return;

    let frame;
    let lastTime = performance.now();
    const contentWidth = content.offsetWidth / 3;

    function animate(now) {
      let dt = now - lastTime;
      lastTime = now;
      slider.scrollLeft += dt * 0.08;

      if (slider.scrollLeft >= contentWidth) {
        slider.scrollLeft = 0;
      }

      frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="w-full flex flex-col items-center bg-black px-4 py-12">
      <p className="text-center text-white text-sm md:text-lg font-medium mb-8">
        Supporting top performers around the world.
      </p>

      <div
        ref={sliderRef}
        className="w-full max-w-5xl overflow-hidden relative py-3"
      >
        <div
          ref={contentRef}
          className="flex gap-6 md:gap-10 items-center w-max select-none"
        >
          {[...logos, ...logos, ...logos].map((src, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 h-7 md:h-10 flex items-center justify-center px-2"
            >
              <img
                src={src}
                alt={`Brand logo ${(idx % logos.length) + 1}`}
                className="h-full w-auto max-w-[70px] md:max-w-[110px] opacity-80 transition duration-300 pointer-events-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
