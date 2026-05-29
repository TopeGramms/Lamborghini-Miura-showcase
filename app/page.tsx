import type { Metadata } from 'next';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Details from './components/Details';
import Footer from './components/Footer';
import './styles/globals.css';

export const metadata: Metadata = {
  title: 'Lamborghini Miura SV 1972 | Timeless Italian Masterpiece',
  description:
    'Experience the legendary 1972 Lamborghini Miura SV. Explore stunning photographs and discover the story behind this iconic supercar.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Hero />
      <Gallery />
      <Details />
      <Footer />
    </main>
  );
}
