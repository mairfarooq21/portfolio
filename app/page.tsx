"use client";

// import { navItems } from "@/data";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
// import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems} /> */}
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </main>
  );
};

export default Home;