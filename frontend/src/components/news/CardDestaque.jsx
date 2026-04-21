export default function CardDestaque({ noticia }) {
  return (
    <div className="w-full flex flex-row gap-6 bg-[var(--color-surface)] border border-[var(--color-borda)] rounded-xl p-[9px_24px_9px_9px] h-[243px]">
      <img
        src={noticia.imagem_capa}
        alt={noticia.titulo}
        className="h-full w-[304px] shrink-0 rounded-lg object-cover"
      />

      <div className="flex flex-col justify-between flex-1 py-1">
        <div className="flex flex-col gap-2">
          <h2 className="text-[var(--color-fonte-home)] font-semibold text-xl leading-snug">
            {noticia.titulo}
          </h2>
          <p className="text-[var(--color-resumo-noticia)] text-sm leading-relaxed line-clamp-3">
            {noticia.resumo}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={noticia.foto_autor}
              alt={noticia.autor}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm text-[var(--color-fonte-noticia)]">{noticia.autor}</span>
          </div>
          <span className="text-sm text-[var(--color-resumo-noticia)]">
            {noticia.data_publicacao}
          </span>
        </div>
      </div>
    </div>
  )
}
