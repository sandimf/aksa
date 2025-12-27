"use client";

import React, { useState } from "react";
import {
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ✅ ImageKit SDK resmi terbaru
import { ImageKitProvider, IKImage } from "@imagekit/react";

export default function FilmWebsite() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const imageKitUrlEndpoint = "https://ik.imagekit.io/1iae3lh39/";

  const inReleaseMovies = [
    { title: "Negeri Dongeng", image: "poster-ng.jpg", status: "NEGERI DONGENG" },
    { title: "Nona", image: "poster-n.jpg", status: "NONA" },
    { title: "Tegar", image: "poster-t.jpg", status: "TEGAR" },
    { title: "Maira", image: "poster-tt.jpg", status: "TEMAN TEGAR MAIRA" },
    { title: "Alang-Alang", image: "poster-a.jpg", status: "ALANG-ALANG" },
  ];

  const trailers = [
    { title: "NEGERI DONGENG", videoId: "50aKtuwUuV4" },
    { title: "NONA", videoId: "SO1NGdWGASY" },
    { title: "TEGAR", videoId: "qARKg4kVxLs" },
    { title: "TEMAN TEGAR MAIRA", videoId: "fgLbajva8k4" },
    { title: "ALANG-ALANG", videoId: "dQw4w9WgXcQ" },
  ];

  return (
    <ImageKitProvider urlEndpoint={imageKitUrlEndpoint}>
      <div className="bg-black text-white min-h-screen">

        {/* HERO */}
        <section className="relative h-screen">
          <IKImage
            path="cover_maira.webp"
            alt="Teman Tegar Maira"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />

          <div className="absolute bottom-8 left-0 right-0 px-6">
            <div className="bg-black/60 rounded-full px-6 py-4 flex items-center justify-between">
              <ChevronLeft />
              <div className="text-sm">COMING SOON IN THEATRES</div>
              <ChevronRight />
            </div>
          </div>
        </section>

        {/* IN RELEASE */}
        <section className="relative py-16 px-6">
          <div className="absolute inset-0 opacity-30">
            <IKImage
              path="bg.jpg"
              alt="Background"
              className="w-full h-full object-cover"
              transformation={[{ quality: 60 }]}
            />
          </div>

          <h2 className="relative text-4xl font-bold mb-8">
            In Release
          </h2>

          <div className="relative grid grid-cols-2 md:grid-cols-5 gap-6">
            {inReleaseMovies.map((movie, i) => (
              <div key={i} className="group">
                <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
                  <IKImage
                    path={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                    transformation={[{ width: 400 }]}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                    <Play size={48} />
                  </div>
                </div>

                <div className="text-sm mt-2">{movie.status}</div>
                <div className="flex gap-2 mt-2">
                  <Button size="sm">WATCH</Button>
                  <Button size="sm" variant="secondary">
                    TRAILER
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TRAILERS */}
        <section className="py-16 px-6 bg-gray-900">
          <h2 className="text-4xl font-bold mb-8">
            Trailers & Videos
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trailers.map((t, i) => (
              <div key={i}>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${t.videoId}`}
                    className="w-full h-full"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
                <div className="mt-2 text-sm">{t.title}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative py-12 px-6">
          <div className="absolute inset-0">
            <IKImage
              path="bg-footer.jpg"
              alt="Footer"
              className="w-full h-full object-cover"
              transformation={[{ quality: 60 }]}
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="relative">
            <IKImage
              path="logo_aksa.png"
              alt="Aksa Logo"
              className="h-10 w-auto brightness-0 invert"
              transformation={[{ width: 120 }]}
            />
            <p className="text-sm text-gray-400 mt-4">
              © 2025 AKSA BUMI LANGIT
            </p>
          </div>
        </footer>
      </div>
    </ImageKitProvider>
  );
}-2 gap-8">
            <div className="relative rounded-lg overflow-hidden aspect-video">
              {/* PERUBAHAN: Ganti Image dari next/image ke IKImage */}
              <IKImage 
                  path="cover_maira.jpg" 
                  alt="Maira" 
                  className="w-full h-full object-cover" 
                  tr="w-800" // Contoh: lebar maksimum 800px
              />
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-video">
              {/* PERUBAHAN: Ganti Image dari next/image ke IKImage */}
              <IKImage 
                  path="cover_tegar.png" 
                  alt="Tegar" 
                  className="w-full h-full object-cover" 
                  tr="w-800"
              />
            </div>
          </div>
        </section>

        {/* 🚀 5. Newsletter Section (Background Image Optimization) */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 opacity-30">
            {/* PERUBAHAN: Ganti Image dari next/image ke IKImage */}
            <IKImage 
              path="bg-footer.jpg" 
              alt="Background" 
              className="w-full h-full object-cover" 
              tr="q-60"
            />
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
              {/* Mengubah gap-0 menjadi gap-12 untuk tata letak yang lebih baik di desktop */}
              <div className="flex flex-col md:flex-row gap-12 items-start max-w-4xl">
                {/* Left Side - Newsletter */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">Email Newsletter</h3>
                  <div className="space-y-4 mb-8">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full md:max-w-sm bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                    {/* Menghapus <br/> yang tidak diperlukan di JSX */}
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full md:max-w-sm bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <label className="flex items-start gap-2 text-sm text-gray-400 mb-6">
                    <input type="checkbox" className="mt-1" />
                    <span>By checking this box you agree to our Privacy<br />Policy and Terms of Service</span>
                  </label>
                  <button className="bg-blue-600 text-white px-12 py-3 rounded-full hover:bg-blue-700 transition-colors">
                    Subscribe
                  </button>
                </div>

                {/* Right Side - Social Media (Tidak ada gambar) */}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                  <div className="flex gap-3 justify-center md:justify-start">
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
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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

        {/* 🚀 6. Footer (Background Image Optimization) */}
        <footer className="relative py-12 px-6">
          <div className="absolute inset-0">
            {/* PERUBAHAN: Ganti Image dari next/image ke IKImage */}
            <IKImage 
              path="bg.jpg" 
              alt="Footer Background" 
              className="object-cover w-full h-full" 
              tr="q-60"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              {/* PERUBAHAN: Ganti Image dari next/image ke IKImage */}
              {/* Catatan: Untuk logo, karena ukurannya kecil dan tidak perlu IK Image, bisa pakai tag <img> biasa atau IKImage jika logonya di ImageKit */}
              <div className="mb-4">
                <IKImage 
                    path="logo_aksa.png" // Asumsi logo_aksa.png ada di root ImageKit
                    alt="Aksa Logo" 
                    className="brightness-0 invert h-10 w-auto" // Tambahkan h-10 w-auto untuk dimensi
                    tr="w-120,h-40" // Transformasi untuk ukuran
                />
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
    </IKContext>
  );
};

export default FilmWebsite;
"use client";

import React, { useState } from "react";
import {
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ✅ ImageKit SDK resmi terbaru
import { ImageKitProvider, IKImage } from "@imagekit/react";

export default function FilmWebsite() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const imageKitUrlEndpoint = "https://ik.imagekit.io/1iae3lh39/";

  const inReleaseMovies = [
    { title: "Negeri Dongeng", image: "poster-ng.jpg", status: "NEGERI DONGENG" },
    { title: "Nona", image: "poster-n.jpg", status: "NONA" },
    { title: "Tegar", image: "poster-t.jpg", status: "TEGAR" },
    { title: "Maira", image: "poster-tt.jpg", status: "TEMAN TEGAR MAIRA" },
    { title: "Alang-Alang", image: "poster-a.jpg", status: "ALANG-ALANG" },
  ];

  const trailers = [
    { title: "NEGERI DONGENG", videoId: "50aKtuwUuV4" },
    { title: "NONA", videoId: "SO1NGdWGASY" },
    { title: "TEGAR", videoId: "qARKg4kVxLs" },
    { title: "TEMAN TEGAR MAIRA", videoId: "fgLbajva8k4" },
    { title: "ALANG-ALANG", videoId: "dQw4w9WgXcQ" },
  ];

  return (
    <ImageKitProvider urlEndpoint={imageKitUrlEndpoint}>
      <div className="bg-black text-white min-h-screen">

        {/* HERO */}
        <section className="relative h-screen">
          <IKImage
            path="cover_maira.webp"
            alt="Teman Tegar Maira"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />

          <div className="absolute bottom-8 left-0 right-0 px-6">
            <div className="bg-black/60 rounded-full px-6 py-4 flex items-center justify-between">
              <ChevronLeft />
              <div className="text-sm">COMING SOON IN THEATRES</div>
              <ChevronRight />
            </div>
          </div>
        </section>

        {/* IN RELEASE */}
        <section className="relative py-16 px-6">
          <div className="absolute inset-0 opacity-30">
            <IKImage
              path="bg.jpg"
              alt="Background"
              className="w-full h-full object-cover"
              transformation={[{ quality: 60 }]}
            />
          </div>

          <h2 className="relative text-4xl font-bold mb-8">
            In Release
          </h2>

          <div className="relative grid grid-cols-2 md:grid-cols-5 gap-6">
            {inReleaseMovies.map((movie, i) => (
              <div key={i} className="group">
                <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
                  <IKImage
                    path={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                    transformation={[{ width: 400 }]}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                    <Play size={48} />
                  </div>
                </div>

                <div className="text-sm mt-2">{movie.status}</div>
                <div className="flex gap-2 mt-2">
                  <Button size="sm">WATCH</Button>
                  <Button size="sm" variant="secondary">
                    TRAILER
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TRAILERS */}
        <section className="py-16 px-6 bg-gray-900">
          <h2 className="text-4xl font-bold mb-8">
            Trailers & Videos
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trailers.map((t, i) => (
              <div key={i}>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${t.videoId}`}
                    className="w-full h-full"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
                <div className="mt-2 text-sm">{t.title}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative py-12 px-6">
          <div className="absolute inset-0">
            <IKImage
              path="bg-footer.jpg"
              alt="Footer"
              className="w-full h-full object-cover"
              transformation={[{ quality: 60 }]}
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="relative">
            <IKImage
              path="logo_aksa.png"
              alt="Aksa Logo"
              className="h-10 w-auto brightness-0 invert"
              transformation={[{ width: 120 }]}
            />
            <p className="text-sm text-gray-400 mt-4">
              © 2025 AKSA BUMI LANGIT
            </p>
          </div>
        </footer>
      </div>
    </ImageKitProvider>
  );
}
