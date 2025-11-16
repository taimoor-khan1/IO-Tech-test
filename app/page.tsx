import HeroSection from "./src/component/HeroSection";
import TeamSection from "./src/component/TeamSection";
import Testimonials from "./src/component/Testimonials";

import Footer from "./src/component/Footer";

export default function Home() {
  return (
    <div className="flex flex-col bg-zinc-50 font-sans">
      <HeroSection />
      <TeamSection />
      <Testimonials />
      <Footer />
    </div>
  );
}
