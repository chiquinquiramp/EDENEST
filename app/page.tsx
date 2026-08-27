import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/Hero";
import WhyEdenest from "@/components/Why-edenest/Why-Edenest";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import Services from "@/components/services/Services";
import FAQ from "@/components/faq/FAQ";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <> 
      <Navbar />
      <Hero />
      <WhyEdenest />
      <HowItWorks />
      <Services />
      <FAQ />
      <Contact />
      <main>
      </main>
      </> 
    </div>
  );
}
