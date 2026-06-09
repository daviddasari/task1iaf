import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ImpactBanner from './components/ImpactBanner';
import Credentials from './components/Credentials';
import Events from './components/Events';
import Gallery from './components/Gallery';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <ImpactBanner />
        <Credentials />
        <Events />
        <Gallery />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
