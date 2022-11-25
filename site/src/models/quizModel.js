var database = require("../database/config")

function listarRankingQuiz1(idQuiz) {
    console.log("Passei no model do listar e o id e " + idQuiz)
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `SELECT  nome,fkQuiz,pontos FROM Usuario JOIN Pontos ON idUsuario = fkUsuario JOIN Quiz ON idQuiz = fkQuiz  WHERE idQuiz = 1 order by pontos desc;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    listarRankingQuiz1
};