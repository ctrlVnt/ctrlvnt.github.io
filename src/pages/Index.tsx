
import { useEffect, useState, useRef } from "react";
import Header from '../components/Header';
import Hero from '../components/Hero';
import Research from '../components/Research';
import PublicTalks from '../components/PublicTalks';
import Links from '../components/Links';
import Teaching from '../components/Teaching';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { gsap } from "gsap";

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(mainRef.current, {
      opacity: 1,
      duration: 0.1,
      ease: "power2.out",
    });
  });

  return (
    <div ref={mainRef} className="font-inter min-h-screen opacity-0 transition-opacity duration-70">
      <Header />
      <Hero />
      <Research />
      <PublicTalks />
      <Links />
      <Teaching />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
