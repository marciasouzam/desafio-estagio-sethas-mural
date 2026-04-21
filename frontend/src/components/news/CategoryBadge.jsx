export default function CategoryBadge({ categoria }) {
  return (
    <span className="inline-block bg-[var(--color-enfase)] text-[var(--color-fonte-noticia)] text-xs font-semibold uppercase px-3 py-1 rounded-full w-fit">
      {categoria}
    </span>
  );
}
