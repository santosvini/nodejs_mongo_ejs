const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.t6inn0d.mongodb.net/database?retryWrites=true&w=majority`)
    .then(console.log("Conexão ao banco de dados realizada com sucesso"))
    .catch(error => {
      console.log("Erro ao se conectar ao banco de dados: ", error)
    })
  }
module.exports = connectToDatabase;
