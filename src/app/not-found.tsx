import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-[#3c2a1f] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#5c4a3f] mb-6">
          Page Not Found
        </h2>
        <p className="text-[#6b5a4f] mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist. It may have been
          moved or removed.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#3c2a1f] text-[#f5e6d3] px-8 py-3 rounded-full font-medium hover:bg-[#5c4a3f] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
