import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutProduct from '@/components/AboutProduct';
import Benefits from '@/components/Benefits';
import AboutAuthor from '@/components/AboutAuthor';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutProduct />
      <Benefits />
      <AboutAuthor />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
