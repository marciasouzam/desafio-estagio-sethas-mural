export default function CategoryBadge({ categoria }) {
  return (
    <span className="inline-block bg-[var(--color-enfase)] text-[var(--color-principal)] text-xs font-[var(--font-weight-destaque)] font-[var(--font-sans)] uppercase px-3 py-1 rounded-full w-fit">
      {categoria}
    </span>
  );
}
