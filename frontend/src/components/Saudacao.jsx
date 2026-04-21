function obterSaudacao() {
  const hora = new Date().getHours();

  if (hora < 12) {
    return 'Bom dia';
  }

  if (hora < 18) {
    return 'Boa tarde';
  }

  return 'Boa noite';
}

export default function Saudacao() {
  return (
    <p className="text-sm leading-textos text-apoio font-sans font-regular">
      {obterSaudacao()}
    </p>
  );
}
