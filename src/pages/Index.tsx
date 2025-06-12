
import Header from '../components/Header';
import Hero from '../components/Hero';
import Research from '../components/Research';
import PublicTalks from '../components/PublicTalks';
import Links from '../components/Links';
import Teaching from '../components/Teaching';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
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
