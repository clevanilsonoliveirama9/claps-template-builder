const fs = require("fs");
const path = require("path");
const {
  ConstrutorTemplate,
  ArquivoManipulador,
  converterCamelCaseParaSnakeCase,
} = require("./utils/index");

console.clear();

const manipulador = new ArquivoManipulador();

function lerAquivos(caminho) {
  fs.readdirSync(caminho).forEach((nome) => {
    const isArquivo = nome.includes(".");
    if (isArquivo) return tratarArquivo(caminho, nome);
    return lerAquivos(`${caminho}/${nome}`);
  });
}

function tratarArquivo(caminho, nome) {
  const arquivo = manipulador.lerSync(caminho, nome);
  const json = JSON.parse(arquivo);
  const { templateNome } = json;
  const template = manipulador.lerSync(__dirname, "templates", templateNome);
  const construtor = new ConstrutorTemplate(manipulador);

  construtor.definirTemplate(template);

  Object.keys(json).forEach((chave) => {
    const valor = json[chave];
    if (typeof valor === "object") {
      return construtor.definirValoresObjeto(chave, valor);
    }
    construtor.definirValor(converterCamelCaseParaSnakeCase(chave), valor);
  });

  const prefixoDir = json.parceiroDir || "";
  construtor.construir(prefixoDir, nome.replace("json", "html"));
}

lerAquivos(path.join(__dirname, "definicoes"));
