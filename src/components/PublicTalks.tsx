import { Calendar, MapPin, Users, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

const PublicTalks = () => {
  const [showPastTalks, setShowPastTalks] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const upcomingTalks = [
  {
    title: "Enhancements of quivers with relations",
    event: "International Cateogry Theory Conference CT2025",
    date: "Mon Jul 14 2025",
    location: "Masaryk University, Brno ",
    audience: "Researchers & Academics",
    description: "Monday 14 July 2025, Masaryk University",
    link: "https://conference.math.muni.cz/ct2025/"
  }
];

const pastTalks = [

{
    title: "∞-Dold-Kan correspondence via representation theory",
    event: "Seminario di Algebra e Teoria dei numeri",
    date: "Thu Jun 19 2025",
    location: "University of Turin",
    audience: "Researchers & Academics",
    description: "Thursday 19 June 2025, University of Turin",
    link: "https://www.seminarioatn.unito.it/"
  },
  {
    title: "Differential graded algebras in differential categories",
    event: "Australian Category Seminar",
    date: "Wed Apr 9 2025",
    location: "Macquarie University, Sydney",
    audience: "Researchers & Academics",
    description: "Wednesday 9 April 2025, Macquarie University, Sydney",
    link: "https://centre-of-australian-category-theory.github.io/seminar/"
  },
  {
    title: "∞-Dold-Kan correspondence via representation theory",
    event: "University of Sydney Algebra Seminar",
    date: "Fri Mar 28 2025",
    location: "University of Sydney",
    audience: "Researchers & Academics",
    description: "Friday 28 March 2025, University of Sydney",
    link: "https://www.maths.usyd.edu.au/u/AlgebraSeminar/"
  },
  {
    title: "∞-Dold-Kan correspondence via representation theory",
    event: "Pure Mathematics Seminar",
    date: "Fri Mar 14 2025",
    location: "University of Melbourne",
    audience: "Researchers & Academics",
    description: "Friday 14 March 2025, University of Melbourne",
    link: "https://ms.unimelb.edu.au/research/pure-mathematics/seminars"
  },
  {
    title: "The derivator associated to a dg-category",
    event: "Australian Category Seminar",
    date: "Wed Mar 5 2025",
    location: "Macquarie University, Sydney",
    audience: "Researchers & Academics",
    description: "Wednesday 5 March 2025, Macquarie University, Sydney",
    link: "https://centre-of-australian-category-theory.github.io/seminar/"
  },
  {
    title: "∞-Dold-Kan correspondence via representation theory",
    event: "Australian Category Seminar",
    date: "Wed Feb 19 2025",
    location: "Macquarie University, Sydney",
    audience: "Researchers & Academics",
    description: "Wednesday 19 February 2025, Macquarie University, Sydney",
    link: "https://centre-of-australian-category-theory.github.io/seminar/"
  },
  {
    title: "The derivator associated to a dg-category",
    event: "Algebra Seminar",
    date: "Wed Nov 27 2024",
    location: "Masaryk University, Brno",
    audience: "Researchers & Academics",
    description: "Wednesday 27 November 2024, Masaryk University, Brno",
    link: "https://www.math.muni.cz/~bourkej/BAS.html"
  },
  {
    title: "∞-Dold-Kan correspondence via representation theory",
    event: "Algebraic Geometry Seminar",
    date: "Wed Nov 13 2024",
    location: "University of Luxembourg",
    audience: "Researchers & Academics",
    description: "Wednesday 13 November 2024, University of Luxembourg",
    link: "https://pbelmans.ncag.info/uni.lu/seminar"
  },
  {
    title: "The derivator associated to a dg-category",
    event: "International Category Theory Conference CT2024",
    date: "Fri Jun 28 2024",
    location: "University of Santiago de Compostela",
    audience: "Researchers & Academics",
    description: "Friday 28 June 2024, University of Santiago de Compostela",
    link: "https://www.usc.gal/regaca/ct2024/index.html"
  },
  {
    title: "∞-Dold-Kan correspondence via representation theory",
    event: "Geometry, Analysis and Representations",
    date: "Fri Jun 14 2024",
    location: "Aristotle University of Thessaloniki",
    audience: "Researchers & Academics",
    description: "Friday 14 June 2024, Aristotle University of Thessaloniki",
    link: "https://sites.google.com/view/geometry-analysis-reps/home"
  },
  {
    title: "The derivator associated to a dg-category",
    event: "Purity, Approximation Theory and Spectra",
    date: "Wed May 15 2024",
    location: "Cetraro, Italy",
    audience: "Researchers & Academics",
    description: "Wednesday 15 May 2024, Cetraro, Italy",
    link: "http://profs.scienze.univr.it/laking/Cetraro/html5up-strata/index.html"
  },
  {
    title: "Bridges between representation theory and homotopy theory",
    event: "Séminaire Compréhensible",
    date: "Thu Dec 7 2023",
    location: "Institut Fourier, Université Grenoble Alpes",
    audience: "Researchers & Academics",
    description: "Thursday 7 December 2023, Institut Fourier, Université Grenoble Alpes",
    link: "https://www-fourier.ujf-grenoble.fr/?q=fr/content/chiara-sava"
  },
  {
    title: "∞-Dold-Kan correspondence via representation theory",
    event: "MALGA Seminar",
    date: "Tue Oct 17 2023",
    location: "Università di Verona",
    audience: "Researchers & Academics",
    description: "Tuesday 17 October 2023, Università di Verona",
    link: "https://www.di.univr.it/?ent=ciclosem&idC=70&lang=en"
  },
  {
    title: "∞-Dold-Kan correspondence via representation theory",
    event: "IWoAT Summer School 2023: Operads, spectra, and multiplicative structures",
    date: "Wed Aug 16 2023",
    location: "Yanqi Lake BIMSA",
    audience: "Researchers & Academics",
    description: "Wednesday 16 August 2023, Yanqi Lake BIMSA",
    link: "https://iwoat.github.io/school2023"
  },
  {
    title: "∞-Dold-Kan correspondence via representation theory",
    event: "BIREP-Seminar",
    date: "Fri Apr 28 2023",
    location: "Bielefeld University",
    audience: "Researchers & Academics",
    description: "Friday 28 April 2023, Bielefeld University",
    link: "https://www.math.uni-bielefeld.de/birep/seminar.php"
  },
  {
    title: "∞-Dold-Kan correspondence via representation theory",
    event: "Categories, clusters, and completions master class",
    date: "Wed Mar 22 2023",
    location: "AIAS, Aarhus University",
    audience: "Researchers & Academics",
    description: "Wednesday 22 March 2023, AIAS, Aarhus University",
    link: "https://conferences.au.dk/categoriesclusterscompletions2023"
  },
  {
    title: "∞-Dold-Kan correspondence via representation theory",
    event: "Séminaire “Topologie”",
    date: "Fri Jan 6 2023",
    location: "Université de Lille 1",
    audience: "Researchers & Academics",
    description: "Friday 6 January 2023, Université de Lille 1",
    link: "https://math.univ-lille.fr/detail-event/tba-chiara-sava"
  },
  {
    title: "Representation theory of algebras: an introduction",
    event: "Séminaire Pampers",
    date: "Thu Jan 5 2023",
    location: "Institut de recherche mathématique de Rennes",
    audience: "Researchers & Academics",
    description: "Thursday 5 January 2023, Institut de recherche mathématique de Rennes",
    link: "https://irmar.univ-rennes.fr/evenements/representation-theory-algebras-introduction"
  },
  {
    title: "∞-Dold-Kan correspondence via representation theory",
    event: "Algebra Seminar",
    date: "Mon Dec 19 2022",
    location: "Charles University, Prague",
    audience: "Researchers & Academics",
    description: "Monday 19 December 2022, Charles University, Prague",
    link: "https://www.mff.cuni.cz/en/math/ka/events/seminars/algebra-seminar"
  }
];


  const renderTalkCard = (talk: any, index: number) => (
    <div key={index} className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-xl font-semibold text-card-foreground mb-3">{talk.title}</h3>
      <p className="text-muted-foreground mb-4">{talk.description}</p>
      
      <div className="space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center space-x-2">
          <Calendar size={16} className="text-primary" />
          <span>{talk.date}</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin size={16} className="text-primary" />
          <span>{talk.location}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Users size={16} className="text-primary" />
          <span>{talk.audience}</span>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-border">
        <span className="text-sm font-medium text-primary">{talk.event}</span>
      </div>
      <a
          href={talk.link}
          className="inline-flex items-center text-orange-600 hover:text-blue-800 text-sm"
          >
          See more
          <ExternalLink size={14} className="ml-1" />
        </a>
    </div>
  );

  const renderPastTalkCard = (talk: any, index: number) => (
    <div key={index} className="rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-l font-semibold text-card-foreground mb-3">{talk.title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{talk.description}</p>
      
      <div className="space-y-2 text-xs text-muted-foreground">
        <div className="flex items-center space-x-2">
          <Calendar size={16} className="text-primary" />
          <span>{talk.date}</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin size={16} className="text-primary" />
          <span>{talk.location}</span>
        </div>
      </div>
      
      <div className="mt-4 ">
        <span className="text-xs font-medium text-primary">{talk.event}</span>
      </div>
      <a
          href={talk.link}
          className="text-xs inline-flex items-center text-orange-600 hover:text-blue-800 text-sm"
          >
          See more
          <ExternalLink size={14} className="ml-1" />
        </a>
    </div>
  );

  return (
    <section id="talks" className="bg-orange-100 relative py-16 overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute inset-0">
        
        {/* Floating Elements */}
        <div 
          className="absolute top-20 right-10 w-6 h-6 bg-primary/20 rounded-full"
          style={{ transform: `translateY(${Math.sin(scrollY * 0.01) * 10}px)` }}
        />
        <div 
          className="absolute bottom-32 left-20 w-4 h-4 bg-orange-300/30 rounded-full"
          style={{ transform: `translateY(${Math.cos(scrollY * 0.012) * 15}px)` }}
        />
        <div 
          className="absolute top-1/2 left-10 w-8 h-8 bg-indigo-200/25 rounded-full"
          style={{ transform: `translateY(${Math.sin(scrollY * 0.008) * 12}px)` }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Public Talks</h2>
        </div>

        {/* Upcoming Talks */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Talks</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {upcomingTalks.map((talk, index) => renderTalkCard(talk, index))}
          </div>
        </div>

        {/* Past Talks Toggle */}
        <div className="text-center mb-6">
          <button
            onClick={() => setShowPastTalks(!showPastTalks)}
            className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            <span>{showPastTalks ? 'Hide' : 'Show'} Past Talks</span>
            {showPastTalks ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>

        {/* Past Talks */}
        {showPastTalks && (
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Past Talks</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {pastTalks.map((talk, index) => renderPastTalkCard(talk, index))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default PublicTalks;
