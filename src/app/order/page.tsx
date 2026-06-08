"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui";
import { menuItems, coffeeBeans } from "@/lib/data";

interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
}

export default function OrderPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(item: { id: string; name: string; price: number }) {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  }

  function removeFromCart(id: string) {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }

  function updateQty(id: string, qty: number) {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  }

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  function buildWhatsAppOrder() {
    if (cart.length === 0) return "#";
    const lines = cart.map(
      (i) => `${i.qty}x ${i.name} — K${i.price * i.qty}`
    );
    const message = encodeURIComponent(
      `🍽️ *Zambean Order*\n\n${lines.join("\n")}\n\n*Total: K${total}*\n\nI'd like to pick up. Please confirm timing.`
    );
    return `https://wa.me/260968773386?text=${message}`;
  }

  return (
    <>
      <section className="pt-24 md:pt-32 pb-12 bg-espresso-900 relative">
        <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1920&h=600&fit=crop)] bg-cover bg-center opacity-20" />
        <div className="container-page relative z-10">
          <SectionHeader
            title="Order Online"
            subtitle="Browse the menu, build your order, and send it via WhatsApp for pickup."
            centered
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Menu */}
            <div className="lg:col-span-2">
              <h3 className="font-display text-2xl font-bold mb-6">📋 Full Menu</h3>

              {/* Food */}
              <h4 className="font-bold text-lg mb-4 mt-8">🍳 Food</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {menuItems
                  .filter((i) => i.category === "breakfast" || i.category === "lunch")
                  .map((item) => (
                    <div key={item.id} className="card p-4 flex gap-4">
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-semibold text-sm">{item.name}</h5>
                        <p className="text-xs text-espresso-500 dark:text-cream-400 line-clamp-2 mt-1">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-bold text-garden-600 dark:text-garden-400">
                            K{item.price}
                          </span>
                          <button
                            className="btn-primary text-xs py-1 px-3"
                            onClick={() => addToCart(item)}
                          >
                            + Add
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Drinks */}
              <h4 className="font-bold text-lg mb-4 mt-8">☕ Drinks</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {menuItems
                  .filter((i) => i.category === "drinks")
                  .map((item) => (
                    <div key={item.id} className="card p-4 flex gap-4">
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-semibold text-sm">{item.name}</h5>
                        <p className="text-xs text-espresso-500 dark:text-cream-400 line-clamp-2 mt-1">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-bold text-garden-600 dark:text-garden-400">
                            K{item.price}
                          </span>
                          <button
                            className="btn-primary text-xs py-1 px-3"
                            onClick={() => addToCart(item)}
                          >
                            + Add
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Coffee Beans */}
              <h4 className="font-bold text-lg mb-4 mt-8">🫘 Coffee Beans</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coffeeBeans.map((bean) => (
                  <div key={bean.id} className="card p-4 flex gap-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={bean.image}
                        alt={bean.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-semibold text-sm">{bean.name}</h5>
                      <p className="text-xs text-espresso-500 dark:text-cream-400 mt-1">
                        {bean.origin} · {bean.roast} roast
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-bold text-garden-600 dark:text-garden-400">
                          K{bean.price}
                        </span>
                        {bean.inStock ? (
                          <button
                            className="btn-primary text-xs py-1 px-3"
                            onClick={() =>
                              addToCart({
                                id: bean.id,
                                name: bean.name,
                                price: bean.price,
                              })
                            }
                          >
                            + Add
                          </button>
                        ) : (
                          <span className="text-xs text-clay-500 font-semibold">
                            Out of stock
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cart sidebar */}
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-24">
                <h3 className="font-display text-xl font-bold mb-4">🧾 Your Order</h3>

                {cart.length === 0 ? (
                  <p className="text-espresso-500 dark:text-cream-400 text-sm">
                    Add items from the menu to start your order.
                  </p>
                ) : (
                  <ul className="space-y-3 mb-4">
                    {cart.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-center justify-between text-sm"
                      >
                        <div className="flex items-center gap-2">
                          <button
                            className="text-clay-500 hover:text-clay-600 text-xs w-5 h-5 rounded border border-current flex items-center justify-center"
                            onClick={() => updateQty(item.id, item.qty - 1)}
                          >
                            −
                          </button>
                          <span>{item.qty}</span>
                          <button
                            className="text-garden-600 hover:text-garden-700 text-xs w-5 h-5 rounded border border-current flex items-center justify-center"
                            onClick={() => updateQty(item.id, item.qty + 1)}
                          >
                            +
                          </button>
                          <span className="ml-1">{item.name}</span>
                        </div>
                        <span className="font-semibold">
                          K{item.price * item.qty}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {cart.length > 0 && (
                  <>
                    <div className="border-t border-espresso-200 dark:border-espresso-700 pt-3 flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>K{total}</span>
                    </div>

                    <a
                      href={buildWhatsAppOrder()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full mt-4 text-center flex items-center justify-center gap-2"
                    >
                      💬 Order via WhatsApp
                    </a>

                    <p className="text-xs text-espresso-500 dark:text-cream-400 mt-3 text-center">
                      You&apos;ll be redirected to WhatsApp to confirm pickup time.
                    </p>
                  </>
                )}

                <div className="mt-6 pt-4 border-t border-espresso-200 dark:border-espresso-700">
                  <h4 className="font-bold text-sm mb-2">📞 Prefer to call?</h4>
                  <a
                    href="tel:+260968773386"
                    className="text-garden-600 dark:text-garden-400 font-semibold text-sm"
                  >
                    +260 777 793007
                  </a>
                  <p className="text-xs text-espresso-500 dark:text-cream-400 mt-2">
                    Pickup at Plot 36, Lagos Road, Rhodes Park, Lusaka
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
