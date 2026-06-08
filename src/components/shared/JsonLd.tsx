export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Zambean Coffee",
    description:
      "Garden café and antique shop in Lusaka. Specialty Zambian coffee, brunch, wood-fired specials, and artisan pizza in a lush garden setting.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://zambean.co.zm",
    telephone: "+260968773386",
    email: "muyundamark0@gmail.com",
    image: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zambean.co.zm"}/og`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot 36, Lagos Road, Rhodes Park",
      addressLocality: "Lusaka",
      addressCountry: "ZM",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -15.4175,
      longitude: 28.2873,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "07:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "08:00",
        closes: "15:00",
      },
    ],
    servesCuisine: "Zambian, International, Café",
    priceRange: "KK",
    hasMap: "https://maps.google.com/?q=Zambean+Coffee+Lusaka+Zambia",
    sameAs: [
      "https://www.instagram.com/zambeancoffee/",
      "https://www.facebook.com/zambeancoffee/",
      "https://www.tripadvisor.com/Restaurant_Review-g293843-d26468383-Reviews-Zambean_Coffee-Lusaka_Lusaka_Province.html",
    ],
    servesCoffee: true,
    outdoorSeating: true,
    petFriendly: true,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function MenuJsonLd() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://zambean.co.zm";

  const data = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Zambean Coffee Menu",
    description: "Full menu for Zambean Coffee in Lusaka, Zambia",
    url: `${siteUrl}/menu`,
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Food",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Smashed Avo on Sourdough",
            description:
              "Crushed avocado, poached eggs, chilli flakes, toasted sourdough",
            offers: { "@type": "Offer", price: "105", priceCurrency: "ZMW" },
          },
          {
            "@type": "MenuItem",
            name: "The Full English",
            description:
              "Eggs, bacon, sausage, beans, toast, tomato & mushrooms",
            offers: { "@type": "Offer", price: "130", priceCurrency: "ZMW" },
          },
          {
            "@type": "MenuItem",
            name: "Zambean Benedict",
            description:
              "Toasted English muffin, poached eggs, hollandaise, bacon or spinach",
            offers: { "@type": "Offer", price: "125", priceCurrency: "ZMW" },
          },
          {
            "@type": "MenuItem",
            name: "Bacon & Egg Roll",
            description:
              "Soft brioche roll with crispy bacon, fried egg, tomato relish",
            offers: { "@type": "Offer", price: "38", priceCurrency: "ZMW" },
          },
          {
            "@type": "MenuItem",
            name: "Beef Burger",
            description: "180g patty, cheddar, pickles, fries",
            offers: { "@type": "Offer", price: "95", priceCurrency: "ZMW" },
          },
        ],
      },
      {
        "@type": "MenuSection",
        name: "Drinks",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Espresso",
            offers: { "@type": "Offer", price: "25", priceCurrency: "ZMW" },
          },
          {
            "@type": "MenuItem",
            name: "Cappuccino",
            offers: { "@type": "Offer", price: "35", priceCurrency: "ZMW" },
          },
          {
            "@type": "MenuItem",
            name: "Latte",
            offers: { "@type": "Offer", price: "38", priceCurrency: "ZMW" },
          },
          {
            "@type": "MenuItem",
            name: "Mocha",
            offers: { "@type": "Offer", price: "42", priceCurrency: "ZMW" },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
