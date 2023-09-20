function definirValor(template, chave, valor) {
  const MARCADOR = `[template-${chave}]`;
  return template.replace(MARCADOR, valor);
}

module.exports = { definirValor };
