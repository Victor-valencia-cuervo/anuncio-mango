import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Gallery from './components/Gallery/Gallery';
import Benefits from './components/Benefits/Benefits';
import Stats from './components/Stats/Stats';
import Testimonials from './components/Testimonials/Testimonials';
import CTASection from './components/CTASection/CTASection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <ParticlesBackground />
      <div className="site">
        <Navbar />
        <main>
          <Hero />
          <Gallery />
          <Benefits />
          <Stats />
          <Testimonials />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
