import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "What is Blok and how does it work?",
    answer:
      "Blok is a physical solution for digital distraction. You select which apps to block, scan your Blok device, and enjoy focused time away from your chosen distractions.",
  },
  {
    question: "Can I unblock apps before the time is up?",
    answer:
      "Only by physically scanning your Blok device again. This helps you avoid impulsive unlocking and keeps you accountable to your goals.",
  },
  {
    question: "Does Blok work on both iOS and Android?",
    answer: "Yes! Blok is compatible with both iOS and Android devices.",
  },
  {
    question: "Is there a subscription fee for using Blok?",
    answer:
      "There is no required monthly fee—pay once, use Blok forever. Optional advanced features may be offered in-app.",
  },
  {
    question: "What if I lose my Blok?",
    answer:
      "You can order a replacement. For security, your app preferences stay safe, and you can set up a new Blok in minutes.",
  },
  {
    question: "Can multiple people use the same Blok?",
    answer:
      "Each Blok is paired to a single user account for maximum safety and accountability.",
  },
  {
    question: "Will new features be added over time?",
    answer:
      "Yes! We’re constantly updating the app and the Blok experience based on your feedback.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full bg-black px-4 py-16 border-t border-[#212121]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-4xl text-white mb-10 text-center">
          We often get asked...
        </h2>

        <div className="flex flex-col gap-4">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#121212] px-6 py-4 transition-shadow duration-300 shadow hover:shadow-lg"
            >
              {/* Question (button for a11y and focus) */}
              <button
                className="w-full flex items-center justify-between text-left focus:outline-none"
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="text-white  text-base md:text-lg">
                  {item.question}
                </span>
                <span
                  className={`
                    ml-4 transition-transform duration-300
                    ${openIndex === idx ? "rotate-180" : ""}
                  `}
                >
                  <FiChevronDown size={28} className="text-gray-300" />
                </span>
              </button>
              {/* Answer */}
              <div
                id={`faq-answer-${idx}`}
                className={`
                  overflow-hidden transition-all duration-400
                  ${
                    openIndex === idx
                      ? "max-h-40 mt-3 opacity-100"
                      : "max-h-0 mt-0 opacity-50 pointer-events-none"
                  }
                `}
                style={{
                  transitionProperty: "max-height, margin-top, opacity",
                }}
              >
                <div className="text-gray-300 text-sm md:text-base pb-1">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
