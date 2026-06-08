import Image from "next/image";
import type { MenuItem } from "@/lib/data";

export default function CardMenu({ item, priority }: { item: MenuItem; priority?: boolean }) {
  return (
    <article className="card group cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" priority={priority} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
          {item.dietaryTags.includes("vegetarian") && <span className="badge-green">🌿 Veg</span>}
          {item.dietaryTags.includes("vegan") && <span className="badge-green">🌱 Vegan</span>}
          {item.dietaryTags.includes("gluten-free") && <span className="badge-clay">🌾 GF</span>}
        </div>
        <div className="absolute bottom-3 right-3">
          <span className="bg-white/90 dark:bg-espresso-900/90 backdrop-blur-sm text-espresso-900 dark:text-cream-100 font-bold px-3 py-1.5 rounded-full text-sm">K{item.price}</span>
        </div>
      </div>
      <div className="p-4 md:p-5">
        <h3 className="font-display font-bold text-lg text-espresso-900 dark:text-cream-100">{item.name}</h3>
        <p className="text-espresso-600 dark:text-cream-400 text-sm mt-1.5 line-clamp-2 leading-relaxed">{item.description}</p>
        {item.pairing && (
          <div className="mt-3 pt-3 border-t border-espresso-100 dark:border-espresso-700">
            <p className="text-xs text-garden-700 dark:text-garden-400 font-medium flex items-center gap-1"><span>☕</span> {item.pairing}</p>
          </div>
        )}
      </div>
    </article>
  );
}
