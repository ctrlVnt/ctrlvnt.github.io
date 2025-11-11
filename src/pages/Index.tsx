
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

export const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const splashRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        gsap.to(splashRef.current, {
          opacity: 0,
          duration: 0.8,
          onComplete: onComplete,
        });
      },
    });

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 0, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" }
    );

    tl.to(textRef.current, {
      y: -10,
      scaleY: 1.1,
      scaleX: 0.9,
      duration: 0.1,
      ease: "power1.in",
    });

    tl.to(textRef.current, {
      y: -20,
      rotation: 360,
      scaleY: 1,
      scaleX: 1,
      duration: 0.6,
      ease: "power2.inOut",
    });

    tl.to(textRef.current, {
      y: 0,
      duration: 0.6,
      ease: "bounce.out",
    });

    tl.from(text2Ref.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    }, "-=0.2");

  }, [onComplete]);

  return (
    <div
      ref={splashRef}
      className="fixed flex flex-col inset-0 z-50 flex items-center justify-center bg-white text-black"
    >
      <h1
        ref={textRef}
        className="font-inter text-4xl md:text-6xl font-bold tracking-wider"
      >
        Hi
      </h1>
      <h2 ref={text2Ref}
        className="font-inter text-lg md:text-2xl tracking-wider">
        You are welcome
      </h2>
    </div>
  );
};

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoaded && mainRef.current) {
      gsap.to(mainRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    }
  }, [isLoaded]);

  return (
    <>
    {!isLoaded && <SplashScreen onComplete={() => setIsLoaded(true)} />}

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
     </>
  );
};

export default Index;
