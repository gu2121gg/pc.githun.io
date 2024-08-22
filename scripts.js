const validUsers = [
    { username: 'gu2121', password: '2121', redirectTo: 'pagina1.html' },
    { username: 'renner', password: '3853', redirectTo: 'pagina2.html' },
    { username: 'japinha', password: '7932', redirectTo: 'pagina3.html' },
    { username: 'eliabe', password: '2750', redirectTo: 'pagina4.html' },
    { username: 'gabriel', password: '9863', redirectTo: 'pagina5.html' },
    { username: 'pc2121', password: 'pc2121', redirectTo: 'pagina6.html' },
    { username: 'gu2121', password: '3255', redirectTo: 'pagina7.html' },
    { username: 'gu2121', password: '3243', redirectTo: 'pagina8.html' }
];

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Obtenha os valores dos campos
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Verifique se o usuário e a senha correspondem a um usuário válido
    const user = validUsers.find(user => user.username === username && user.password === password);

    if (user) {
        document.getElementById('username-error').style.display = 'none';
        document.getElementById('password-error').style.display = 'none';
        window.location.href = '1.html'; // Redireciona para a página desejada
    } else {
        document.getElementById('username-error').style.display = 'block';
        document.getElementById('password-error').style.display = 'block';
    }
});
