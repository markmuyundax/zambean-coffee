import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact Us | Zambean Coffee Co.",
  description:
    "Find Zambean Coffee Co. at Leopards Hill Business Park, Lusaka. Call +260 77 7793007 or WhatsApp +260 96 877 3386 for reservations and enquiries.",
  openGraph: {
    title: "Contact Zambean Coffee Co. — Lusaka's Garden Café",
    description:
      "Leopards Hill Business Park, Off Leopards Hill Rd, Lusaka. Open Mon–Sat 07:30–21:00, Sun 07:30–21:00. WhatsApp for reservations.",
  },
};

const hours = [
  { days: "Mon – Thu", time: "07:30 – 21:00" },
  { days: "Fri – Sat", time: "07:30 – 22:00" },
  { days: "Sunday", time: "07:30 – 21:00" },
];

const houseRules = [
  "🐶 Dogs welcome (on leash in garden)",
  "📸 Photography encouraged — tag @zambeancoffeeco",
  "💳 Cards & mobile money accepted",
  "🚗 Free parking on-site",
  "🏺 Antique shop inside — browse while you wait",
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-24 md:pt-32 pb-12 bg-espresso-900 relative">
        <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=600&fit=crop)] bg-cover bg-center opacity-20" />
        <div className="container-page relative z-10">
          <SectionHeader
            title="Contact Us"
            subtitle="We'd love to hear from you — book a table, ask about events, or just say hello."
            centered
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card p-6 md:p-8">
              <h3 className="font-display text-xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-4" action="/api/contact" method="POST">
                <div>
                  <label className="block text-sm font-semibold mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input-field"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input-field"
                    placeholder="you@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Subject</label>
                  <select name="subject" className="input-field" defaultValue="general">
                    <option value="general">General Enquiry</option>
                    <option value="event">Private Event</option>
                    <option value="wholesale">Wholesale Beans</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Message</label>
                  <textarea
                    name="message"
                    className="input-field"
                    rows={5}
                    placeholder="Tell us more..."
                    required
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-bold mb-4">📍 Find Us</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-espresso-600 dark:text-cream-400">
                      Leopards Hill Business Park
                      <br />
                      Off Leopards Hill Road
                      <br />
                      Lusaka, Zambia
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Phone / WhatsApp</p>
                    <p className="text-espresso-600 dark:text-cream-400">
                      <a
                        href="tel:+260968773386"
                        className="hover:text-coffee-500 underline"
                      >
                        +260 96 877 3386
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp (Reservations)</p>
                    <p className="text-espresso-600 dark:text-cream-400">
                      <a
                        href="https://wa.me/260968773386"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-coffee-500 underline"
                      >
                        +260 96 877 3386
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-espresso-600 dark:text-cream-400">
                      <a
                        href="mailto:muyundamark0@gmail.com"
                        className="hover:text-coffee-500 underline"
                      >
                        muyundamark0@gmail.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Social</p>
                    <div className="flex gap-4 mt-1">
                      <a
                        href="https://www.instagram.com/zambeancoffeeco/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-espresso-600 dark:text-cream-400 hover:text-coffee-500 underline text-sm"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://www.facebook.com/100046239653430/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-espresso-600 dark:text-cream-400 hover:text-coffee-500 underline text-sm"
                      >
                        Facebook
                      </a>
                      <a
                        href="https://www.tripadvisor.com/Restaurant_Review-g293843-d26468383-Reviews-Zambean_Coffee-Lusaka_Lusaka_Province.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-espresso-600 dark:text-cream-400 hover:text-coffee-500 underline text-sm"
                      >
                        TripAdvisor
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold mb-4">🕐 Hours</h3>
                <div className="space-y-2 text-sm">
                  {hours.map((h) => (
                    <div key={h.days} className="flex justify-between">
                      <span>{h.days}</span>
                      <span className="font-semibold">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-6">
                <h4 className="font-bold mb-3">🐾 House Rules</h4>
                <ul className="text-sm space-y-2 text-espresso-600 dark:text-cream-400">
                  {houseRules.map((rule) => (
                    <li key={rule}>{rule}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="section-padding bg-espresso-50 dark:bg-espresso-900">
        <div className="container-page max-w-3xl">
          <h3 className="font-display text-xl font-bold mb-6 text-center">
            📍 Find Us on the Map
          </h3>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Zambean Coffee Co. Location"
              src="https://www.google.com/maps?q=Zambean+Coffee+Co+Leopards+Hill+Business+Park+Lusaka+Zambia&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
