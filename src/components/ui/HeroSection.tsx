"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setLoaded(true);
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-end pb-24 md:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop"
        >
          <source src="https://videos.pexels.com/video-files/4252892/4252892-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/90 via-espresso-950/50 to-espresso-950/30" />
      </div>

      {/* Content */}
      <div className="container-page relative z-10 w-full">
        <div className={`max-w-2xl transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-2 mb-6">
            <span className="badge-cream text-sm">★ 4.5 TripAdvisor</span>
            <span className="badge-cream text-sm">Top 10 of 175 restaurants in Lusaka</span>
          </div>

          <h1 className="text-cream-50 text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-none tracking-tight text-balance">
            Lusaka&apos;s Garden Café <span className="text-clay-400">&amp;</span> Coffee House
          </h1>

          <p className="text-cream-300 text-lg md:text-xl mt-6 max-w-lg leading-relaxed">
            Specialty coffee, fresh food, beautiful gardens, and an antique shop — hidden in the heart of Lusaka.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Link href="/order" className="btn-primary text-lg !px-8 !py-4">Order Now</Link>
            <Link href="/reservations" className="btn-secondary text-lg !px-8 !py-4 border-cream-300 text-cream-100 hover:bg-cream-100 hover:text-espresso-900 dark:border-cream-300 dark:text-cream-100 dark:hover:bg-cream-100 dark:hover:text-espresso-900">Book a Table</Link>
            <Link href="/menu" className="btn-ghost text-lg !px-8 !py-4 text-cream-300 hover:text-cream-100">See Menu</Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="w-6 h-10 border-2 border-cream-300/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cream-300/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
