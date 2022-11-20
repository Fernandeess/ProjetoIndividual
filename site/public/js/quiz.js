var pontosQuiz = 0;
var qntdperguntas;
var perguntas = document.querySelectorAll(".pergunta")
var painelResultado = document.querySelector(".resultPanel")
function questao01(){
    var checkIfIsSelected = 0
var respostas01 = document.querySelectorAll(".optionsQuestion1")
for(var i = 0; i <+ respostas01.length; i++){
    if(respostas01[i].checked == true && respostas01[i].value > 0  ){
        console.log("acertou" )

        pontosQuiz += Number(respostas01[i].value);
    }else if(respostas01[i].checked == false){
        checkIfIsSelected ++;

    }else{
        console.log("Selecione alguma das opçoes")
    }
}
if(checkIfIsSelected == 4){
    alert("Selecione um dos campos")
}else{
perguntas[0].style = "display:none;"
perguntas[1].style = "display:flex;"
}
console.log(pontosQuiz)
}
function questao02(){
    var checkIfIsSelected = 0
var respostas01 = document.querySelectorAll(".optionsQuestion2")
for(var i = 0; i <+ respostas01.length; i++){
    if(respostas01[i].checked == true && respostas01[i].value > 0  ){
        console.log("acertou" )

        pontosQuiz += Number(respostas01[i].value);
    }else if(respostas01[i].checked == false){
        checkIfIsSelected ++;

    }else{
        console.log("Selecione alguma das opçoes")
    }
}
if(checkIfIsSelected == 4){
    alert("Selecione um dos campos")
}else{
perguntas[1].style = "display:none;"
perguntas[2].style = "display:flex;"
}
console.log(pontosQuiz)
}

function questao03(){
    var checkIfIsSelected = 0
var respostas01 = document.querySelectorAll(".optionsQuestion3")
for(var i = 0; i <+ respostas01.length; i++){
    if(respostas01[i].checked == true && respostas01[i].value > 0  ){
        console.log("acertou" )

        pontosQuiz += Number(respostas01[i].value);
    }else if(respostas01[i].checked == false){
        checkIfIsSelected ++;

    }else{
        console.log("Selecione alguma das opçoes")
    }
}
if(checkIfIsSelected == 4){
    alert("Selecione um dos campos")
}else{
perguntas[2].style = "display:none;"
perguntas[3].style = "display:flex;"
}
console.log(pontosQuiz)
}

function questao04(){
    var checkIfIsSelected = 0
var respostas01 = document.querySelectorAll(".optionsQuestion4")
for(var i = 0; i <+ respostas01.length; i++){
    if(respostas01[i].checked == true && respostas01[i].value > 0  ){
        console.log("acertou" )

        pontosQuiz += Number(respostas01[i].value);
    }else if(respostas01[i].checked == false){
        checkIfIsSelected ++;
    }else{
        console.log("Selecione alguma das opçoes")
    }
}
if(checkIfIsSelected == 4){
    alert("Selecione um dos campos")
}else{
perguntas[3].style = "display:none;"
perguntas[4].style = "display:flex;"
}
console.log(pontosQuiz)
}
function questao05(){
    var checkIfIsSelected = 0
var respostas01 = document.querySelectorAll(".optionsQuestion5")
for(var i = 0; i <+ respostas01.length; i++){
    if(respostas01[i].checked == true && respostas01[i].value > 0  ){
        console.log("acertou" )

        pontosQuiz += Number(respostas01[i].value);
    }else if(respostas01[i].checked == false){
        checkIfIsSelected ++;
    }else{
        console.log("Selecione alguma das opçoes")
    }
}
if(checkIfIsSelected == 4){
    alert("Selecione um dos campos")
}else{
perguntas[4].style = "display:none;"
console.log(painelResultado)
painelResultado.style = " display:flex; "
}
console.log(pontosQuiz)
}



