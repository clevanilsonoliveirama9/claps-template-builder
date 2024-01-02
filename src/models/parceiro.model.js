const fs = require("fs");
const {
  TEMPLATES_PATH,
  VIEW_BUILD_PATH,
  PARCEIROS_DIR,
} = require("../constants/index.js");
const { ArquivoManipulador } = require("../utils/index.js");

class ParceiroModel {
  getParceiros() {
    return fs.readdirSync(PARCEIROS_DIR);
  }

  getTemplates(parceiroNome, templateNome) {
    ArquivoManipulador.lerSync(TEMPLATES_PATH, templateNome);
    ArquivoManipulador.criarSync(
      `${VIEW_BUILD_PATH}/${parceiroNome}`,
      templateNome,
      "hello world"
    );
  }
}

module.exports = {
  ParceiroModel,
};
