import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/Hero";
import WhyEdenest from "@/components/why-edenest/Why-Edenest";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import Services from "@/components/services/Services";
import FAQ from "@/components/faq/FAQ";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-black">
        <Hero />
        <WhyEdenest />
        <HowItWorks />
        <Services />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
}