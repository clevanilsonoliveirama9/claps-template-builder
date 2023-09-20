function converterCamelCaseParaSnakeCase(texto) {
  const palavras = texto.split(/(?=[A-Z])/);
  const textoSnakeCase = palavras.join("_").toLowerCase();
  return textoSnakeCase;
}

module.exports = { converterCamelCaseParaSnakeCase };
