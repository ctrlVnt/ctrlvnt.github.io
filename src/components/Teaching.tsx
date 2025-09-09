import { link } from 'fs';
import { BookOpen, Users, Award, Download, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 

const Teaching = () => {
  const [showPast, setShowPast] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const courses = [
    
  ];

  const pastCourses = [
    {
      code: "NMAG442",
      title: "Representation theory of finite dimensional algebras",
      semester: "2022/2023",
      description: "Exercise sessions, Charles University",
      link: "https://www.karlin.mff.cuni.cz/~stovicek/index.php/en/2223ls-nmag442"
    }
  ];

  return (
    <section id="teaching" className="bg-green-100 relative py-16 bg-green-100 overflow-hidden">
      {/* Animated Educational Background */}
      <div className="absolute inset-0">
        {/* Floating Books */}
        <div 
          className="absolute top-20 left-10 opacity-20"
          style={{ transform: `translateY(${Math.sin(scrollY * 0.01) * 20}px) rotate(${scrollY * 0.02}deg)` }}
        >
          <BookOpen size={32} className="text-green-400" />
        </div>
        <div 
          className="absolute top-40 right-20 opacity-15"
          style={{ transform: `translateY(${Math.cos(scrollY * 0.008) * 25}px) rotate(${scrollY * -0.03}deg)` }}
        >
          <BookOpen size={28} className="text-green-400" />
        </div>
        <div 
          className="absolute bottom-40 left-1/4 opacity-25"
          style={{ transform: `translateY(${Math.sin(scrollY * 0.012) * 15}px) rotate(${scrollY * 0.01}deg)` }}
        >
          <BookOpen size={24} className="text-purple-400" />
        </div>
        
        {/* Mathematical Formulas */}
        <div 
          className="absolute top-32 left-1/3 text-2xl text-green-200 font-serif opacity-60"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        >
          f(x) = ax² + bx + c
        </div>
        <div 
          className="absolute bottom-40 right-1/4 text-xl text-green-200 font-serif opacity-50"
          style={{ transform: `translateY(${scrollY * -0.06}px)` }}
        >
          ∂f/∂x = lim[h→0] (f(x+h)-f(x))/h
        </div>
        
        {/* Geometric Shapes */}
        <div 
          className="absolute top-1/2 right-10 w-20 h-20 border-2 border-gray-300/30 opacity-40"
          style={{ 
            transform: `translateY(${Math.sin(scrollY * 0.01) * 10}px) rotate(${scrollY * 0.1}deg)`,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
        />
        <div 
          className="absolute bottom-20 left-16 w-16 h-16 border-2 border-indigo-300/40 rounded-full opacity-30"
          style={{ transform: `translateY(${Math.cos(scrollY * 0.012) * 12}px) scale(${1 + Math.sin(scrollY * 0.01) * 0.1})` }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Teaching</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Current Courses */}
          <div className="mb-12">
            {courses.length > 0 && (<h3 className="text-2xl font-semibold text-gray-900 mb-6">Current Courses</h3>)}
            <div className="space-y-4">
              {courses.map((course, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{course.code}: {course.title}</h4>
                      <p className="text-gray-600">{course.semester}</p>
                      <p className="text-gray-700">{course.description}</p>
                    </div>
                  </div>
                  <a
                      href={course.link}
                      className="inline-flex items-center text-green-600 hover:text-green-800 text-sm"
                    >
                      See more
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                </div>
              ))}
            </div>
          </div>
        </div>

         {/* Past Talks Toggle */}
        <div className="text-center mb-6">
          <button
            onClick={() => setShowPast(!showPast)}
            className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            <span>{showPast ? 'Hide' : 'Show'} Past Courses</span>
            {showPast ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>

        {/* Past Courses */}
        <AnimatePresence initial={false}>
          {showPast && (
                    <motion.div
                      key="past-talks"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                      <h3 className="text-2xl font-semibold text-foreground mb-6">Past Courses</h3>
                      <div className="grid gap-6 md:grid-cols-2">
                      {pastCourses.map((course, index) => (
                          <div key={index} className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h4 className="text-lg font-semibold text-gray-900">{course.code}: {course.title}</h4>
                                <p className="text-gray-600">{course.semester}</p>
                                <p className="text-gray-700">{course.description}</p>
                              </div>
                            </div>
                            <a
                                href={course.link}
                                className="inline-flex items-center text-green-600 hover:text-green-800 text-sm"
                              >
                                See more
                                <ExternalLink size={14} className="ml-1" />
                              </a>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Teaching;
