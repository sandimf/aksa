"use client";

import React from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageKitProvider, Image } from "@imagekit/react";

export default function Page() {
  const imageKitUrlEndpoint = "https://ik.imagekit.io/1iae3lh39";

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
      <main className="bg-black text-white min-h-screen">

        {/* HERO */}
        <section className="relative h-screen">
          <Image
            src="/cover_maira.jpg"
            alt="Teman Tegar Maira"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
          <div className="absolute bottom-10 left-10">
            <h1 className="text-5xl font-bold">TEMAN TEGAR MAIRA</h1>
            <div className="mt-6 flex gap-4">
              <Button>GET TICKETS</Button>
              <Button variant="secondary">WATCH TRAILER</Button>
            </div>
          </div>
        </section>

        {/* IN RELEASE */}
        <section className="relative py-16 px-6">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/bg.jpg"
              alt="Background"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              transformation={[{ quality: 60 }]}
            />
          </div>

          <h2 className="relative text-4xl font-bold mb-8">In Release</h2>

          <div className="relative grid grid-cols-2 md:grid-cols-5 gap-6">
            {inReleaseMovies.map((movie, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
                  <Image
                    src={`/${movie.image}`}
                    alt={movie.title}
                    width={400}
                    height={600}
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
          <h2 className="text-4xl font-bold mb-8">Trailers</h2>

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

        {/* FEATURED */}
        <section className="py-16 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden aspect-video">
              <Image
                src="/cover_maira.jpg"
                alt="Maira"
                width={1280}
                height={720}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative rounded-lg overflow-hidden aspect-video">
              <Image
                src="/cover_tegar.png"
                alt="Tegar"
                width={1280}
                height={720}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative py-12 px-6">
          <div className="absolute inset-0">
            <Image
              src="/bg-footer.jpg"
              alt="Footer"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              transformation={[{ quality: 60 }]}
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="relative">
            <Image
              src="/logo_aksa.png"
              alt="Aksa Logo"
              width={120}
              height={40}
              className="brightness-0 invert"
            />
            <p className="text-sm text-gray-400 mt-4">
              © 2025 AKSA BUMI LANGIT
            </p>
          </div>
        </footer>

      </main>
    </ImageKitProvider>
  );
    }
