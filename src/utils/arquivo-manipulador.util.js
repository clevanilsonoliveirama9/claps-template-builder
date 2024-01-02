const fs = require("fs");
const path = require("path");

class ArquivoManipulador {
  lerSync = (...args) => {
    return fs.readFileSync(path.resolve(...args), "utf-8");
  };

  criarSync = (caminho, arquivoNome, conteudo) => {
    if (!fs.existsSync(caminho)) {
      fs.mkdirSync(caminho, { recursive: true });
    }

    fs.writeFileSync(path.resolve(caminho, arquivoNome), conteudo);
  };
}

module.exports.ArquivoManipulador = ArquivoManipulador;
