function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function toggleEmailErrors() {
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";
}

function isEmailValid() {
    const email = form.email().value;
    return email && validateEmail(email);
}

function toggleButtonsDisable() {
    const emailValid = isEmailValid();
    form.recoverPasswordButton().disabled = !emailValid;
}

function recoverPassword() {
    showLoading();
    firebase.auth().sendPasswordResetEmail(form.email().value).then(() => {
        hideLoading();
        alert("Se o usuário estiver cadastrado, você receberá um link para redefinir sua senha")
    }).catch(error => {
        hideLoading();
        alert(getErrorMessage(error))
    });
}

function getErrorMessage(error) {
    if (error.code == "auth/invalid-credential"){
        return "Usuário não encontrado ou Senha incorreta"
    }
    return error.message;
}

const form = {
    email: () => document.getElementById("email"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    recoverPasswordButton: () => document.getElementById("recover-password-button"),
}
