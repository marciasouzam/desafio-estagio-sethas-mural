import logoImg from '../assets/logo.svg'

export default function Footer() {
	return (
		<footer className="w-full bg-white border-t border-divisor flex items-center justify-start">
			<img
				src={logoImg}
				alt="Logo Corp News"
				className="h-10 w-auto object-contain"
			/>
		</footer>
	)
}
