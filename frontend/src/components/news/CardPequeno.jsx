import { Link } from 'react-router-dom';
import EtiquetaCategoria from './EtiquetaCategoria';
import { formatarData } from '../../utils/formatarData';

export default function CardPequeno({ noticia }) {
  return (
    <article className="w-[326px] h-[243px] rounded-xl border border-divisor bg-superficie">
      <Link
        to={`/noticias/${noticia.id}`}
        className="flex h-full flex-col p-4 text-left transition-shadow hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-enfase focus-visible:ring-offset-2"
      >
        <div className="flex flex-col gap-3">
        <EtiquetaCategoria categoria={noticia.categoria} />
        <h3 className="line-clamp-2 text-xs leading-textos text-principal font-sans font-destaque">
          {noticia.titulo}
        </h3>
        </div>

        <footer className="mt-auto flex items-center justify-between gap-3 pt-6">
          <div className="flex min-w-0 items-center gap-2">
            <div className="size-7 shrink-0 overflow-hidden rounded-full border border-divisor bg-fundo">
              {noticia.foto_autor && (
                <img
                  src={noticia.foto_autor}
                  alt={`Foto de perfil de ${noticia.autor}`}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <span className="min-w-0 truncate text-[12px] leading-none text-principal font-sans font-destaque">
              {noticia.autor}
            </span>
          </div>
          <time className="shrink-0 text-[12px] leading-none text-principal font-sans font-destaque">
            {formatarData(noticia.data_publicacao)}
          </time>
        </footer>
      </Link>
    </article>
  );
}