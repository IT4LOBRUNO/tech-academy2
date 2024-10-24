firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        window.location.href = "../login/index.html";
    } else {
        console.log('Usuário logado:', user);
    }
});

function logout() {
    console.log('Logout iniciado');
    firebase.auth().signOut().then(() => {
        console.log('Logout bem-sucedido');
        window.location.href = "../login/index.html";
    }).catch((error) => {
        console.log('Erro ao fazer logout:', error);
        alert('Erro ao fazer logout: ' + error.message);
    });
}

function webDevelopment() {
    window.location.href = "webDevelopment/index.html";
}

function cyberSecurity() {
    window.location.href = "cyberSecurity/index.html";
}
