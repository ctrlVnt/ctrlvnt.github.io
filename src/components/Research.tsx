import { Book, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

const Research = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const publications = [
    {
      title: "Equivalent definitions of the preprojective algebra",
      journal: "C.Sava, arXiv preprint",
      year: "2022",
      link: "https://arxiv.org/abs/2203.00792"
    },
    {
      title: "∞-Dold-Kan correspondence via representation theory",
      journal: "C.Sava, arXiv preprint",
      year: "2022",
      link: "https://arxiv.org/abs/2211.00762"
    },
    {
      title: "The derivator associated to a dg-category",
      journal: "F.Genovese, C.Sava, J.Šťovíček, arXiv preprint",
      year: "2025",
      link: "https://arxiv.org/abs/2508.02612"
    },
    {
      title: "Differential graded algebras in differential categories",
      journal: "J.S. Pacaud Lemay, C.Sava, work in progress",
      year: "",
      link: "#"
    },
  ];

  return (
    <section id="research" className="bg-red-100 relative pb-16 bg-S overflow-hidden">
      {/* Animated Mathematical Symbols Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-10 left-10 text-6xl text-red-400 font-serif opacity-50"
          style={{ transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)` }}
        >
          ∑
        </div>
        <div 
          className="absolute top-32 right-20 text-5xl text-red-400 font-serif opacity-60"
          style={{ transform: `translateY(${scrollY * -0.15}px) rotate(${scrollY * -0.08}deg)` }}
        >
          ∫
        </div>
        <div 
          className="absolute bottom-40 left-1/4 text-7xl text-red-400 font-serif opacity-40"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        >
          π
        </div>
        <div 
          className="absolute bottom-20 right-10 text-4xl text-indigo-100 font-serif opacity-70"
          style={{ transform: `translateY(${scrollY * -0.08}px) rotate(${scrollY * 0.06}deg)` }}
        >
          ∞
        </div>
        <div 
          className="absolute top-1/2 left-1/3 w-32 h-32 border-2 border-red-400 rounded-full opacity-30"
          style={{ transform: `translateY(${scrollY * 0.08}px) scale(${1 + scrollY * 0.0001})` }}
        />
        <div 
          className="absolute top-1/3 right-1/3 w-24 h-24 border-2 border-red-400 transform rotate-45 opacity-40"
          style={{ transform: `translateY(${scrollY * -0.1}px) rotate(${45 + scrollY * 0.1}deg)` }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research</h2>
        </div>

  
          {/* Recent Publications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Publications</h3>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <div key={index} className="bg-card border border-red-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                  <h4 className="font-medium text-gray-900 mb-2">{pub.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{pub.journal} • {pub.year}</p>

                  {pub.link !== "#" && (
                    <a
                      href={pub.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm"
                    >
                      View Publication
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  )}

                  {pub.link === "#" && (
                    <p className="inline-flex items-center text-gray-400 hover:text-gray-800 text-sm">
                      Ongoing works... 🚧
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default Research;
