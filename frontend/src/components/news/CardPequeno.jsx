import { useNavigate } from 'react-router-dom';
import CategoryBadge from './CategoryBadge';

export default function CardPequeno({ noticia }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/noticias/${noticia.id}`)}
      className="w-[326px] h-[243px] flex flex-col justify-between bg-[var(--cor-surface)] border border-[var(--borda)] rounded-xl p-4 cursor-pointer hover:shadow-md transition-shadow"
    >
      {/* Topo: badge + título */}
      <div className="flex flex-col gap-3">
        <CategoryBadge categoria={noticia.categoria} />
        <h3 className="text-[var(--cor-texto-titulo)] font-semibold text-base leading-snug line-clamp-3">
          {noticia.titulo}
        </h3>
      </div>

      {/* Rodapé: autor + data */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {noticia.foto_autor && (
            <img
              src={noticia.foto_autor}
              alt={noticia.autor}
              className="w-8 h-8 rounded-full object-cover"
            />
          )}
          <span className="text-sm text-[var(--cor-texto-base)]">{noticia.autor}</span>
        </div>
        <span className="text-sm text-[var(--cor-texto-descricao)]">{noticia.data_publicacao}</span>
      </div>
    </div>
  );
}
