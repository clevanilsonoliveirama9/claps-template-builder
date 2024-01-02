const { ParceiroModel } = require("../models/parceiro.model.js");
const { VIEW_BUILD_PATH } = require("../constants/index.js");

function getParceiros(_req, res) {
  const model = new ParceiroModel();
  res.json(model.getParceiros());
}

function getTemplate(req, res) {
  const { parceiroNome, nome } = req.params;
  const model = new ParceiroModel();
  model.getTemplates(parceiroNome, templateNome);
  res.json({
    nome,
    parceiroNome,
    templatePath: `${VIEW_BUILD_PATH}/${parceiroNome}/${nome}`,
  });
}

module.exports = {
  getParceiros,
  getTemplate,
};
