import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeader } from "@/components/ui";
import { coffeeBeans } from "@/lib/data";

export const metadata: Metadata = {
  title: "Coffee Beans",
  description: "Direct-trade Zambian coffee beans. Roasted fresh. Available for pickup or delivery.",
};

export default function BeansPage() {
  return (
    <>
      <section className="pt-24 md:pt-32 pb-12 bg-espresso-900 relative">
        <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1920&h=600&fit=crop)] bg-cover bg-center opacity-20" />
        <div className="container-page relative z-10">
          <SectionHeader title="Coffee Beans" subtitle="Direct-trade Zambian coffee. Roasted in small batches. 250g bags." centered />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {coffeeBeans.map((bean) => (
              <div key={bean.id} className="card p-6 md:p-8 flex flex-col sm:flex-row gap-6">
                <div className="relative w-full sm:w-56 aspect-square rounded-xl overflow-hidden shrink-0">
                  <Image src={bean.image} alt={bean.name} fill className="object-cover" sizes="250px" />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold">{bean.name}</h3>
                    <p className="text-espresso-500 dark:text-cream-400 text-sm mt-1">{bean.origin} · {bean.roast} roast</p>
                    <p className="text-espresso-600 dark:text-cream-300 text-sm mt-3 leading-relaxed">{bean.description}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-bold text-2xl">K{bean.price}</span>
                    <span className={bean.inStock ? "badge-green" : "badge-clay"}>
                      {bean.inStock ? "In Stock" : "Sold Out"}
                    </span>
                  </div>
                  <button className="btn-primary w-full mt-4" disabled={!bean.inStock}>
                    {bean.inStock ? "Add to Order" : "Notify Me"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-espresso-50 dark:bg-espresso-900 text-center">
        <div className="container-page max-w-xl">
          <h3 className="font-display text-2xl font-bold">Wholesale Beans</h3>
          <p className="mt-3 text-espresso-600 dark:text-cream-400">Supplying cafés, hotels, and offices across Lusaka. Bulk pricing from 5kg.</p>
          <a href="mailto:wholesale@zambean.co.zm" className="btn-secondary mt-6">Enquire About Wholesale</a>
        </div>
      </section>
    </>
  );
}
