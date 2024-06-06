document.getElementById('entrarBtn').addEventListener('click', function() {
    var emailLogin = document.getElementById('emailLogin').value;
    var senhaLogin = document.getElementById('senhaLogin').value;

    if (emailLogin && senhaLogin) {
        var usuario = JSON.parse(localStorage.getItem('usuario'));

        if (usuario && usuario.email === emailLogin && usuario.senha === senhaLogin) {
            alert('Login realizado com sucesso!');
            window.location.href = '/index.html';
        } else {
            alert('E-mail ou senha incorretos.');
        }
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
