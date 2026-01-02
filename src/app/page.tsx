import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Infrastructure from "@/components/sections/Infrastructure";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Infrastructure />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}
