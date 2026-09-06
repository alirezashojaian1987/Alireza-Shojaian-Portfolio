import Navbar from "@/Components/Layout/Navbar";
import About from "@/Components/Sections/About";
import Contact from "@/Components/Sections/Contact";
import Experience from "@/Components/Sections/Experience";
import Hero from "@/Components/Sections/Hero";
import Projects from "@/Components/Sections/Projects";
import Testimonials from "@/Components/Sections/Testimonials";

export default function Home(){
  return(
    <div className="min-h-screen overflow-x-hidden">
      <Navbar/>
      
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Experience/>
        <Testimonials/>
        <Contact/>
      </main>
    </div>
  )
}