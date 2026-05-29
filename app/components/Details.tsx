'use client';

export default function Details() {
  return (
    <section className="py-20 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-gold mb-4">
            The Legend
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Year */}
          <div className="text-center">
            <div className="inline-block mb-4 p-4 border-2 border-gold rounded-lg">
              <p className="font-serif text-4xl text-gold font-bold">1972</p>
            </div>
            <h3 className="font-serif text-2xl text-gold mb-3">Production Year</h3>
            <p className="text-light-gray font-light leading-relaxed">
              The final evolution of the iconic Miura line, representing the pinnacle of 1970s supercar engineering.
            </p>
          </div>

          {/* Engine */}
          <div className="text-center">
            <div className="inline-block mb-4 p-4 border-2 border-gold rounded-lg">
              <p className="font-serif text-3xl text-gold font-bold">12-Cyl</p>
            </div>
            <h3 className="font-serif text-2xl text-gold mb-3">V12 Engine</h3>
            <p className="text-light-gray font-light leading-relaxed">
              3.9-liter mid-mounted engine producing 385 horsepower, capable of 170+ mph top speed—revolutionary for its era.
            </p>
          </div>

          {/* History */}
          <div className="text-center">
            <div className="inline-block mb-4 p-4 border-2 border-gold rounded-lg">
              <p className="font-serif text-3xl text-gold font-bold">ICON</p>
            </div>
            <h3 className="font-serif text-2xl text-gold mb-3">Legacy</h3>
            <p className="text-light-gray font-light leading-relaxed">
              Widely considered the world's first supercar, the Miura SV remains an automotive masterpiece and collector's treasure.
            </p>
          </div>
        </div>

        {/* Extended History */}
        <div className="mt-16 pt-16 border-t border-gold/30">
          <p className="font-sans text-lg text-light-gray leading-relaxed text-center max-w-3xl mx-auto">
            The Lamborghini Miura, introduced in 1966, redefined what a supercar could be. The SV variant (Super Veloce) represents the final, most refined version of this legendary machine. With its revolutionary mid-mounted V12 engine, dramatic scissor doors, and timeless Italian design by Marcello Gandini, the Miura SV stands as a testament to craftsmanship and innovation. Every curve, every detail, every mechanical component was engineered for performance and beauty—a philosophy that continues to influence supercar design to this day.
          </p>
        </div>
      </div>
    </section>
  );
}
