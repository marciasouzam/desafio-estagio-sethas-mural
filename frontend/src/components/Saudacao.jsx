import boaNoiteImg from '../assets/BoaNoite.svg';
import boaTardeImg from '../assets/BoaTarde.svg';
import bomDiaImg from '../assets/BomDia.svg';

function obterSaudacao() {
  const hora = new Date().getHours();

  if (hora < 12) {
    return { texto: 'Bom dia', imagem: bomDiaImg };
  }

  if (hora < 18) {
    return { texto: 'Boa tarde', imagem: boaTardeImg };
  }

  return { texto: 'Boa noite', imagem: boaNoiteImg };
}

export default function Saudacao() {
  const saudacao = obterSaudacao();

  return (
    <div className="inline-flex items-center gap-2">
      <img src={saudacao.imagem} alt={saudacao.texto} className="h-6 w-6 object-contain" />
      <p className="text-xl leading-textos text-texto font-sans font-regular">{saudacao.texto}</p>
    </div>
  );
}
