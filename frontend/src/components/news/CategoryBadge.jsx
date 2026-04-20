export default function CategoryBadge({ categoria }) {
  return (
    <span className="inline-block bg-[var(--cor-enfase)] text-[var(--cor-texto-base)] text-xs font-semibold uppercase px-3 py-1 rounded-full w-fit">
      {categoria}
    </span>
  );
}
