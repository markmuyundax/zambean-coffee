import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui";
import { upcomingEvents } from "@/lib/data";

export const metadata: Metadata = {
  title: "Events",
  description: "Live jazz, coffee workshops, and seasonal dinners at Zambean.",
};

export default function EventsPage() {
  return (
    <>
      <section className="pt-24 md:pt-32 pb-12 bg-espresso-900 relative">
        <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=1920&h=600&fit=crop)] bg-cover bg-center opacity-20" />
        <div className="container-page relative z-10">
          <SectionHeader title="Upcoming Events" subtitle="Live music, tastings, and special dinners in the garden." centered />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page max-w-4xl">
          {upcomingEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-espresso-500 dark:text-cream-400 text-lg">No upcoming events scheduled yet — check back soon!</p>
            </div>
          ) : (
            <div className="space-y-8">
              {upcomingEvents.map((evt) => (
                <div key={evt.id} className="card p-6 md:p-8 flex flex-col sm:flex-row gap-6">
                  <div className="relative w-full sm:w-64 h-48 rounded-xl overflow-hidden shrink-0">
                    <Image src={evt.image} alt={evt.title} fill className="object-cover" sizes="250px" />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-xl font-bold">{evt.title}</h3>
                      <p className="text-clay-500 font-semibold text-sm mt-1">
                        {evt.date}
                      </p>
                      <p className="text-espresso-600 dark:text-cream-300 text-sm mt-3 leading-relaxed">
                        {evt.description}
                      </p>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <span className="font-semibold text-sm text-espresso-500 dark:text-cream-400">{evt.price}</span>
                      <Link href="/contact" className="btn-primary text-sm !py-2 !px-5">Reserve Spot</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-espresso-50 dark:bg-espresso-900 text-center">
        <div className="container-page max-w-xl">
          <h3 className="font-display text-2xl font-bold">Host Your Own Event</h3>
          <p className="mt-3 text-espresso-600 dark:text-cream-400">
            Birthdays, baby showers, corporate gatherings — we do it all.
          </p>
          <Link href="/contact" className="btn-secondary mt-6 inline-block">Enquire Now</Link>
        </div>
      </section>
    </>
  );
}
