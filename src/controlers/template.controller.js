const path = require("path");
const { VIEW_TEMPLATES_PATH } = require("../constants/index.js");
const { TemplateModel } = require("../models/index.js");

function getIndexHtml(_req, res) {
  res.sendFile(path.join(VIEW_TEMPLATES_PATH, "index.html"));
}

function getTemplates(_req, res) {
  const templateModel = new TemplateModel();
  res.json(templateModel.getTemplates());
}

module.exports = {
  getIndexHtml,
  getTemplates,
};
