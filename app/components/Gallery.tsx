'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, src: '/Lamborghini-Miura-showcase/images/front-view.jpg', alt: 'Front View', title: 'Front View' },
  { id: 2, src: '/Lamborghini-Miura-showcase/images/scissor-doors.jpg', alt: 'Scissor Doors', title: 'Scissor Doors Open' },
  { id: 3, src: '/Lamborghini-Miura-showcase/images/hood-headlight.jpg', alt: 'Hood & Headlight', title: 'Hood & Headlight' },
  { id: 4, src: '/Lamborghini-Miura-showcase/images/rear-view.jpg', alt: 'Rear View', title: 'Rear Profile' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section className="py-20 px-6 bg-dark-gray">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-gold mb-4">
            Gallery
          </h2>
          <p className="text-light-gray text-lg font-light">
            Experience the Miura SV from every angle
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative cursor-pointer group overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(item)}
            >
              {/* Image */}
              <div className="relative w-full h-80 bg-dark-gray">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-110 smooth-transition"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 smooth-transition flex items-center justify-center">
                <div className="text-center">
                  <p className="font-serif text-gold text-xl font-bold">{item.title}</p>
                  <p className="text-light-gray text-sm mt-2">Click to view</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-gold hover:text-light-gray smooth-transition text-3xl"
            >
              ✕
            </button>

            {/* Image */}
            <div className="relative w-full h-[70vh] bg-dark">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>

            {/* Title */}
            <div className="bg-dark-gray p-6 text-center">
              <h3 className="font-serif text-2xl text-gold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
