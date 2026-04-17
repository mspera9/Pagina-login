async function controllaCredenziali() {
    // 1. Prendiamo quello che l'utente ha scritto
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (!username|| !password) {
        alert("Inserisci username e password");
        const res = await fetch('/login?username=${username}&password=${password}');
        const dati = await res.json();
        document.getElementById("risultato"/*id del paragrafo trovato in html*/).innerText = dati.messaggio;
    }
document.getElementById('btn_login').addEventListener('click', controllaCredenziali);