// criamos variaveis para pegar os valores dos campos do formulario

let email = document.getElementById('campo-email').value;
let confirmacaoEmail = document.getElementById('campo-confirmação').value;
let senha = document.getElementById('campo-senha').value;
let confirmacaoSenha = document.getElementById('campo-confirmacaosenha').value;

console.log(email)
console.log(confirmacaoEmail)
console.log(senha)
console.log(confirmacaoSenha)

// function pegarOsValoresDosCampos(event) {

//     console.log(event.target.value)


// }
function cadastrarNovoUsuario(event) {

    event.preventDefault()

    let novoUsuario = {
        email: email,
        confirmacaoEmail: confirmacaoEmail,
        senha: senha,
        confirmacaoSenha: confirmacaoSenha
    };

    console.log( novoUsuario)
}