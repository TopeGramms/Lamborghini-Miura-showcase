'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-gray border-t border-gold/30 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl text-gold font-bold mb-2">
              Miura SV
            </h3>
            <p className="text-light-gray font-light">
              An automotive legend
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <p className="text-light-gray font-light mb-4">Explore</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#gallery" className="text-gold hover:text-light-gray smooth-transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#details" className="text-gold hover:text-light-gray smooth-transition">
                  Details
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <p className="text-light-gray font-light mb-4">Connect</p>
            <div className="flex justify-center md:justify-end gap-4">
              <a href="#" className="text-gold hover:text-light-gray smooth-transition text-sm">
                Instagram
              </a>
              <a href="#" className="text-gold hover:text-light-gray smooth-transition text-sm">
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/30 pt-8">
          <div className="text-center text-light-gray font-light text-sm">
            <p>
              © {currentYear} Lamborghini Miura SV Showcase. All rights reserved.
            </p>
            <p className="mt-2">
              Crafted with precision and passion for automotive excellence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
