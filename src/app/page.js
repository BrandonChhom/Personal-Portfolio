import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionNav from "@/components/SectionNav";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <ScrollToTop />
      <SectionNav />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
