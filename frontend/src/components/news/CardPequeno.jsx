import { useNavigate } from 'react-router-dom';
import CategoryBadge from './CategoryBadge';

export default function CardPequeno({ noticia }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/noticias/${noticia.id}`)}
      className="w-[326px] h-[243px] flex flex-col justify-between bg-[var(--color-superficie)] border border-[var(--color-divisor)] rounded-xl p-4 cursor-pointer"
    >
      <div className="flex flex-col gap-3">
        <CategoryBadge categoria={noticia.categoria} />
        <h3 className="text-[var(--color-principal)] font-[var(--font-sans)] font-[var(--font-weight-destaque)] text-base leading-snug line-clamp-3">
          {noticia.titulo}
        </h3>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {noticia.foto_autor && (
            <img
              src={noticia.foto_autor}
              alt={noticia.autor}
              className="w-8 h-8 rounded-full object-cover"
            />
          )}
          <span className="text-sm text-[var(--color-principal)] font-[var(--font-sans)] font-[var(--font-weight-destaque)]">{noticia.autor}</span>
        </div>
        <span className="text-sm text-[var(--color-principal)] font-[var(--font-sans)] font-[var(--font-weight-destaque)]">{noticia.data_publicacao}</span>
      </div>
    </div>
  );
}
