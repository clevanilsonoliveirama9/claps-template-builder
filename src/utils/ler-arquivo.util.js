const fs = require("fs");
const path = require("path");

function lerArquivo(...args) {
  return fs.readFileSync(path.resolve(...args), "utf-8");
}

module.exports = { lerArquivo };
