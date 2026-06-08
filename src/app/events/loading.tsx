export default function EventsLoading() {
  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-12">
      <div className="container-page text-center py-20">
        <div className="animate-pulse space-y-6 max-w-xl mx-auto">
          <div className="h-10 bg-espresso-200 dark:bg-espresso-800 rounded w-64 mx-auto" />
          <div className="h-5 bg-espresso-200 dark:bg-espresso-800 rounded w-96 mx-auto" />
          <div className="space-y-4 mt-12">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-40 bg-espresso-100 dark:bg-espresso-800 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
