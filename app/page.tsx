import JsonLd from "../components/JsonLd";
import { homePageSchema } from "@/lib/structured-data";
import Navbar from "../components/Navbar";
import FloatingNav from "../components/FloatingNav";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Process from "../components/Process";
import Workspace from "../components/Workspace";
import Results from "../components/Results";
import LiveGithub from "../components/LiveGithub";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import TechStack from "../components/TechStack";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import BackToTop from "../components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <JsonLd data={homePageSchema()} />
      <ScrollProgress />
      <Navbar />
      <FloatingNav />
      <Hero />
      <Profile />
      <Projects />
      <Services />
      <Process />
      <Workspace />
      
      {/* new Advanced Stagger Animations ! */}
      <Results />
      <LiveGithub />

      <Faq />
      <Contact />
      <TechStack />
      <Footer />
      <BackToTop />
    </main>
  );
}
