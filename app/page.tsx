import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import TryAnalysis from "@/components/sections/TryAnalysis";
import Footer from "@/components/Footer";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <TryAnalysis />
        <Contact/>
      </main>
      <Footer />
    </>
  );
}
