async function loggati_pandas() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) 
        return alert("Scrivi lo username e password");

    const res = await fetch(`/login_pandas?username=${username}&password=${password}`);
    const json = await res.json();
    
    if (json.messaggio == 1){
        document.getElementById("risultato").innerText = "Accesso effettuato";
    }
    else {
        document.getElementById("risultato").innerText = "Accesso negato";
    }
    

}

document.getElementById('bottone').addEventListener('click', loggati_pandas);
document.getElementById('bottone_pandas').addEventListener('click', loggati_pandas);

//async == non legate nel tempo, asincrona.