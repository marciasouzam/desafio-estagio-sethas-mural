import { Link } from 'react-router-dom';

export default function CadastrarNoticiaButton({ className = '' }) {
  const classes = className || 'rounded-md bg-enfase px-3 py-[7.5px] text-base leading-textos text-principal font-sans font-destaque cursor-pointer transition-opacity hover:opacity-90';

  return (
    <Link to="/cadastro" className={classes}>
      Cadastrar Notícia
    </Link>
  );
}
