// HU01 - Feed de Notícias

import CardFeatured from '../components/news/CardFeatured';

const noticiaFake = { //TEMPORARIO TEMPORARIO TEMPORARIO 
  titulo: 'Teste',
  resumo: 'teste',
  imagem_capa: 'https://placehold.co/304x225',
  autor: 'Marcia',
  foto_autor: 'https://placehold.co/32x32',
  data_publicacao: '09/04/2026',
  categoria: 'Aviso',
}

export default function FeedNoticias() {
  return (
    <main className="max-w-[1030px] mx-auto px-4 py-8">
      <CardFeatured noticia={noticiaFake} />
    </main>
  );
}