const fs = require("fs");
const { TEMPLATES_PATH } = require("../constants/index");

class TemplateModel {
  getTemplates() {
    return fs.readdirSync(TEMPLATES_PATH);
  }
}

module.exports = {
  TemplateModel,
};
