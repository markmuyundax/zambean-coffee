export default function SectionHeader({ title, subtitle, centered = false }: { title: string; subtitle?: string; centered?: boolean }) {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <h2 className="section-title text-cream-100">{title}</h2>
      {subtitle && <p className="section-subtitle text-cream-200">{subtitle}</p>}
    </div>
  );
}
