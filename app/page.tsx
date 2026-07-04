import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Monitoring from "@/components/Monitoring";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-topbar-height">
        <Hero />
        <LogoStrip />
        <Monitoring />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
