import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import WhyUs from '@/components/WhyUs/WhyUs';
import Portfolio from '@/components/Portfolio/Portfolio';
import Process from '@/components/Process/Process';
import Testimonials from '@/components/Testimonials/Testimonials';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Portfolio />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
