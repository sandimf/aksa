"use client";

import React, { useState } from 'react';
import { Menu, Play, ChevronLeft, ChevronRight, MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const FilmWebsite = () => {
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
    { title: "NEGERI DONGENG", videoId: "50aKtuwUuV4" }, // Replace with actual YouTube video IDs
    { title: "NONA", videoId: "SO1NGdWGASY" },
    { title: "TEGAR", videoId: "qARKg4kVxLs" },
    { title: "TEMAN TEGAR MAIRA", videoId: "fgLbajva8k4" },
    { title: "ALANG-ALANG", videoId: "dQw4w9WgXcQ" }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative" style={{ height: '100vh', minHeight: '100vh' }}>
        <div className="absolute inset-0">
          <Image
            src="/cover_maira.jpg"
            fill
            alt="Teman Tegar Maira"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
        </div>


        {/* Bottom Info Bar */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-6">
            <div className="bg-black/60 backdrop-blur-sm rounded-full px-4 md:px-8 py-4 flex justify-between items-center overflow-hidden">
              <button className="flex-shrink-0"><ChevronLeft className="w-6 h-6" /></button>
              <div className="flex gap-6 md:gap-12 text-xs md:text-sm overflow-x-auto scrollbar-hide flex-1 justify-center px-2">
                <div className="flex-shrink-0 text-center">
                  <div className="text-gray-400">Negeri Dongeng</div>
                  <div>Coming Soon</div>
                </div>
                <div className="flex-shrink-0 text-center">
                  <div className="text-gray-400">Nona</div>
                  <div>In Theaters</div>
                </div>
                <div className="flex-shrink-0 text-center">
                  <div className="text-gray-400">Tegar</div>
                  <div>Coming Soon</div>
                </div>
                <div className="flex-shrink-0 text-center">
                  <div className="text-gray-400 whitespace-nowrap">Teman Tegar Maira</div>
                  <div className="whitespace-nowrap">Coming Soon in 2025</div>
                </div>
              </div>
              <button className="flex-shrink-0"><ChevronRight className="w-6 h-6" /></button>
            </div>
          </div>
        </div>

        {/* Side Text */}
        <div className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2">
          <div className="text-xl md:text-2xl font-bold">
            <div>COMING SOON IN THEATRES</div>
            <div className="text-4xl md:text-6xl mt-4">TEMAN</div>
            <div className="text-4xl md:text-6xl">TEGAR</div>
            <div className="text-4xl md:text-6xl">MAIRA</div>
            <div className="mt-6 flex gap-4 mr-24">
              <button className="bg-blue-600 text-white px-6 md:px-8 py-3 rounded-full text-sm md:text-base hover:bg-blue-700">
                GET TICKETS
              </button>
              <button className="bg-white/20 text-white px-6 md:px-8 py-3 rounded-full text-sm md:text-base hover:bg-white/30">
                WATCH TRAILER
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* In Release Section */}
      <section className="py-16 px-6 relative">
        <div className="absolute inset-0 opacity-30">
          <img src="/bg.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative">
          {/* Mobile: Title at top */}
          <h2 className="text-4xl font-bold mb-8 md:absolute md:left-8 md:top-8 md:z-10 md:mb-0">In <br className="hidden md:block"/>Release</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:ml-48">
            {inReleaseMovies.map((movie, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="bg-gray-800 rounded-lg overflow-hidden mb-4 aspect-[2/3] relative">
                  <Image src={movie.image} alt={movie.title} className="w-full h-full object-cover" width={320} height={180} />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="w-16 h-16" />
                  </div>
                </div>
                <div className="text-sm mb-2">{movie.status}</div>
                <div className="flex gap-2 px-1">
                  <Button className="flex-1 bg-blue-600 text-white py-1 px-2 rounded-full text-xs hover:bg-blue-700">
                    WATCH AT HOME
                  </Button>
                  <Button className="flex-1 bg-white/20 text-white py-1 px-2 rounded-full text-xs hover:bg-white/30">
                    WATCH TRAILER
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trailers Section */}
      <section className="py-16 px-6 bg-gray-900">
        <h2 className="text-4xl font-bold mb-8">Trailers and Featured Videos</h2>
        <div className="flex gap-2 mb-8">
          <button className="bg-white text-black px-4 py-2 rounded-full text-sm">
            Universall on YouTube
          </button>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {trailers.map((trailer, idx) => (
            <div key={idx} className="relative">
              <div className="bg-gray-800 rounded-lg overflow-hidden aspect-video relative">
                <iframe
                  src={`https://www.youtube.com/embed/${trailer.videoId}`}
                  title={trailer.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute top-2 left-2 bg-black/80 px-2 py-1 text-xs rounded">
                  OFFICIAL TRAILER
                </div>
              </div>
              <div className="mt-2 text-sm">{trailer.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Movies */}
      <section className="py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-lg overflow-hidden">
            <Image src="/cover_maira.jpg" alt="Maira" width={800} height={500} className="w-full h-full object-cover" />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image src="/cover_tegar.png" alt="Tegar" width={800} height={500} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 opacity-30">
          <Image src="/bg-footer.jpg" alt="Background" width={1920} height={600} className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto">
          {/* Centered Title and Description */}
          <div className="text-center mb-12">
            <h2 className="text-6xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-400 mb-8">
              Sign up now for exclusive giveaways,<br />
              advance screenings, sneak-peeks and other<br />
              offers from AKSA BUMI LANGIT
            </p>
          </div>

          <div className="flex justify-center">
            <div className="flex gap-0 items-start max-w-4xl">
              {/* Left Side - Newsletter */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Email Newsletter</h3>
                <div className="space-y-4 mb-8">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="max-w-sm bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  <br/>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="max-w-sm bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <label className="flex items-start gap-2 text-sm text-gray-400 mb-6">
                  <input type="checkbox" className="mt-1" />
                  <span>By checking this box you agree tou our Privacy<br />Policy and Terms of Service</span>
                </label>
                <button className="bg-blue-600 text-white px-12 py-3 rounded-full hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>

              {/* Right Side - Social Media */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                <div className="flex gap-3 justify-center">
                <button className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.75.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.017z"/>
                  </svg>
                </button>
                <button className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.75.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.017z"/>
                  </svg>
                </button>
                <button className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6">
        <div className="absolute inset-0">
          <Image src="/bg.jpg" alt="Footer Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Image src="/logo_aksa.png" alt="Aksa Logo" width={120} height={40} className="brightness-0 invert" />
            </div>
            <div className="flex gap-4">
              <button className="w-8 h-8 bg-white/20 rounded-full hover:bg-white/30 transition-colors"></button>
              <button className="w-8 h-8 bg-white/20 rounded-full hover:bg-white/30 transition-colors"></button>
              <button className="w-8 h-8 bg-white/20 rounded-full hover:bg-white/30 transition-colors"></button>
              <button className="w-8 h-8 bg-white/20 rounded-full hover:bg-white/30 transition-colors"></button>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Pages</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Pictures</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Music</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TV</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Publishing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Education</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>Location<br />Jl. Gajah Mada No. 45, Citarong<br />Yogyakarta, Jakarta Selatan</div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <div>Telephone<br />0857-7887-5882</div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <div>Email<br />Aldytegar@gmail.co.id</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative text-center text-sm text-gray-300 mt-12">
          ©2025 Aksa. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default FilmWebsite;