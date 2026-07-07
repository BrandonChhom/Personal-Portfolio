export default function SectionHeading({ number, label }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-sm text-slate-600">{number}</span>
      <span aria-hidden="true" className="h-px w-8 bg-slate-700" />
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
        {label}
      </p>
    </div>
  );
}
