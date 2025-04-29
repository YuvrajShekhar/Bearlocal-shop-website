import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroCard } from './components/cards/HeroCard';
import { TimingsCard } from './components/cards/TimingsCard';
import { ContactCard } from './components/cards/ContactCard';
import { ReviewsCard } from './components/cards/ReviewsCard';
import { AboutCard } from './components/cards/AboutCard';
import { ServicesCard } from './components/cards/ServicesCard';
import { CtaCard } from './components/cards/CtaCard';
import { shopInfo } from './data/shopData';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header name={shopInfo.name} />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <HeroCard name={shopInfo.name} photo={shopInfo.photo} />
          <TimingsCard timings={shopInfo.timings} />
          <ContactCard location={shopInfo.location} />
          <ReviewsCard reviews={shopInfo.reviews} />
          <AboutCard about={shopInfo.about} />
          <ServicesCard services={shopInfo.services} />
          <CtaCard phone={shopInfo.location.phone} />
        </div>
      </main>

      <Footer name={shopInfo.name} />
    </div>
  );
}

export default App;