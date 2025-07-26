import { useState, useEffect } from "react";

const steps = [
  {
    title: "Step 1: Select distracting apps",
    content:
      "Choose which apps (like IG, TikTok, X, etc.) you want to block from your phone.",
  },
  {
    title: "Step 2: Scan Blok",
    content:
      "Use the Blok device to scan and instantly lock access to the selected apps.",
  },
  {
    title: "Step 3: Keep Blok far away",
    content:
      "Physical separation: Place Blok out of reach. Your chosen apps stay locked until you scan Blok again.",
  },
];

export default function IntroducingBlokSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  // Progress bar and step timer
  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 2));
    }, 1000 / 10);

    // Auto-advance step after 5 seconds
    const timeout = setTimeout(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
      setProgress(0);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [currentStep]);

  return (
    <section className="w-full bg-black px-4 py-20 flex flex-col items-center  border-t border-[#212121]">
      <h2 className="text-2xl md:text-4xl text-white  text-center mb-4">
        Introducing Blok
      </h2>
      <p className="text-base md:text-lg text-center text-white mb-10 max-w-xl">
        The physical solution to digital distractions.
      </p>

      {/* Two columns: Left = video, Right = steps */}
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-10 w-full max-w-5xl">
        {/* LEFT: Video */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <video
            src="/blok-demo-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-xl shadow-lg bg-gray-300 w-full max-w-[420px]  object-cover"
          />
        </div>

        {/* RIGHT: Steps */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 justify-center">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`
        relative flex flex-col items-start p-6 rounded-2xl
        border border-gray-200 shadow transition
        ${currentStep === idx ? "bg-[#2A2A2A]" : "bg-[#1C1C1C]"}
      `}
            >
              {/* Step Title */}
              <div className="w-full cursor-pointer">
                <div className="text-[#B3B3B3] text-2xl mb-1 font-semibold">
                  {step.title}
                </div>
                {/* Progress bar */}
                {currentStep === idx && (
                  <div className="w-full h-1 rounded overflow-hidden mb-3">
                    <div
                      className="h-full bg-white transition-all"
                      style={{
                        width: `${progress}%`,
                        transition: "width 100ms linear",
                      }}
                    />
                  </div>
                )}
                {/* Step Content*/}
                {currentStep === idx && (
                  <div className="text-white text-base mt-1">
                    {step.content}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
