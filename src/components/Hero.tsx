
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
    <section className="relative bg-gradient-to-b from-sky-100 from-10% via-cyan-100 via-80% to-red-100 to-90% pt-24 pb-32 overflow-hidden">
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
        
  <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-8">

    <div className="flex flex-col justify-center lg:justify-end lg:flex-shrink-0">
      <img
        src="profile_entire.jpg"
        alt="profile.jpg"
        className="
          w-64 lg:w-80
          mx-auto mb-8 lg:mb-0 
          rounded-2xl
          object-cover
          shadow-lg
          mb-0
        "
      />
      <p className='text-s opacity-50 lg:mt-3'>picture by Nicola Carissimi</p>
    </div>


    <div className="flex-1">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Chiara Sava
      </h1>
      <p className="text-xl text-gray-700 mb-6">
        Ph.D. mathematics student
      </p>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto lg:mx-0 mb-8">
        I am a Ph.D. student at Charles University in Prague and 
        I work under the supervision of{" "}
        <a
          className="text-cyan-600"
          href="https://www.karlin.mff.cuni.cz/~stovicek/index.php/en/homepage"
          target="_blank"
        >
          Jan Šťovíček
        </a>.
        My research is mainly about homotopy theory, higher category theory and
        representation theory of algebras.
      </p>

      <div className="flex flex-row gap-4 justify-center lg:justify-start">
        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-cyan-600 text-white w-12 h-12 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center justify-center"
        >
          <Mail size={20} />
        </button>
      </div>
    </div>
    
  </div>
</div>

    </section>
  );
};

export default Hero;
