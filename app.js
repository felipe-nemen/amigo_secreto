//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo").value;

    if (nomeInput.trim() === "") {
        alert("Por favor, insira um nome de um Amigo.");
        return;
    }

    amigos.push(nomeInput);
    document.getElementById("amigo").value = "";
    exibirAmigos();
}

function exibirAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert("Não há amigos na lista para sortear.");
        return;
    }

    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "Amigo sorteado: " + amigoSorteado;
}