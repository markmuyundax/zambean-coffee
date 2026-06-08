"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileOrderButton() {
  const pathname = usePathname();
  if (pathname === "/order") return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white dark:bg-espresso-900 border-t border-espresso-100 dark:border-espresso-800 p-3 pb-[env(safe-area-inset-bottom,12px)]">
      <div className="flex gap-3">
        <Link href="/reservations" className="btn-secondary flex-1 text-center text-sm !py-3">
          Book
        </Link>
        <Link href="/order" className="btn-primary flex-1 text-center text-sm !py-3">
          Order Now
        </Link>
      </div>
    </div>
  );
}
