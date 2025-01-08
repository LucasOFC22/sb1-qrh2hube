import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Locations } from '../components/Locations';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Locations />
      <Contact />
      <Footer />
    </div>
  );
}