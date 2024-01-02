const templateModel = require("./template.model.js");
const parceiroModel = require("./parceiro.model.js");

module.exports = {
  ...templateModel,
  ...parceiroModel,
};
