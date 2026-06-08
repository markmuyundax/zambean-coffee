import Link from "next/link";
import { getFeaturedItems, getSpecials, getReviews, getEvents, getGallery } from "@/lib/data";

export default function HomePage() {
  const featured = getFeaturedItems();
  const specials = getSpecials();
  const reviews = getReviews();
  const events = getEvents();
  const gallery = getGallery();

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=900&fit=crop&q=80"
            alt="Zambean garden"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso-900/60 via-espresso-900/40 to-espresso-900/80" />
        </div>
        <div className="container-page relative z-10 py-20 md:py-32">
          <div className="max-w-2xl">
            <span className="badge-clay mb-4">★ 4.5 — Top 10 of 175 restaurants in Lusaka</span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream-50 leading-tight text-balance">
              A Garden Café in the Heart of Lusaka
            </h1>
            <p className="mt-6 text-lg md:text-xl text-cream-200 max-w-xl leading-relaxed">
              Specialty coffee, memorable food, and an antique shop — all in one beautiful, dog-friendly garden.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/order" className="btn-primary text-base px-8 py-4">Order Online</Link>
              <Link href="/reservations" className="btn-secondary text-base px-8 py-4 border-cream-300 text-cream-50 hover:bg-cream-50 hover:text-espresso-900 dark:border-cream-300 dark:text-cream-100 dark:hover:bg-cream-300 dark:hover:text-espresso-900">Book a Table</Link>
              <Link href="/menu" className="btn-ghost text-cream-200 hover:text-cream-50">See Menu →</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-cream-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ── Weekend Specials ── */}
      <section className="section-padding bg-clay-50 dark:bg-espresso-900">
        <div className="container-page">
          <h2 className="section-title text-center">Weekend Specials</h2>
          <p className="section-subtitle text-center mx-auto">Every weekend, something special in the garden.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {specials.map((s) => (
              <div key={s.id} className="card flex flex-col md:flex-row">
                <img src={s.image} alt={s.title} className="w-full md:w-48 h-48 object-cover" loading="lazy" />
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-espresso-600 dark:text-cream-400 text-sm leading-relaxed">{s.description}</p>
                  <p className="mt-3 text-clay-600 font-semibold text-lg">K{s.price}</p>
                  <p className="text-xs text-espresso-400 mt-1">Available weekends until {s.validUntil}</p>
                  <Link href="/reservations" className="btn-primary mt-4 text-sm self-start">Reserve Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Menu ── */}
      <section className="section-padding">
        <div className="container-page">
          <h2 className="section-title text-center">What Everyone's Ordering</h2>
          <p className="section-subtitle text-center mx-auto">The dishes that made us Top 10 in Lusaka.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {featured.map((item) => (
              <div key={item.id} className="card group">
                <div className="relative overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute top-3 left-3 flex gap-1">
                    {item.dietaryTags.map((t) => (
                      <span key={t} className="badge-cream text-xs">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold">{item.name}</h3>
                  <p className="mt-1 text-espresso-500 dark:text-cream-400 text-sm leading-relaxed">{item.description}</p>
                  {item.pairing && (
                    <p className="mt-2 text-xs text-garden-600 font-medium">🍷 {item.pairing}</p>
                  )}
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-clay-600 font-bold text-lg">K{item.price}</span>
                    <Link href="/order" className="btn-ghost text-sm">Add to Order →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/menu" className="btn-secondary">View Full Menu</Link>
          </div>
        </div>
      </section>

      {/* ── Garden Story Teaser ── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1600&h=900&fit=crop&q=80" alt="Garden" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-espresso-900/70" />
        </div>
        <div className="container-page relative z-10 text-center">
          <h2 className="section-title text-cream-50">More Than a Café</h2>
          <p className="section-subtitle text-cream-200 mx-auto">
            A lush garden sanctuary, an antique shop full of treasures, and coffee beans sourced from Zambian farms.
            This is what happens when a passion for coffee meets a love for beauty.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link href="/story" className="btn-primary">Discover Our Story</Link>
            <Link href="/beans" className="btn-secondary border-cream-300 text-cream-50 hover:bg-cream-50 hover:text-espresso-900 dark:border-cream-300 dark:text-cream-100 dark:hover:bg-cream-300 dark:hover:text-espresso-900">Shop Our Beans</Link>
          </div>
        </div>
      </section>

      {/* ── Events ── */}
      <section className="section-padding bg-cream-100 dark:bg-espresso-900">
        <div className="container-page">
          <h2 className="section-title text-center">Upcoming Events</h2>
          <p className="section-subtitle text-center mx-auto">Live music, tastings, and seasonal celebrations in the garden.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {events.map((evt) => (
              <div key={evt.id} className="card">
                <img src={evt.image} alt={evt.title} className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-5">
                  <p className="text-xs text-clay-600 font-semibold uppercase tracking-wide">{new Date(evt.date).toLocaleDateString("en-ZM", { weekday: "long", month: "long", day: "numeric" })}</p>
                  <h3 className="font-display text-lg font-bold mt-1">{evt.title}</h3>
                  <p className="mt-2 text-espresso-500 dark:text-cream-400 text-sm">{evt.description}</p>
                  <p className="mt-2 text-sm font-semibold">{evt.price}</p>
                  <Link href="/reservations" className="btn-ghost mt-3 text-sm">Reserve Spot →</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/events" className="btn-secondary">All Events</Link>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="section-padding">
        <div className="container-page">
          <h2 className="section-title text-center">What Our Guests Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {reviews.map((r) => (
              <div key={r.id} className="card-glass p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-clay-100 dark:bg-clay-900 flex items-center justify-center text-clay-700 font-bold text-sm">{r.author[0]}</div>
                  <div>
                    <p className="font-semibold text-sm">{r.author}</p>
                    <p className="text-xs text-espresso-400">{r.platform}</p>
                  </div>
                </div>
                <div className="flex mb-2">{[...Array(r.rating)].map((_, i) => (<span key={i} className="text-clay-500 text-sm">★</span>))}</div>
                <p className="text-espresso-600 dark:text-cream-300 text-sm leading-relaxed italic">"{r.text}"</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="https://www.tripadvisor.com/Restaurant_Review-g293843-d26468383-Reviews-Zambean_Coffee-Lusaka_Lusaka_Province.html" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Read More on TripAdvisor →
            </a>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="section-padding bg-espresso-950">
        <div className="container-page">
          <h2 className="section-title text-center text-cream-50">The Garden in Pictures</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12">
            {gallery.slice(0, 8).map((img) => (
              <div key={img.id} className="relative overflow-hidden rounded-xl aspect-square group cursor-pointer">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-espresso-900/0 group-hover:bg-espresso-900/30 transition-colors duration-300 flex items-end p-4">
                  <p className="text-cream-50 text-xs opacity-0 group-hover:opacity-100 transition-opacity">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-clay-600 text-center">
        <div className="container-page max-w-2xl">
          <h2 className="section-title text-cream-50">Ready for the Best Coffee in Lusaka?</h2>
          <p className="section-subtitle text-cream-200 mx-auto">Order online, book a table, or visit us in the garden. We'll have your coffee waiting.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link href="/order" className="btn-primary bg-cream-50 text-clay-800 hover:bg-cream-100">Order Now</Link>
            <Link href="/reservations" className="btn-secondary border-cream-50 text-cream-50 hover:bg-cream-50 hover:text-clay-800">Book a Table</Link>
          </div>
        </div>
      </section>
    </>
  );
}
