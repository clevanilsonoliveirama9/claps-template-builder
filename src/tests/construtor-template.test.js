const fs = require("fs");
const path = require("path");
const ConstrutorTemplate = require("../utils/construtor-template.util.js");

describe(ConstrutorTemplate.name, () => {
  test("Deve definir o template", () => {
    const construtorTemplate = new ConstrutorTemplate();
    construtorTemplate
      .definirTemplate(path.resolve(__dirname, "teste.template.html"))
      .definirValor("teste", "Teste top");
    const template = fs.readFileSync(
      path.resolve(__dirname, "teste-expect.template.html"),
      "utf-8"
    );
    expect(construtorTemplate.template).toBe(template);
  });
});
