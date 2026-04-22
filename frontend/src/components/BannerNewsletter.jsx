import bannerImg from '../assets/newsletter.jpg'
import enviarIcon from '../assets/arrow-right-square.svg'

export default function BannerNewsletter() {
  return (
    <section className="relative w-full h-[267px] flex flex-col items-center justify-center gap-6 overflow-hidden">
      
      <img
        src={bannerImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <p className="relative font-mono font-leve leading-textos text-center text-2xl text-superficie max-w-sm">
        Se inscreva para receber as atualizações
      </p>

      <div className="relative flex items-center overflow-hidden rounded-xl bg-superficie h-[50px] p-2">
        <input
          type="email"
          placeholder="Insira seu e-mail"
          className="w-64 h-full bg-transparent px-5 font-mono font-medio leading-textos text-sm text-principal placeholder:text-apoio outline-none"
        />
            <button
            type="button"
            className="flex items-center gap-2 m-[8px] rounded-[7px] bg-enfase px-2 py-2.5 text-base font-sans font-destaque text-principal cursor-pointer h-full"
            >
            Enviar
            <img src={enviarIcon} alt="" className="w-[21px] h-[21px]" />
            </button>
      </div>

    </section>
  )
}