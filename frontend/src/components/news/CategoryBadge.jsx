export default function CategoryBadge({ categoria }) {
  return (
    <span className="inline-flex w-fit [--leading-titulo:1.3] rounded-full bg-enfase px-2.5 py-1 text-[10px] leading-none uppercase text-principal font-sans font-destaque">
      {categoria}
    </span>
  );
}
