import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Proof from "@/components/proof";
import Projects from "@/components/projects";
import Process from "@/components/process";
import Stack from "@/components/stack";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Proof />
        <Projects />
        <Process />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
