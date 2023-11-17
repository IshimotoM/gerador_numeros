// Constantes de modulos.
const colors = require("colors");
const read = require("readline-sync");

// ********** APLICATIVO PARA SORTEIO DE NUMEROS PARA LOTERIA / APOSTAS **********

console.clear();
console.log("***** APLICATIVO PARA SORTEIO DE NUMEROS PARA LOTERIA / APOSTAS *****".green.bold);

// Captar a quantidade de numeros que deverao ser sorteados para o usuario;
// Verificar com o usuario o intervalo dos numeros sorteados (EX: De 1 a 60);

pulaLinha();
let qtdNumerosParaSortear = Number(read.question("Digite a quantidade de números que deverão ser sorteados: "));
pulaLinha();
console.log("A seguir, digite o intervalo de numeros que serão sorteados (EX: De 1 a 60).");
pulaLinha();

let intervaloNumerosSorteadosInicio = Number(read.question("Digite o número inicial: "));
let intervaloNumerosSorteadosMaximo = Number(read.question("Digite o número máximo: "));

// Lista que ira armazenar os numeros sorteados para o usuario;
let numerosSorteados = [];

// Fazer o sorteio dos numeros referente ao criterios acima;
// Garantir que os numeros sorteados nao se repitam;
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let numeroAleatorioSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    if (numerosSorteados.includes(numeroAleatorioSorteado)) {
        getRandomIntInclusive(min, max)
    } else {
        numerosSorteados.push(numeroAleatorioSorteado);
    }
}

for (let i = 1; i <= qtdNumerosParaSortear; i++) {
    getRandomIntInclusive(intervaloNumerosSorteadosInicio, intervaloNumerosSorteadosMaximo);
}

// Ordenar os numeros sorteados do menor para o maior;
numerosSorteados.sort(function (a,b){ return a - b});

// Mostrar ao usuario quais os numeros sorteados;
pulaLinha();
console.log("Os numeros sorteados foram:".yellow.italic.bold);
console.log(`${numerosSorteados}.`.bold);

// Calcular a probalidade do usuario tirar esses mesmos numeros;
// Mostrar para o usuario essa probabilidade;
let probabilidade = parseInt(factorialize(intervaloNumerosSorteadosMaximo) / (factorialize(qtdNumerosParaSortear) * factorialize((intervaloNumerosSorteadosMaximo - qtdNumerosParaSortear)))).toLocaleString('pt-BR', { style: 'decimal'});

pulaLinha();
console.log("Sua probabilidade de tirar essa combinação de números é de:".cyan.italic.bold);
console.log(`1 em ${probabilidade}.`.bold);
pulaLinha();

// Função para factoralizar um numero;
function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
}

// Função para pular uma linha no terminal.
function pulaLinha(){
    console.log("");
}