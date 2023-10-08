const fs = require('fs');
const path = require('path')

// Criar pasta
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     console.log('Erro: ', error);
//  } console.log("Pasta criada com sucesso")
//   })

// Criar arquivo
 fs.writeFile(path.join(__dirname, "/test", "test.txt"), 'Hello Node!', (err) => {
   if (err) {
     return console.log('Erro: ', err);
   } console.log("Arquivo criado com sucesso")
// Add arquivo
  fs.appendFile(path.join(__dirname, "/test", "test.txt"), 'Hello Cypress!', (err) => {
    if (err) {
      return console.log('Erro: ', err);
    } console.log("Arquivo criado com sucesso")
  })
  //Ler arquivo
  fs.readFile(path.join(__dirname, "/test", "test.txt"), "utf8", (err, data) => {
    if (err) {
      return console.log('Erro: ', err);
    } console.log(data)
  })
})

