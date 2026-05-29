import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Details from './components/Details';
import Footer from './components/Footer';
import './styles/globals.css';

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
