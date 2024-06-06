document.getElementById('cadastrarBtn').addEventListener('click', function() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if (nome && email && senha) {
        var usuario = {
            nome: nome,
            email: email,
            senha: senha
        };

        localStorage.setItem('usuario', JSON.stringify(usuario));

        alert('Cadastro realizado com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
