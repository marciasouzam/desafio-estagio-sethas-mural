import { Link } from 'react-router-dom';
import NomeAutor from './NomeAutor';
import { formatarData } from '../../utils/formatarData';

export default function CardDestaque({ noticia }) {
  return (
    <article className="w-full h-[243px] overflow-hidden rounded-xl border border-divisor bg-superficie">
      <Link
        to={`/noticias/${noticia.id}`}
        className="flex h-full gap-6 p-2 text-left cursor-pointer transition-shadow hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-enfase focus-visible:ring-offset-2"
      >
        <img
          src={noticia.imagem_capa}
          alt={noticia.titulo}
          className="h-full w-[304px] shrink-0 rounded-lg object-cover"
        />

        <div className="flex min-w-0 flex-1 flex-col pr-4 py-[14px]">
          <div className="flex flex-col gap-2">
            <h2 className="line-clamp-2 text-2xl leading-textos text-principal font-sans font-destaque">
              {noticia.titulo}
            </h2>
            <p className="line-clamp-3 text-base leading-textos text-principal font-sans font-regular">
              {noticia.resumo}
            </p>
          </div>

          <footer className="mt-auto flex items-center justify-between gap-5 pt-6">
            <div className="flex min-w-0 items-center gap-2">
              <div className="size-8 shrink-0 overflow-hidden rounded-full border border-divisor bg-fundo">
                {noticia.foto_autor && (
                  <img
                    src={noticia.foto_autor}
                    alt={`Foto de perfil de ${noticia.autor}`}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <NomeAutor
                nome={noticia.autor}
                className="min-w-0 truncate text-sm leading-textos text-principal font-sans font-destaque"
              />
            </div>
            <time className="shrink-0 text-sm leading-textos text-principal font-sans font-destaque">
              {formatarData(noticia.data_publicacao)}
            </time>
          </footer>
        </div>
      </Link>
    </article>
  );
}
