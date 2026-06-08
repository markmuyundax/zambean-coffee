import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeader } from "@/components/ui";
import { galleryImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Inside Zambean — the garden, the food, the coffee, and the antique shop.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="pt-24 md:pt-32 pb-12 bg-espresso-900 relative">
        <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&h=600&fit=crop)] bg-cover bg-center opacity-20" />
        <div className="container-page relative z-10">
          <SectionHeader title="Gallery" subtitle="Peek inside Lusaka's favorite garden café." centered />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img) => (
              <div key={img.id} className="break-inside-avoid">
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-espresso-50 dark:bg-espresso-900 text-center">
        <div className="container-page max-w-xl">
          <h3 className="font-display text-2xl font-bold">📸 Share Your Moments</h3>
          <p className="mt-3 text-espresso-600 dark:text-cream-400">
            Tag us <strong>@zambeancoffee</strong> on Instagram — we feature our favorites!
          </p>
        </div>
      </section>
    </>
  );
}
