import React from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb2JpbGUlMjBhcHAlMjBzY3JlZW5zfGVufDB8MHx8fDE3NjI2NjQ2NTZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Mobile app screens',
  },
  {
    src: 'https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb2JpbGUlMjBhcHAlMjBzY3JlZW5zfGVufDB8MHx8fDE3NjI2NjQ2NTZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Analytics dashboard',
  },
  {
    src: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MHwwfHx8MTc2MjY2NDY1N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Flutter code and UI',
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-2xl font-bold text-slate-900 sm:text-3xl">Showcase Gallery</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <div key={img.src} className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
              <img src={img.src} alt={img.alt} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-4 text-sm text-slate-700">{img.alt}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
