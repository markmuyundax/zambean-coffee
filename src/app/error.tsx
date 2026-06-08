"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-5xl font-bold text-[#3c2a1f] mb-4">
          Something Went Wrong
        </h1>
        <p className="text-[#6b5a4f] mb-8 max-w-md mx-auto">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        <button
          onClick={reset}
          className="inline-block bg-[#3c2a1f] text-[#f5e6d3] px-8 py-3 rounded-full font-medium hover:bg-[#5c4a3f] transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
