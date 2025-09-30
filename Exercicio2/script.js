// SELECIONAR OS ELEMENTOS ESTÁTICOS DO HTML
let inputTarefa = document.getElementById('inputTarefa');
let botaoAdicionar = document.getElementById('botaoAdicionar');
let listaTarefas = document.getElementById('listaTarefas');

// FUNÇÃO PARA ADICIONAR UMA NOVA TAREFA
function adicionarTarefa() {
    // Pega o texto do input e remove espaços em branco do início e do fim
    let textoTarefa = inputTarefa.value.trim();

    // Validação: Se o texto estiver vazio, não faz nada.
    if (textoTarefa === "") {
        return;
    }

    // Cria um novo item de lista (<li>)
    let li = document.createElement('li');

    // Cria um <span> para colocar o texto da tarefa
    let spanTexto = document.createElement('span');
    spanTexto.textContent = textoTarefa;

    // Cria o botão de remover
    let botaoRemover = document.createElement('button');


    botaoRemover.className = 'botao-remover'; // Adiciona a classe para o estilo do CSS


    // Adiciona o <span> e o botão de remover dentro do <li>
    li.appendChild(spanTexto);
    li.appendChild(botaoRemover);

    // Adiciona o novo <li> completo dentro da lista <ul>
    listaTarefas.appendChild(li);



    // Limpa o campo de input para a próxima tarefa
    inputTarefa.value = "";
    // Coloca o foco de volta no input para facilitar a digitação
    inputTarefa.focus();
}

// FUNÇÃO PARA REMOVER TAREFA (USANDO DELEGAÇÃO DE EVENTOS)
function removerTarefa(evento) {
    let elementoClicado = evento.target;

    // Verifica se o elemento clicado é um botão com a classe 'botao-remover'
    if (elementoClicado.classList.contains('botao-remover')) {
        let liParaRemover = elementoClicado.parentElement;
        listaTarefas.removeChild(liParaRemover);
    }
}

// ADICIONAR OS "OUVINTES" DE EVENTOS

botaoAdicionar.addEventListener('click', adicionarTarefa);
listaTarefas.addEventListener('click', removerTarefa);

inputTarefa.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter') {
        adicionarTarefa();
    }
});
