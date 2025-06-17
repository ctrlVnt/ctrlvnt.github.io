
import { Mail, Smile } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-sky-100 from-10% via-cyan-100 via-80% to-red-100 to-90% pt-24 pb-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)` }}
        />
        <div 
          className="absolute top-1/4 -right-1/4 w-80 h-80 bg-purple-200/40 rounded-full blur-2xl"
          style={{ transform: `translateY(${scrollY * -0.2}px) rotate(${scrollY * -0.1}deg)` }}
        />
        <div 
          className="absolute top-0 left-1/3 w-64 h-64 bg-indigo-200/30 rounded-full blur-xl"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <img
            src="profile.jpg"
            alt="CS"
            className="w-32 h-32 mx-auto mb-8 rounded-full flex items-center justify-center text-white text-4xl font-bold"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Chiara Sava
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Ph.D. mathematics student
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            I am a Ph.D. student at Charles University in Prague and 
            I work under the supervision of <a className="text-cyan-600" href="https://www.karlin.mff.cuni.cz/~stovicek/index.php/en/homepage" target="_blank">Jan Šťovíček</a>.
            My research is mainly about homotopy theory, higher category theory and representation theory of algebras.
          </p>
          <div className="flex flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-cyan-600 text-white w-12 h-12 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center justify-center"
            >
              <Mail size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
