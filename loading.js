function showLoading() {
    const div = document.createElement("div");
    div.classList.add("loading");

    const label = document.createElement("label");
    label.innerText = "Carregando..."

    div.appendChild(label);
    document.body.appendChild(div);

    setTimeout(()=> hideloading(), 2000);
}

function hideLoading() {
    const loading = document.getElementsByClassName("loading");
    if(loading.length) {
        loading[0].remove();
    }
}