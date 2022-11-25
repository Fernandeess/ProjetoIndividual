var pontosQuiz = 0;
var qntdperguntas;
var quiz = 1;
var rank = [];
var userPoints = {
    quizId:1,
    usuario: sessionStorage.getItem("ID_USUARIO"),
    pontosQuiz: 0,
    qntdAcertos: 0,
    finalizouQuiz:false
}
var perguntas = document.querySelectorAll(".pergunta")
var painelResultado = document.querySelector(".resultPanel")
function mostrarPanel() {

    painelResultado.style = " display:flex; "
    showPoints.innerHTML = `Você Acertou <div id="pointBarra">${userPoints.qntdAcertos}</div>/${perguntas.length}`
    if (userPoints.pontosQuiz <= 200) {
        showResult.innerHTML = "Você Foi Mal"
        showResult.style = "Color:red;"
    } else if (userPoints.pontosQuiz >= 200 && userPoints.pontosQuiz <= 400) {
        showResult.innerHTML = "Você quase acertou todos, Boa!"
        showResult.style = "Color:yellow;"
    } else if (userPoints.pontosQuiz >= 500) {
        showResult.innerHTML = "Perfect"
        showResult.style = "Color:green;"
    }
    //     console.log(rank)

    // console.log("Tamanho array;",rank.length)
    //    for(var i = 0; i <= rank.length; i++){
    //     showRank.innerHTML+=`${i}  ${rank[i].nome} `
    //    }
    
}
function questao01() {
    var checkIfIsSelected = 0
    var respostas01 = document.querySelectorAll(".optionsQuestion1")
    for (var i = 0; i < + respostas01.length; i++) {
        if (respostas01[i].checked == true && respostas01[i].value > 0) {
            console.log("acertou")
            userPoints.qntdAcertos ++;
            userPoints.pontosQuiz += Number(respostas01[i].value);
        } else if (respostas01[i].checked == false) {
            checkIfIsSelected++;

        } else {
            console.log("Selecione alguma das opçoes")
        }
    }
    if (checkIfIsSelected == 4) {
        alert("Selecione um dos campos")
    } else {
        perguntas[0].style = "display:none;"
        perguntas[1].style = "display:flex;"
    }
    console.log(userPoints.pontosQuiz)
}
function questao02() {
    var checkIfIsSelected = 0
    var respostas01 = document.querySelectorAll(".optionsQuestion2")
    for (var i = 0; i < + respostas01.length; i++) {
        if (respostas01[i].checked == true && respostas01[i].value > 0) {
            console.log("acertou")
            userPoints.qntdAcertos ++;
            userPoints.pontosQuiz += Number(respostas01[i].value);
        } else if (respostas01[i].checked == false) {
            checkIfIsSelected++;

        } else {
            console.log("Selecione alguma das opçoes")
        }
    }
    if (checkIfIsSelected == 4) {
        alert("Selecione um dos campos")
    } else {
        perguntas[1].style = "display:none;"
        perguntas[2].style = "display:flex;"
    }
    console.log(userPoints.pontosQuiz)
}

function questao03() {
    var checkIfIsSelected = 0
    var respostas01 = document.querySelectorAll(".optionsQuestion3")
    for (var i = 0; i < + respostas01.length; i++) {
        if (respostas01[i].checked == true && respostas01[i].value > 0) {
            console.log("acertou")
            userPoints.qntdAcertos ++;
            userPoints.pontosQuiz += Number(respostas01[i].value);
        } else if (respostas01[i].checked == false) {
            checkIfIsSelected++;

        } else {
            console.log("Selecione alguma das opçoes")
        }
    }
    if (checkIfIsSelected == 4) {
        alert("Selecione um dos campos")
    } else {
        perguntas[2].style = "display:none;"
        perguntas[3].style = "display:flex;"
    }
    console.log(userPoints.pontosQuiz)
}

function questao04() {
    var checkIfIsSelected = 0
    var respostas01 = document.querySelectorAll(".optionsQuestion4")
    for (var i = 0; i < + respostas01.length; i++) {
        if (respostas01[i].checked == true && respostas01[i].value > 0) {
            console.log("acertou")
            userPoints.qntdAcertos ++;
            userPoints.pontosQuiz += Number(respostas01[i].value);
        } else if (respostas01[i].checked == false) {
            checkIfIsSelected++;
        } else {
            console.log("Selecione alguma das opçoes")
        }
    }
    if (checkIfIsSelected == 4) {
        alert("Selecione um dos campos")
    } else {
        perguntas[3].style = "display:none;"
        perguntas[4].style = "display:flex;"
    }
    console.log(userPoints.pontosQuiz)
}
function questao05() {
    var checkIfIsSelected = 0
    var respostas01 = document.querySelectorAll(".optionsQuestion5")
    for (var i = 0; i < + respostas01.length; i++) {
        if (respostas01[i].checked == true && respostas01[i].value > 0) {
            console.log("acertou")
            userPoints.qntdAcertos ++;
            userPoints.pontosQuiz += Number(respostas01[i].value);
        } else if (respostas01[i].checked == false) {
            checkIfIsSelected++;
        } else {
            console.log("Selecione alguma das opçoes")
        }
    }
    if (checkIfIsSelected == 4) {
        alert("Selecione um dos campos")
    } else {
        perguntas[4].style = "display:none;"
        perguntas[5].style = "display:flex;"
    }
    console.log(userPoints.pontosQuiz)
}


async function listarRankingQuiz1() {
    // var quiz = 1;
    const response = await fetch(`http://localhost:3333/quizzes/listarRankingQuiz1`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"

        }/*, body: JSON.stringify({ quiz }) */
    })
    console.log(response)
    console.log(response)
    console.log("Estou no then")
    var ranking = await response.json()
    for(var i = 0; i <= ranking.length; i++){
        rank.push(ranking[i])
        for(var i = 0; i <= ranking.length; i++){
            showRank.innerHTML+=`<div>${i +1} ${ranking[i].nome} Pontos: ${ranking[i].pontos}</div> `
    
           }
    }
    
    if (response.ok) {
        // window.location = "/user/perfil.html"
             console.log("PEGUEI OS VALORES")

    } else if (response.status == 404) {
        console.log("Deu 404!");
    } else {
        throw ("Houve um erro ao tentar realizar adicionar a bio! Código da response: " + response.status);
    }


    
}

function questaoFinal() {
    var checkIfIsSelected = 0
    var respostas01 = document.querySelectorAll(".optionsQuestion6")
    for (var i = 0; i < + respostas01.length; i++) {
        if (respostas01[i].checked == true && respostas01[i].value > 0) {
            console.log("acertou")
            userPoints.qntdAcertos ++;
            userPoints.pontosQuiz += Number(respostas01[i].value);
        } else if (respostas01[i].checked == false) {
            checkIfIsSelected++;
        } else {
            console.log("Selecione alguma das opçoes")
        }
    }
    if (checkIfIsSelected == 4) {
        alert("Selecione um dos campos")
    } else {
        listarRankingQuiz1();
        perguntas[5].style = "display:none;"
        mostrarPanel();
        
        // for(var i =0; i <= rank.length;i++){
        //     showRank.innerHTML += ` ranks ${rank[i]}`
        // }
    }
    console.log(userPoints.pontosQuiz)
}


