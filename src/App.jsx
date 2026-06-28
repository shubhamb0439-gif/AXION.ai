import Background from './components/layout/Background.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';

import Hero from './components/sections/Hero.jsx';
import WhyUs from './components/sections/WhyUs.jsx';
import Philosophy from './components/sections/Philosophy.jsx';
import Process from './components/sections/Process.jsx';
import Services from './components/sections/Services.jsx';
import Industries from './components/sections/Industries.jsx';
import TechStack from './components/sections/TechStack.jsx';
import Stats from './components/sections/Stats.jsx';
import Pricing from './components/sections/Pricing.jsx';
import Portfolio from './components/sections/Portfolio.jsx';
import Testimonials from './components/sections/Testimonials.jsx';
import Faq from './components/sections/Faq.jsx';
import Contact from './components/sections/Contact.jsx';

/**
 * App is a thin composition root: it declares page order and nothing else.
 * Each section is self-sufficient (owns its data + behaviour), so reordering
 * or removing a section here never ripples into the others.
 */
export default function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Philosophy />
        <Process />
        <Services />
        <Industries />
        <TechStack />
        <Stats />
        <Pricing />
        <Portfolio />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
