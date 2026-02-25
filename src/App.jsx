import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';
import Stats from './components/Stats';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Cta from './components/Cta';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-accent/30 flex flex-col items-center">
      <Navbar />
      <main className="w-full flex flex-col items-center flex-grow">
        <div
          className="w-full bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: "url('/hero-bg.png')"
          }}
        >
          <Hero />
          <Partners />
          <Services />
        </div>
        <Stats />
        <Showcase />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
