import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/Hero";
import WhyEdenest from "@/components/why-edenest/Why-Edenest";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import Services from "@/components/services/Services";
import FAQ from "@/components/faq/FAQ";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <div className="p-6 border rounded shadow hover:shadow-lg">
      <Navbar />
      <Hero />
      <WhyEdenest />
      <HowItWorks />
      <Services />
      <FAQ />
      <Contact />
    </div>
  );
}
