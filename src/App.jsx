import AppPreviewSection from "./components/AppPreviewSection";
import AppVideoSection from "./components/AppVideoSection";
import BlokTimeSection from "./components/BlokTimeSection";
import BrandSliderSection from "./components/BrandSliderSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import GrowingMovementSection from "./components/GrowingMovementSection";
import HeaderHeroSection from "./components/HeaderHeroSection";
import IntroducingBlokSection from "./components/IntroducingBlokSection";
import NewsletterSection from "./components/NewsletterSection";
import ProblemSection from "./components/ProblemSection";
import QuoteTestimonialSection from "./components/QuoteTestimonialSection";
import SocialMediaSection from "./components/SocialMediaSection";
import SoftwareProblem from "./components/SoftWareProblem";
import StickyTimeSection from "./components/StickyTimeSection";
import TestimonialsSection from "./components/TestimonialsSection";
import TestimonialsSection2 from "./components/TestimonialsSection2";

function App() {
  return (
    <div className="font-sans bg-gray-50">
      <HeaderHeroSection />
      <TestimonialsSection />
      <BrandSliderSection />
      <ProblemSection />
      <SoftwareProblem />
      <IntroducingBlokSection />
      <SocialMediaSection />
      <QuoteTestimonialSection />
      <AppPreviewSection />
      <AppVideoSection />
      <GrowingMovementSection />
      <BlokTimeSection />
      <StickyTimeSection />
      <TestimonialsSection2 />
      <NewsletterSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
