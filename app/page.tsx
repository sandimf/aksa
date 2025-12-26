"use client";

import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight, MapPin, Phone, Mail } from 'lucide-react'; // Menu dihapus jika tidak dipakai
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const FilmWebsite = () => {
  // ... state dan data array sama seperti sebelumnya ...
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const films = [
    { title: "Negeri Dongeng", type: "NEGERI DONGENG", status: "GET TICKETS" },
    { title: "Nona", type: "NONA", status: "WATCH TRAILER" },
    { title: "Tegar", type: "TEGAR", status: "WATCH TRAILER" },
    { title: "Teman Tegar Maira", type: "TEMAN TEGAR MAIRA", status: "GET TICKETS" },
    { title: "Alang-Alang", type: "ALANG-ALANG", status: "WATCH TRAILER" }
  ];

  const inReleaseMovies = [
    { title: "Negeri Dongeng", image: "/poster-ng.jpg", status: "NEGERI DONGENG" },
    { title: "Nona", image: "/poster-n.jpg", status: "NONA" },
    { title: "Tegar", image: "/poster-t.jpg", status: "TEGAR" },
    { title: "Maira", image: "/poster-tt.jpg", status: "TEMAN TEGAR MAIRA" },
    { title: "Alang-Alang", image: "/poster-a.jpg", status: "ALANG-ALANG" }
  ];

  const trailers = [
    { title: "NEGERI DONGENG", videoId: "50aKtuwUuV4" }, 
    { title: "NONA", videoId: "SO1NGdWGASY" },
    { title: "TEGAR", videoId: "qARKg4kVxLs" },
    { title: "TEMAN TEGAR MAIRA", videoId: "fgLbajva8k4" },
    { title: "ALANG-ALANG", videoId: "dQw4w9WgXcQ" }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[100vh] min-h-[100vh]">
        <div className="absolute inset-0">
          <Image
            src="/cover_maira.jpg"
            fill
            alt="Teman Tegar Maira"
            className="object-cover"
            priority={true} // Wajib true untuk LCP (gambar pertama yang dilihat user)
            // PENTING: sizes memberi tahu browser ukuran gambar di berbagai viewport
            sizes="100vw"
            quality={85} // Turunkan sedikit dari 100 ke 85-90 untuk hemat size visual tak beda jauh
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
        </div>

        {/* ... (Bottom Info Bar & Side Text Code sama, tidak ada perubahan performance) ... */}
         {/* Bottom Info Bar */}
         <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-6">
            <div className="bg-black/60 backdrop-blur-sm rounded-full px-4 md:px-8 py-4 flex justify-between items-center overflow-hidden">
              <button className="flex-shrink-0"><ChevronLeft className="w-6 h-6" /></button>
              <div className="flex gap-6 md:gap-12 text-xs md:text-sm overflow-x-auto scrollbar-hide flex-1 justify-center px-2">
                {/* Content... */}
                 <div className="flex-shrink-0 text-center">
                  <div className="text-gray-400">Negeri Dongeng</div>
                  <div>Coming Soon</div>
                </div>
                {/* ... other items ... */}
              </div>
              <button className="flex-shrink-0"><ChevronRight className="w-6 h-6" /></button>
            </div>
          </div>
        </div>
        
        {/* Side Text */}
        <div className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2">
             {/* Content Text... */}
             <div className="text-xl md:text-2xl font-bold">
                <div>COMING SOON IN THEATRES</div>
                <div className="text-4xl md:text-6xl mt-4">TEMAN</div>
                {/* ... */}
             </div>
        </div>
      </div>

      {/* In Release Section */}
      <section className="py-16 px-6 relative">
        <div className="absolute inset-0 opacity-30">
          {/* PERBAIKAN: Ganti <img> dengan Image + fill */}
          <Image 
            src="/bg.jpg" 
            alt="Background" 
            fill
            className="object-cover"
            sizes="100vw"
            quality={75} // Background blur/opacity tidak butuh kualitas tinggi
          />
        </div>
        <div className="relative">
          <h2 className="text-4xl font-bold mb-8 md:absolute md:left-8 md:top-8 md:z-10 md:mb-0">In <br className="hidden md:block"/>Release</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:ml-48">
            {inReleaseMovies.map((movie, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="bg-gray-800 rounded-lg overflow-hidden mb-4 aspect-[2/3] relative">
                  <Image 
                    src={movie.image} 
                    alt={movie.title} 
                    fill // Gunakan fill agar responsif mengikuti parent div aspect ratio
                    className="object-cover"
                    // PENTING: sizes dinamis.
                    // HP (1 kolom/2 kolom): 50vw
                    // Desktop (5 kolom): 20vw
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                    <Play className="w-16 h-16" />
                  </div>
                </div>
                <div className="text-sm mb-2">{movie.status}</div>
                <div className="flex gap-2 px-1">
                  <Button className="flex-1 bg-blue-600 text-white py-1 px-2 rounded-full text-xs hover:bg-blue-700">
                    WATCH AT HOME
                  </Button>
                  {/* ... */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trailers Section */}
      <section className="py-16 px-6 bg-gray-900">
        {/* Iframe YouTube sebenarnya berat. Gunakan facade (gambar cover dulu, klik baru load iframe) 
            jika ingin skor 95+. Tapi kode di bawah ini standar. */}
        <h2 className="text-4xl font-bold mb-8">Trailers and Featured Videos</h2>
        {/* ... content ... */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {trailers.map((trailer, idx) => (
             // ... trailer code ...
             <div key={idx} className="relative">
              <div className="bg-gray-800 rounded-lg overflow-hidden aspect-video relative">
                <iframe
                  src={`https://www.youtube.com/embed/${trailer.videoId}`}
                  title={trailer.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy" // Tambahkan lazy loading native
                ></iframe>
              </div>
              <div className="mt-2 text-sm">{trailer.title}</div>
             </div>
          ))}
        </div>
      </section>

      {/* Featured Movies */}
      <section className="py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-lg overflow-hidden aspect-video">
            <Image 
                src="/cover_maira.jpg" 
                alt="Maira" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden aspect-video">
            {/* Pastikan ini sudah dikonversi ke JPG/WebP jika tidak butuh transparan */}
            <Image 
                src="/cover_tegar.png" 
                alt="Tegar" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 opacity-30">
          <Image 
            src="/bg-footer.jpg" 
            alt="Background" 
            fill
            className="object-cover"
            sizes="100vw"
            quality={60} // Background footer tidak perlu tajam
          />
        </div>
        {/* ... Newsletter Form Content (Code sama) ... */}
         <div className="relative container mx-auto">
             {/* ... */}
         </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6">
        <div className="absolute inset-0">
          <Image 
            src="/bg.jpg" 
            alt="Footer Background" 
            fill 
            className="object-cover" 
            sizes="100vw"
            quality={60}
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        {/* ... Footer Content ... */}
      </footer>
    </div>
  );
};

export default FilmWebsite;
