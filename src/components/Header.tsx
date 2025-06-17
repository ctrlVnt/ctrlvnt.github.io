
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">Chiara Sava</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('research')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Research
            </button>
            <button 
              onClick={() => scrollToSection('talks')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Talks
            </button>
            <button 
              onClick={() => scrollToSection('links')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Links
            </button>
            <button 
              onClick={() => scrollToSection('teaching')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Teaching
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('research')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Research
              </button>
              <button 
                onClick={() => scrollToSection('talks')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Public Talks
              </button>
              <button 
                onClick={() => scrollToSection('links')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Links
              </button>
              <button 
                onClick={() => scrollToSection('teaching')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Teaching
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
