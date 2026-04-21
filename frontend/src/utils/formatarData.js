export function formatarData(valor) {
  if (!valor) {
    return '';
  }

  if (typeof valor !== 'string') {
    return String(valor);
  }

  const trechoData = valor.slice(0, 10);
  const correspondencia = trechoData.match(/^(\d{4})-(\d{2})-(\d{2})$/);

  if (!correspondencia) {
    return valor.replaceAll('-', '/');
  }

  const [, ano, mes, dia] = correspondencia;
  return `${dia}/${mes}/${ano}`;
}