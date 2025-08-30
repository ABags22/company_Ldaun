import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

import Footer from "./components/Footer";
import Projects from "./components/Project";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Contact />
      <Testimonials />

      <Footer />
    </div>
  );
}

export default App;
