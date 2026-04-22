import logoImg from '../assets/logo.svg'

export default function Footer() {
  return (
    <footer className="w-full h-[260px] bg-white border-t border-divisor flex items-center justify-center">
      <div className="w-full max-w-[1440px] px-[207px] flex flex-col items-start justify-center gap-6">
        <img
          src={logoImg}
          alt="Logo Corp News"
          className="h-10 w-auto object-contain"
        />
        <div className="text-xs text-texto font-sans font-medio leading-textos">
          <p>Copyright © 2026 CORP inc.</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}