import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Story",
  description: "How Zambean grew from one espresso bar to top 10 of 175 restaurants in Lusaka.",
};

const storySections = [
  {
    title: "How It Started",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=600&fit=crop",
    alt: "Zambean interior",
    text: "Zambean Coffee Co. opened in 2019 as a passion project by Zambian coffee farmers and a British-Zambian couple who wanted to showcase Zambia's incredible coffee beans. What started as three tables and an espresso machine is now TripAdvisor top 10 of 175 restaurants in Lusaka.",
  },
  {
    title: "The Garden",
    image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&h=600&fit=crop",
    alt: "Garden view",
    text: "Our secret garden is what people come back for. Shaded by flame trees, filled with birdsong, it's a slice of countryside in the heart of Lusaka. Dog-friendly, kid-friendly, and the perfect spot for a long brunch.",
    reverse: true,
  },
  {
    title: "Coffee + Curios",
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=600&fit=crop",
    alt: "Antique shop",
    text: "We're more than a café. Browse our in-house antique and curio shop — vintage maps, hand-carved wooden pieces, and Zambian crafts. The perfect pairing: a flat white and a one-of-a-kind find.",
  },
];

const values = [
  { title: "🇿🇲 Direct Trade", desc: "We buy directly from Zambian smallholder farmers at above-market prices." },
  { title: "🌱 Sustainability", desc: "Compostable packaging, local sourcing, and zero food waste." },
  { title: "🤝 Community", desc: "We host local artists, musicians, and entrepreneurs." },
];

export default function StoryPage() {
  return (
    <>
      <section className="pt-24 md:pt-32 pb-12 bg-espresso-900 relative">
        <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=600&fit=crop)] bg-cover bg-center opacity-20" />
        <div className="container-page relative z-10">
          <SectionHeader title="Our Story" subtitle="From a single espresso bar to top 10 of 175 restaurants in Lusaka." centered />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page max-w-3xl space-y-16">
          {storySections.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-col gap-8 items-center ${
                s.reverse ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="relative w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden">
                <Image src={s.image} alt={s.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-espresso-600 dark:text-cream-300 leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-espresso-50 dark:bg-espresso-900">
        <div className="container-page max-w-3xl text-center">
          <h3 className="font-display text-2xl font-bold">Our Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {values.map((v) => (
              <div key={v.title} className="card p-6">
                <h4 className="font-bold">{v.title}</h4>
                <p className="text-espresso-500 dark:text-cream-400 text-sm mt-2">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
