import { ExternalLink, Book, Calculator, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

const Links = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quickLinks = [
    { name: "Trimester Program: Spectral Methods in Algebra, Geometry, and Topology", url: "https://www.mathematics.uni-bonn.de/him/programs/past/tp_2022_09", description: "16 September-12 December 2022, Hausdorff Research Institute for Mathematics, Bonn, Germany" },
    { name: "Welcome Home 2023", url: "https://sites.google.com/view/welcomehome2023/home-page", description: "21-22 December 2023, University of Turin" },
    { name: "Welcome Home 2021", url: "https://sites.google.com/site/welcomehomeunito/welcome-home-2021", description: "21-22 December 2021, University of Turin" }
  ];

  return (
    <section id="links" className="bg-gradient-to-b from-yellow-100 from-80% to-green-100 to-90% relative py-16 bg-yellow-100 overflow-hidden">
      {/* Animated Network/Link Background */}
      <div className="absolute inset-0">
        {/* Connecting Lines */}
        <svg className="absolute w-full h-full opacity-10">
          <line 
            x1="100" y1="100" 
            x2={300 + Math.sin(scrollY * 0.01) * 50} 
            y2={200 + Math.cos(scrollY * 0.01) * 30}
            stroke="#3B82F6" 
            strokeWidth="1"
          />
          <line 
            x1="800" y1="150" 
            x2={600 + Math.cos(scrollY * 0.008) * 40} 
            y2={300 + Math.sin(scrollY * 0.008) * 35}
            stroke="#6366F1" 
            strokeWidth="1"
          />
          <line 
            x1="400" y1="400" 
            x2={200 + Math.sin(scrollY * 0.012) * 60} 
            y2={500 + Math.cos(scrollY * 0.012) * 25}
            stroke="#8B5CF6" 
            strokeWidth="1"
          />
        </svg>
        
        {/* Floating Nodes */}
        <div 
          className="absolute top-24 left-24 w-3 h-3 bg-yellow-400/40 rounded-full"
          style={{ transform: `translate(${Math.sin(scrollY * 0.01) * 20}px, ${Math.cos(scrollY * 0.01) * 15}px)` }}
        />
        <div 
          className="absolute top-40 right-32 w-4 h-4 bg-orange-400/30 rounded-full"
          style={{ transform: `translate(${Math.cos(scrollY * 0.008) * 25}px, ${Math.sin(scrollY * 0.008) * 18}px)` }}
        />
        <div 
          className="absolute bottom-48 left-1/3 w-2 h-2 bg-orange-400/50 rounded-full"
          style={{ transform: `translate(${Math.sin(scrollY * 0.012) * 30}px, ${Math.cos(scrollY * 0.012) * 12}px)` }}
        />
        <div 
          className="absolute bottom-32 right-20 w-5 h-5 bg-red-300/25 rounded-full"
          style={{ transform: `translate(${Math.cos(scrollY * 0.015) * 15}px, ${Math.sin(scrollY * 0.015) * 20}px)` }}
        />
        
        {/* Hexagonal Pattern */}
        <div 
          className="absolute top-1/3 left-1/2 w-16 h-16 border border-gray-200/50"
          style={{ 
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
            transform: `translate(-50%, -50%) rotate(${scrollY * 0.05}deg) scale(${1 + Math.sin(scrollY * 0.01) * 0.1})`
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Useful Links</h2>
        </div>

        {/* Quick Links */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Quick Access</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-200 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900 group-hover:text-orange-600">{link.name}</h4>
                  <ExternalLink size={16} className="text-gray-400 group-hover:text-orange-600" />
                </div>
                <p className="text-sm text-gray-600">{link.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Links;
