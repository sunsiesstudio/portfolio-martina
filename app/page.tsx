import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { AsciiFlowers } from "@/components/AsciiFlowers";

export default function Home() {
  return (
    <div className="relative">
      <main className="relative z-0">
        <Nav />
        <Hero />
        <Services />
        <Work />
        <About />
        <Contact />
        <Footer />
      </main>
      <AsciiFlowers count={90} className="z-10" />
    </div>
  );
}
