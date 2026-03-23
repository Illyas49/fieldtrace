import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import ResearchFocus from '../components/ResearchFocus';
import Methodology from '../components/Methodology';
import SampleStudies from '../components/SampleStudies';
import Participation from '../components/Participation';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <Overview />
      <ResearchFocus />
      <Methodology />
      <SampleStudies />
      <Participation />
      <FAQ />
      <Footer />
    </div>
  );
}
