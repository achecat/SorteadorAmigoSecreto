/*Criacao da lista com os nomes para sortear*/
let listaDeNomes = [];

/*Pega uma tag e exibe um texto especifico naquela tag*/
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

/*Adiciona o valor do input na lista com os nomes*/
function adicionarNoArray(){
    let inputNome = document.getElementById("idDoInput");
    let nome = inputNome.value.trim();

    if (nome !== ""){
        listaDeNomes.push(nome);
        atualizarLista();
        inputNome.value = "";
    }
    else{
        alert('Digite algo antes de adicionar!');
    }
}

/*Pega o conteudo da lista com os nomes e coloca cada um em uma li no index*/
function atualizarLista(){
    let lista = document.getElementById('listaDeAmigos');
    lista.innerHTML = "";

    listaDeNomes.forEach((nome) =>{
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

/*Faz o sorteio do nome*/
function sortear(){
    if (listaDeNomes <= 1){
        alert("Adicione nomes antes de sortear!");
        return
    }

    let sorteado = listaDeNomes[Math.floor(Math.random() * listaDeNomes.length)];
    exibirTextoNaTela("h2", `Parabéns ${sorteado}, você foi escolhido!`);

    document.getElementById("buttonSortear").style.display = "none";
    document.getElementById("buttonReiniciar").style.display = "inline-block";
}

/*Reinicia toda a aplicacao, limpando a lista e liberando o input*/
function reiniciar(){
    listaDeNomes = [];

    exibirTextoNaTela("h2", "Digite o nome dos seus amigos!")

    atualizarLista()

    document.getElementById("buttonReiniciar").style.display = "none";
    document.getElementById("buttonSortear").style.display = "inline-block";
}