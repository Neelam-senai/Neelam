// criamos variaveis para pegar os valores dos campos do formulario


console.log(email)
console.log(confirmacaoEmail)
console.log(senha)
console.log(confirmacaoSenha)

// function pegarOsValoresDosCampos(event) {
    
//     console.log(event.target.value)


// }
// function cadastrarNovoUsuario(event) {
//     let email = document.getElementById('campo-email').value;
//     let confirmacaoEmail = document.getElementById('campo-confirmacao').value;
//     let senha = document.getElementById('campo-senha').value;
//     let confirmacaoSenha = document.getElementById('campo-confirmacaosenha').value;

//     event.preventDefault()

//     let novoUsuario = {
//         email: email,
//         confirmacaoEmail: confirmacaoEmail,
//         senha: senha,
//         confirmacaoSenha: confirmacaoSenha
//     };

//     console.log( novoUsuario)
// }

// function Register() {
//     const mail = ;
//     const password = ;

//     if (mail  || password) {
        
//     }
// }


let usuarios = [];

function cadastrarNovoUsuario(event) {
    event.preventDefault();

    const email = document.getElementById('campo-email').value;
    const confirmarEmail = document.getElementById('campo-confirmação').value;
    const senha = document.getElementById('campo-senha').value;
    const confirmarSenha = document.getElementById('campo-confirmacaosenha').value;

    if (email !== confirmarEmail) {
        alert('Os e-mails não coincidem!');
        return;
    }
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem!');
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioExistente = usuarios.find(usuario => usuario.email === email);
    if (usuarioExistente) {
        alert('E-mail já cadastrado!');
        return;
    }

    usuarios.push({ email, senha });

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Cadastro realizado com sucesso!');
    window.location.href = '../login/login.html';
}



function fazerLogin(event) {
    event.preventDefault(); 

    const email = document.getElementById('campo-email').value;
    const senha = document.getElementById('campo-senha').value;


    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];


    const usuario = usuarios.find(u => u.email === email && u.senha === senha);

    if (usuario) {
        alert('Login bem-sucedido!');
        window.location.href = '../index.html'; 
    } else {
        alert('E-mail ou senha incorretos.');
    }
}
