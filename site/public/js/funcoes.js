// sessãologin.html
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    
    if (email != null && nome != null) {
        // console.log("validado")
         
    } else {
        setTimeout(() => window.location = "../index.html",1000)
        // console.log("vaza")
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../index.html";
}
function limparErros(){
    div_aguardar.style = `display:none;`
    div_erros_login.style = `display:none;`
    console.log("fechar loading")
}

// modal

