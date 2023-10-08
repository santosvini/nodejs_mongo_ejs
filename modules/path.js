const path = require("path")

//nome do arquivo atual
console.log(path.basename(__filename))

// diretorio atual
console.log(path.dirname(__filename))

//extensao do arquivo
console.log(path.extname(__filename))

//Criar obj path
console.log(path.parse(__filename))

// Juntar caminhos de arquivos
console.log(path.join(__dirname, "test", "test.html"))