export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-cream-200 border-t-espresso-700" />
        <p className="mt-4 text-espresso-500 font-medium">Loading...</p>
      </div>
    </div>
  );
}
