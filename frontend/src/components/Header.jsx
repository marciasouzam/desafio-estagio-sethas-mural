import { Link } from 'react-router-dom'
import logoImg from '../assets/logo.svg'
import fotoUsuarioImg from '../assets/fotoUsuario.png'

export default function Header() {
  return (
    <header className="w-full h-20 bg-white border-b border-divisor flex items-center justify-center">
      <div className="w-full max-w-[1440px] px-[207px] flex items-center justify-between">
        <Link to="/" className="flex items-center cursor-pointer">
          <img
            src={logoImg}
            alt="Logo Corp News"
            className="h-12 w-auto object-contain"
          />
        </Link>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-divisor">
            <img
              src={fotoUsuarioImg}
              alt="Foto de perfil"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col leading-textos">
            <span className="truncate text-sm leading-textos text-principal font-sans font-destaque">
              Danilo
            </span>
            <span className="truncate text-sm leading-textos text-principal font-sans font-destaque">
              Ladeira
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}