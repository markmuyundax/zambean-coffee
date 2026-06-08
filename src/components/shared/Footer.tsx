import Link from "next/link";

const footerLinks = {
  visit: [
    { href: "/menu", label: "Menu" },
    { href: "/order", label: "Order Online" },
    { href: "/reservations", label: "Reservations" },
    { href: "/beans", label: "Coffee Beans" },
  ],
  about: [
    { href: "/story", label: "Our Story" },
    { href: "/story#garden", label: "The Garden" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-espresso-950 text-cream-200">
      <div className="container-page py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 font-display text-2xl font-bold text-cream-100 mb-4">
              <span>☕</span> Zambean
            </Link>
            <p className="text-cream-400 text-sm leading-relaxed max-w-xs">
              Lusaka&apos;s garden café. Specialty coffee, fresh food, antiques, and good vibes — since 2016.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="badge-cream text-xs">★ 4.5 TripAdvisor</span>
              <span className="badge-cream text-xs">Top 10 of 175 in Lusaka</span>
            </div>
          </div>

          {/* Visit */}
          <div>
            <h4 className="font-display text-cream-100 font-semibold mb-4">Visit</h4>
            <ul className="space-y-2.5">
              {footerLinks.visit.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-cream-400 hover:text-cream-200 transition-colors text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-display text-cream-100 font-semibold mb-4">About</h4>
            <ul className="space-y-2.5">
              {footerLinks.about.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-cream-400 hover:text-cream-200 transition-colors text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Contact */}
          <div>
            <h4 className="font-display text-cream-100 font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-sm text-cream-400">
              <p>Mon – Fri: 7:00 AM – 8:00 PM</p>
              <p>Saturday: 7:00 AM – 9:00 PM</p>
              <p>Sunday: 8:00 AM – 4:00 PM</p>
            </div>
            <div className="mt-5 space-y-1.5 text-sm text-cream-400">
              <p>📍 Lusaka, Zambia</p>
              <p>📞 +260 97 123 4567</p>
              <p>✉️ muyundamark0@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-cream-400/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-500">
          <p>© {new Date().getFullYear()} The Zambean Coffee Co. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-cream-300 cursor-pointer">Facebook</span>
            <span className="hover:text-cream-300 cursor-pointer">Instagram</span>
            <a href="https://www.tripadvisor.com/Restaurant_Review-g293843-d26468383-Reviews-Zambean_Coffee-Lusaka_Lusaka_Province.html" target="_blank" rel="noopener noreferrer" className="hover:text-cream-300 cursor-pointer">TripAdvisor</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
