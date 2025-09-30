// Guardando os elementos do HTML em variáveis para usá-los no código.
let numero1Input = document.getElementById('numero1');
let numero2Input = document.getElementById('numero2');
let operacaoSelect = document.getElementById('operacao');
let botaoCalcular = document.getElementById('botaoCalcular');
let resultadoDiv = document.getElementById('resultado');

// Este é o método moderno e correto de fazer o botão funcionar.
// Ele "escuta" por um clique e, quando acontece, executa a função.
botaoCalcular.addEventListener('click', () => {

    // parseFloat converte o texto dos inputs em números (incluindo decimais).
    let num1 = parseFloat(numero1Input.value);
    let num2 = parseFloat(numero2Input.value);
    let operacao = operacaoSelect.value;

    let resultado; // Variável para guardar o resultado final.

    // Se a operação NÃO for raiz, os dois números são obrigatórios.
    if (operacao !== 'raiz' && (isNaN(num1) || isNaN(num2))) {
        resultadoDiv.textContent = 'Erro: Faltam números';
        return; // Para a função aqui se houver erro.
    }

    // Se a operação for raiz, apenas o primeiro número é obrigatório.
    if (operacao === 'raiz' && isNaN(num1)) {
        resultadoDiv.textContent = 'Erro: Falta número';
        return;
    }

    // O 'switch' verifica qual operação foi escolhida e executa o bloco de código certo.
    switch (operacao) {
        case 'soma':
            resultado = num1 + num2;
            break;
        case 'subtracao':
            resultado = num1 - num2;
            break;
        case 'multiplicacao':
            resultado = num1 * num2;
            break;
        case 'divisao':
            // Checagem para evitar o erro de divisão por zero.
            if (num2 === 0) {
                resultadoDiv.textContent = 'Impossível dividir por 0';
                return;
            }
            resultado = num1 / num2;
            break;
        case 'potencia':
            resultado = Math.pow(num1, num2);
            break;
        case 'raiz':
            // Checagem para evitar erro com raiz de número negativo.
            if (num1 < 0) {
                resultadoDiv.textContent = 'Raiz negativa';
                return;
            }
            resultado = Math.sqrt(num1);
            break;
        default:
            // Se, por algum motivo, a operação for inválida.
            resultadoDiv.textContent = 'Operação inválida';
            return;
    }

    // Arredonda o resultado para no máximo 5 casas decimais para caber no visor.
    let resultadoFormatado = parseFloat(resultado.toFixed(5));
    resultadoDiv.textContent = resultadoFormatado;
});
