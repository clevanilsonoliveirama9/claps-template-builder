const fs = require("fs");
const path = require("path");
const { lerArquivo } = require("./ler-arquivo.util");
const { converterCamelCaseParaSnakeCase } = require("./converter-case.util");

function gerarMarcador(chave) {
  return `[template_${chave}]`;
}

class ConstrutorTemplate {
  template = "";

  /**
   * @param {string} caminho
   * @returns {ConstrutorTemplate}
   */
  definirTemplate(template) {
    this.template = template;
    return this;
  }

  /**
   * @param {string} chave
   * @param {string} valor
   */
  definirValor(chave, valor) {
    const MARCADOR = gerarMarcador(chave);
    this.template = this.template.replaceAll(MARCADOR, valor);
    return this;
  }

  definirValoresObjeto(chave, objeto) {
    const { templateNome } = objeto;
    const template = lerArquivo("src", "templates", templateNome);
    let linhas = "";

    objeto.valores.forEach((coluna) => {
      linhas += template;

      Object.keys(coluna).forEach((chaveColuna) => {
        const valor = coluna[chaveColuna];
        const marcador = gerarMarcador(
          converterCamelCaseParaSnakeCase(chaveColuna)
        );
        linhas = linhas.replaceAll(marcador, valor);
      });
    });
    this.template = this.template.replace(gerarMarcador(chave), linhas);
  }

  /**
   * @param {string} nome
   */
  construir(nome) {
    fs.writeFileSync(
      path.resolve(__dirname, "..", "dist", nome),
      this.template
    );
  }
}

module.exports = ConstrutorTemplate;
