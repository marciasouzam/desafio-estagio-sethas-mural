import logoImg from '../assets/logo.svg'
import fotoUsuarioImg from '../assets/fotoUsuario.png'

export default function Header() {
  return (
    <header className="w-full h-20 bg-white border-b border-[var(--borda)] flex items-center justify-center">
      <div className="w-full max-w-[1440px] px-[207px] flex items-center justify-between">

        {/* Logo CorpNews */}
        <div className="flex items-center">
          <img
            src={logoImg}
            alt="Logo Corp News"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Perfil do Usuário */}
        <div className="flex items-center gap-3">
          {/* Foto usuário */}
          <div className="w-10 h-10 rounded-full overflow-hidden border border-[var(--borda)]">
            <img
              src={fotoUsuarioImg}
              alt="Foto de perfil"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Nome do usuário - VERIFICAR FONTE */}
          <div className="flex flex-col leading-tight">
            <span className="text-[14px] font-semibold text-[var(--cor-texto-titulo)] truncate">
              Danilo
            </span>
            <span className="text-[14px] font-semibold text-[var(--cor-texto-titulo)] truncate">
              Ladeira
            </span>
          </div>
        </div>

      </div>
    </header>
  )
}