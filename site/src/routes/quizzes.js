var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/listarRankingQuiz1", function(req,res){
    quizController.listarRankingQuiz1(req,res)
})
module.exports = router;