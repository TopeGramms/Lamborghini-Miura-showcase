'use client';

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: 'url(/Lamborghini-Miura-showcase/images/front-view.jpg)',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-gold mb-4 smooth-transition">
          Lamborghini Miura SV
        </h1>
        <p className="font-sans text-xl md:text-2xl text-light-gray font-light tracking-widest">
          Timeless Italian Masterpiece
        </p>
      </div>
    </section>
  );
}
