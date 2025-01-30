function validarFormulario() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let dataNascimento = document.getElementById('dataNascimento').value;
    let genero = document.getElementById('genero').value;
    let termos = document.getElementById('termos').checked;

    let mensagem = document.getElementById('mensagem');
    mensagem.classList.remove('sucesso', 'erro');
    mensagem.textContent = '';

    if (!nome || !email || !senha || !dataNascimento || !genero || !termos) {
        mensagem.textContent = 'Todos os campos são obrigatórios!';
        mensagem.classList.add('erro');
        return false;
    }

    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        mensagem.textContent = 'Por favor, insira um e-mail válido.';
        mensagem.classList.add('erro');
        return false;
    }

    if (senha.length < 8) {
        mensagem.textContent = 'A senha deve ter pelo menos 8 caracteres.';
        mensagem.classList.add('erro');
        return false;
    }

    mensagem.textContent = 'Cadastro realizado com sucesso!';
    mensagem.classList.add('sucesso');
    return false; 
}
