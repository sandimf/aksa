import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 1. Aktifkan AVIF.
    // Format AVIF 20-30% lebih kecil dari WebP dengan kualitas sama/lebih baik.
    // Browser akan cek: Bisa AVIF? -> Jika tidak, WebP -> Jika tidak, JPG/PNG.
    formats: ['image/avif', 'image/webp'],

    // 2. Optimasi Device Sizes.
    // Kita batasi ukuran maksimal generate gambar. 
    // Default Next.js menyertakan 3840px (4K). Jika sumbermu HD, 
    // membatasi sampai 1920px/2048px mencegah server memproses gambar 4K yang berat.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],

    // 3. Image Sizes (untuk gambar kecil/thumbnail)
    // List ukuran lebar gambar yang digunakan saat prop 'sizes' menunjukkan gambar kecil.
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // 4. (Opsional) Cache gambar eksternal lebih lama (jika ada)
    minimumCacheTTL: 60,
  },
  
  // Ekstra: Hapus semua console.log di production build agar JavaScript lebih ringan
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
