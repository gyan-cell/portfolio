import About from "@/components/server/About/About";
import Hero from "@/components/server/Heropage/Hero";
import Projects from "@/components/server/projects/Projects";
import ContactMe from "@/components/server/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <ContactMe />
    </>
  )
}
