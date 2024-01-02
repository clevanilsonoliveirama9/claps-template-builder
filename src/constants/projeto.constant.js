const path = require("path");

const VERSAO = "1.1.0";
const PORT = 3000;
const VIEW_TEMPLATES_PATH = path.join(__dirname, "..", "views");
const VIEW_BUILD_PATH = path.join(__dirname, "..", "views", "build");
const PARCEIROS_DIR = path.join(__dirname, "..", "definicoes");
const TEMPLATES_PATH = path.join(__dirname, "..", "templates");

module.exports = {
  VERSAO,
  PORT,
  VIEW_TEMPLATES_PATH,
  PARCEIROS_DIR,
  TEMPLATES_PATH,
  VIEW_BUILD_PATH,
};
