import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CadastrarNoticiaButton from '../components/CadastrarNoticiaButton';
import Saudacao from '../components/Saudacao';
import CardDestaque from '../components/news/CardDestaque';
import CardPequeno from '../components/news/CardPequeno';

import { getNoticias } from '../services/noticiasService';

export default function FeedNoticias() {
  const location = useLocation();
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);
  const [noticias, setNoticias] = useState([]);
  const classeMain = 'mx-auto w-full max-w-[1440px] px-4 py-8 md:px-[205px]';

  const carregarNoticias = () => {
    setCarregando(true);
    setErro(false);

    getNoticias()
      .then((res) => setNoticias(res.data))
      .catch(() => setErro(true))
      .finally(() => setCarregando(false));
  };

  useEffect(() => {
    carregarNoticias();
  }, [location.state?.refresh]);

  const cabecalhoHome = (
    <section className="mb-6 flex items-center justify-between gap-4">
      <div className="flex flex-col gap-[31px]">
        <Saudacao />
        <h1 className="text-[32px] leading-textos text-principal font-serif font-regular">Mural de Notícias</h1>
      </div>
      <CadastrarNoticiaButton />
    </section>
  );

  if (carregando) {
    return (
      <main className={classeMain}>
        {cabecalhoHome}
        <p className="text-apoio">Carregando notícias</p>
      </main>
    );
  }

  if (erro) {
    return (
      <main className={classeMain}>
        {cabecalhoHome}
        <p className="text-apoio">Erro ao carregar notícias. </p>
      </main>
    );
  }

  if (noticias.length === 0) {
    return (
      <main className={classeMain}>
        {cabecalhoHome}
        <p className="text-apoio">Nenhuma notícia encontrada.</p>
      </main>
    );
  }

  const [destaque, ...restantes] = noticias;

  return (
    <main className={classeMain}>
      {cabecalhoHome}
      <CardDestaque noticia={destaque} />

      {restantes.length > 0 && (
        <div className="mt-6 grid grid-cols-3 gap-[26px]">
          {restantes.map((noticia) => (
            <CardPequeno key={noticia.id} noticia={noticia} />
          ))}
        </div>
      )}
    </main>
  );
}