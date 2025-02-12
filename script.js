function adicionarTarefa() {

    //recebe valor do input do usuário
    const inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim();//comando trim, exclui os espaços do início e fim da frase

    const mensagem =  document.getElementById("mensagem");
//tomada de decisão, se for vazio, faça uma coisa, se não, faça outra
    if (tarefa == "") {
        let mensagemErro = "Digite uma tarefa !!" ;
        let corErro = "#DC143C";
//aqui o js esta buscando um id com nome mensagem, e estamos atribuindo mensageErro nela, na condição if
        mensagem.textContent = mensagemErro;
        mensagem.style.color = corErro;  
    }else{
//mensagem de tarefa adicionada com sucesso
    let mensagemSucesso = "Tarefa adicionada com sucesso !!";
    let corSucesso = "#556B2F";
    mensagem.textContent = mensagemSucesso;
    mensagem.style.color = corSucesso;

    //cria novo item (li) e insere na lista da ul
    const listaTarefas = document.getElementById("listaTarefas");
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefa
    listaTarefas.appendChild(novaTarefa);
    }
    
//limpa o input, retornando ele vazio, evitando q o usuário apague manualmente
    inputTarefa.value = "";
}