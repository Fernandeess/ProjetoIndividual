async function listar() {
    var idUser = sessionStorage.getItem("ID_USUARIO")
    // const url = ``
    // const options=

    const response = await fetch(`http://localhost:3333/usuarios/listar`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"

        }, body: JSON.stringify({ idUser })
    })
    console.log(response)
    console.log(response)
    console.log("Estou no then")
    var perfil = await response.json()
    console.log(perfil[0])
    console.log(perfil[0].bio)
    console.log(perfil[0].imgPerfil," Imagem Link")
    sessionStorage.BIO_USUARIO = perfil[0].bio;
    sessionStorage.IMG_PERFIL = perfil[0].imgPerfil;
    if (response.ok) {
        // window.location = "/user/perfil.html"
             console.log("Atualizou o id e o bio")

    } else if (response.status == 404) {
        console.log("Deu 404!");
    } else {
        throw ("Houve um erro ao tentar realizar adicionar a bio! Código da response: " + response.status);
    }


    
}

var inptBio = document.querySelector("#inpBio")
var btn = document.getElementsByClassName(".btnEnviar")

async function enviarFormulario() {
    const idPerfil = sessionStorage.getItem("ID_USUARIO");
    const bio = inptBio.value

    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ bio })
    }
    const response = await fetch(`/usuarios/adicionarBio/${idPerfil}`,
        options
    )
    if (response.ok) {
        window.alert("Bio atualizada com sucesso pelo usuario de email: " + sessionStorage.getItem("EMAIL_USUARIO") + "!");
        await listar();
        

    } else if (response.status == 404) {
        window.alert("Deu 404!");
    } else {
        throw ("Houve um erro ao tentar realizar adicionar a bio! Código da response: " + response.status);
    }

}

const inptIMG = document.querySelector("#inpImg")
var btnIMG = document.getElementsByClassName(".btnEnviarImg")
function checkIMG(){
    perfilImg.src = inpImg.value ;
    if(inptIMG != ""){
        enviarFormularioIMG();
    }
 }
async function enviarFormularioIMG() {
    perfilImg.style =`display:flex;`
    const idPerfil = sessionStorage.getItem("ID_USUARIO");
    const img = inptIMG.value


    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({img})
    }
    const response = await fetch(`/usuarios/adicionarIMG/${idPerfil}`,
        options
    )
    if (response.ok) {
        window.alert("IMG atualizada com sucesso pelo usuario de email: " + sessionStorage.getItem("EMAIL_USUARIO") + "!");
        await listar();
        

    } else if (response.status == 404) {
        window.alert("Deu 404!");
    } else {
        throw ("Houve um erro ao tentar realizar adicionar a bio! Código da response: " + response.status);
    }
}

const sairBTN = document.querySelector("#btnSair")

 function sair(){
    window.location = "/user/perfil.html"
    console.log(sairBTN)
 }

