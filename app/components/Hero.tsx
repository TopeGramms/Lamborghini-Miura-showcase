'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/front-view.jpg"
        alt="Lamborghini Miura SV"
        fill
        className="object-cover object-center -z-10"
        priority
      />
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
