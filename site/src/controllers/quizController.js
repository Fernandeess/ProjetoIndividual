var quizModel = require("../models/quizModel");

function listarRankingQuiz1(req, res) {
   var quiz = req.body.quiz;
    // console.log(idQuiz)
    console.log("Passei pelo controller listar")
    console.log("id Quiz Testar",quizModel.listarRankingQuiz1(quiz))
    quizModel.listarRankingQuiz1(quiz)
    .then(function (resultado) {
            console.log("Passei pelo controller listar Then")
            console.log(resultado);
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log("Passei pelo controller listar catch")
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
module.exports = {
    listarRankingQuiz1
}