import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import vectorIcon from '../assets/vector.svg';
import NomeAutor from '../components/news/NomeAutor';
import { deletarNoticia, getNoticia } from '../services/noticiasService';
import styles from './detalhesNoticias.module.css';
import { formatarData } from '../utils/formatarData';

export default function DetalhesNoticias() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');
  const [excluindo, setExcluindo] = useState(false);
  const [noticia, setNoticia] = useState(null);

  useEffect(() => {
    setCarregando(true);
    setErro('');

    getNoticia(id)
      .then((res) => setNoticia(res.data))
      .catch(() => setErro('Erro ao carregar notícia.'))
      .finally(() => setCarregando(false));
  }, [id]);

  const onExcluir = async () => {
    if (!window.confirm('Deseja realmente excluir esta notícia?')) {
      return;
    }

    setExcluindo(true);
    setErro('');

    try {
      await deletarNoticia(id);
      navigate('/', { state: { refresh: Date.now() } });
    } catch {
      setErro('Erro ao excluir notícia. Tente novamente.');
      setExcluindo(false);
    }
  };

  if (carregando) {
    return (
      <main className="max-w-[1030px] mx-auto px-4 py-8">
        <p className="text-apoio">Carregando notícia...</p>
      </main>
    );
  }

  if (erro && !noticia) {
    return (
      <main className="max-w-[1030px] mx-auto px-4 py-8">
        <p className="text-apoio">{erro}</p>
      </main>
    );
  }

  if (!noticia) {
    return (
      <main className="max-w-[1030px] mx-auto px-4 py-8">
        <p className="text-apoio">Notícia não encontrada.</p>
      </main>
    );
  }

  return (
      <main className="mx-auto w-full max-w-[1440px] px-4 py-8 md:px-[205px]">
        <article className="overflow-hidden rounded-xl px-8 py-8">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="inline-flex rounded-full bg-enfase px-2.5 py-1 text-base leading-textos uppercase text-texto font-sans font-destaque">
              {noticia.categoria}
            </span>
            <time className="text-xs leading-textos text-apoio font-sans font-regular">
              {formatarData(noticia.data_publicacao)}
            </time>
          </div>

          <h1 className="text-[32px] leading-textos text-principal font-serif font-regular text-center mb-3">
            {noticia.titulo}
          </h1>

          <p className="text-xl leading-textos text-apoio font-sans font-regular text-center mb-6">
            {noticia.resumo}
          </p>

          <img
            src={noticia.imagem_capa}
            alt={noticia.titulo}
            className="w-full object-cover rounded-lg mb-[47px] max-h-[440px]"
          />

          <div className="flex items-center justify-between border-y border-divisor py-3 mb-6">
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
                className="min-w-0 truncate text-xl leading-textos text-principal font-sans font-destaque"
              />
            </div>

            <button
              type="button"
              onClick={onExcluir}
              disabled={excluindo}
              className="inline-flex size-11 items-center justify-center gap-[10px] cursor-pointer rounded-full bg-enfase transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              aria-label="Excluir notícia"
            >
              <img
                src={vectorIcon}
                alt=""
                className="w-[18px] h-[19.5px] object-contain"
              />
            </button>
          </div>

          <p className={`${styles.conteudoNoticia} whitespace-pre-line text-xl leading-textos text-texto font-sans font-regular`}>
            {noticia.conteudo}
          </p>
        </article>

        {erro && <p className="mt-4 text-sm text-red-500">{erro}</p>}
      </main>
  );
}