import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
