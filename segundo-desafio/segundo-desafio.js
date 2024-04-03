
// variaveis para guardar as vitorias e derrotas do Heroi 

// (Utilizei uma formula para declarar o valores aleatorios entre 50 e 250)
let numVictories = Math.floor(Math.random() * (250 - 50) + 50)
// (Utilizei uma formula para declarar o valores aleatorios entre 0 e 50)
let numDefeats = Math.floor(Math.random() * (50 - 0) + 0)

let saldo = numVictories - numDefeats

console.log(`Total de vitórias: ${numVictories}`)
console.log(`Total de derrotas: ${numDefeats}`)
console.log(`Pontuação: ${saldo}`)

