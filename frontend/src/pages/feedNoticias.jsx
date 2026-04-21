import { useState, useEffect } from 'react';
import CardDestaque from '../components/news/CardDestaque';
import CardPequeno from '../components/news/CardPequeno';

import { getNoticias } from '../services/noticiasService';


export default function FeedNoticias() {
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);
    const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    getNoticias()
      .then((res) => setNoticias(res.data))
      .catch(() => setErro(true))
      .finally(() => setCarregando(false));
  }, []);

  if (carregando) {
    return (
      <main className="max-w-[1030px] mx-auto px-4 py-8">
        <p className="text-[var(--color-apoio)]">Carregando notícias</p>
      </main>
    );
  }

  if (erro) {
    return (
      <main className="max-w-[1030px] mx-auto px-4 py-8">
        <p className="text-[var(--color-apoio)]">Erro ao carregar notícias. </p>
      </main>
    );
  }

  if (noticias.length === 0) {
    return (
      <main className="max-w-[1030px] mx-auto px-4 py-8">
        <p className="text-[var(--color-apoio)]">Nenhuma notícia encontrada.</p>
      </main>
    );
  }

  const [destaque, ...restantes] = noticias;

  return (
    <main className="max-w-[1030px] mx-auto px-4 py-8">
      <CardDestaque noticia={destaque} />

      {restantes.length > 0 && (
        <div className="grid grid-cols-3 gap-6 mt-6">
          {restantes.map((noticia) => (
            <CardPequeno key={noticia.id} noticia={noticia} />
          ))}
        </div>
      )}
    </main>
  );
}