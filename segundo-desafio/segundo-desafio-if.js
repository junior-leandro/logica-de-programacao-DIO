// variavel para chamar e guardar os dados da função em um array
let saldoVitorias = gerarSaldoDeVitorias()


// condicional

if (saldoVitorias[2] <=10){
    exibeResultado(saldoVitorias, "Ferro")
}
else if(saldoVitorias[2] >= 11 && saldoVitorias[2] <= 20){ 
    exibeResultado(saldoVitorias, "Bronze")
}
else if(saldoVitorias[2] >= 21 && saldoVitorias[2] <= 50){ 
    exibeResultado(saldoVitorias, "Prata")
}
else if(saldoVitorias[2] >= 51 && saldoVitorias[2] <= 80){ 
    exibeResultado(saldoVitorias, "Ouro")
}
else if(saldoVitorias[2] >= 81 && saldoVitorias[2] <= 90){ 
    exibeResultado(saldoVitorias, "Diamante")
}
else if(saldoVitorias[2] >= 91 && saldoVitorias[2] <= 100){
    exibeResultado(saldoVitorias, "Lendário")
}
else {
    exibeResultado(saldoVitorias, "Imortal")
}

// função que gera a pontuação do heróis
function gerarSaldoDeVitorias() {
    // (Utilizei uma formula para declarar o valores aleatorios entre 50 e 150)
    let numVictories = Math.floor(Math.random() * (150 - 50) + 50)
    // (Utilizei uma formula para declarar o valores aleatorios entre 0 e 50)
    let numDefeats = Math.floor(Math.random() * (50 - 0) + 0)
    // o saldo é igual a numero de vitorias menos o de derrotas
    let saldo = numVictories - numDefeats
    // crio um array com os dados
    let dadosDoHeroi = [numVictories, numDefeats, saldo]
    //retorno o array
    return dadosDoHeroi
}

// função que exibe o resultato
function exibeResultado(saldoVitorias, nivel) {
    console.log(`O Herói tem de saldo de ${saldoVitorias[2]} vitórias está no nível de ${nivel}`)
}