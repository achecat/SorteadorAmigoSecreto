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
        alert('Digite algo antes de adicionar')
    }
}
/*Pega o conteudo da lista com os nomes e coloca cada um em uma li no index*/
function atualizarLista(){
    let lista = document.getElementById('listaDeAmigos');
    lista.innerHTML = "";

    listaDeNomes.forEach((nome) =>{
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li)
    });
}
/*Faz o sorteio do nome*/
function sortear(){
    let sorteado = listaDeNomes[Math.floor(Math.random() * listaDeNomes.length)];
    exibirTextoNaTela("h2", `Parabens ${sorteado}, você foi escolhido`)
}