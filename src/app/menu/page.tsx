import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeader } from "@/components/ui";
import { menuItems, type MenuItem } from "@/lib/data";

export const metadata: Metadata = {
  title: "Menu",
  description: "Full menu — hot drinks, breakfast, lunch, cakes, cold drinks, teas, kiddos & cocktails. Every item photographed.",
};

const categories: { key: MenuItem["category"]; label: string; emoji: string; time?: string }[] = [
  { key: "coffee", label: "Hot Drinks", emoji: "☕" },
  { key: "breakfast", label: "Breakfast", emoji: "🍳", time: "07:30 – 12:00" },
  { key: "lunch", label: "Lunch", emoji: "🥩", time: "12:00 – 16:30" },
  { key: "pastry", label: "Cakes & Croissants", emoji: "🥐" },
  { key: "drinks", label: "Cold Drinks", emoji: "🍹" },
  { key: "teas", label: "Teas", emoji: "🫖" },
  { key: "kiddos", label: "Kiddos", emoji: "🧒" },
  { key: "cocktails", label: "Cocktails & Beer", emoji: "🍸" },
];

export default function MenuPage() {
  return (
    <>
      <section className="pt-24 md:pt-32 pb-12 bg-espresso-900 relative">
        <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&h=600&fit=crop)] bg-cover bg-center opacity-25" />
        <div className="container-page relative z-10">
          <SectionHeader title="Our Menu" subtitle="Photographed, described, priced. No PDFs — just great food." centered />
        </div>
      </section>

      {categories.map((cat) => {
        const items = menuItems.filter((i) => i.category === cat.key);
        if (!items.length) return null;
        return (
          <section key={cat.key} id={cat.key} className="section-padding even:bg-espresso-50 even:dark:bg-espresso-900">
            <div className="container-page">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                {cat.emoji} {cat.label}
              </h3>
              {cat.time && <p className="text-clay-500 dark:text-clay-400 text-sm mb-6 font-medium">{cat.time}</p>}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                  <div key={item.id} className="card group">
                    <div className="relative h-48 overflow-hidden">
                      <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="400px" />
                      <div className="absolute top-3 left-3 flex gap-1 flex-wrap">
                        {item.dietaryTags.map((tag) => (
                          <span key={tag} className="badge-green text-[10px]">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-display font-bold text-lg">{item.name}</h4>
                        <span className="font-bold text-lg text-garden-600 dark:text-garden-400 shrink-0">K{item.price}</span>
                      </div>
                      <p className="text-espresso-500 dark:text-cream-400 text-sm mt-2 leading-relaxed">{item.description}</p>
                      {item.pairing && (
                        <p className="text-clay-500 text-xs mt-3 font-medium italic">{item.pairing}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
