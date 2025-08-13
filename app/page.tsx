import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
      </main>
    </>
  );
}
