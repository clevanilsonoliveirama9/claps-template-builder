const fs = require("fs");
const path = require("path");
const {
  ConstrutorTemplate,
  converterCamelCaseParaSnakeCase,
  lerArquivo,
} = require("./utils/index");

const templatePath = path.resolve(__dirname, "templates");
const definicoesPath = path.resolve(__dirname, "definicoes");

fs.readdirSync(path.resolve(__dirname, "definicoes")).forEach((arquivoNome) => {
  const definicaoArquivo = lerArquivo(definicoesPath, arquivoNome);
  const json = JSON.parse(definicaoArquivo);
  const template = lerArquivo(
    templatePath,
    json.templateNome || "bilhete-base.template.html"
  );
  const construtor = new ConstrutorTemplate();
  construtor.definirTemplate(template);

  Object.keys(json).forEach((chave) => {
    const valor = json[chave];
    if (typeof valor === "object") {
      return construtor.definirValoresObjeto(chave, valor);
    }
    construtor.definirValor(converterCamelCaseParaSnakeCase(chave), valor);
  });

  construtor.construir(arquivoNome.replace(".json", ".html"));
});
