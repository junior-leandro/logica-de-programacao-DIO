/* 

** Resolvendo o problema usando "SWITCH CASE" **

*/

// variavel para guardar o nome do Heroi
let nomeHeroi = "Junião de Torn"

// variavel para guardar a XP do Heroi 
// (Utilizei uma formula para declarar o XP aleatoriamente entre 10 e 15.000)
let xpHeroi = Math.floor(Math.random() * (15000 - 10) + 10)

// variavel para guardar o nível
let nivelHeroi = "" 


switch (true){
    case xpHeroi < 1000:
        nivelHeroi = "Ferro"
    break

    case xpHeroi >= 1000 && xpHeroi < 2000:
        nivelHeroi = "Bronze"
    break
    
    case xpHeroi >= 2001 && xpHeroi < 5001:
        nivelHeroi = "Prata"
    break

    case xpHeroi >= 5001 && xpHeroi < 7000:
        nivelHeroi = "Ouro"
    break

    case xpHeroi >= 7001 && xpHeroi < 8000:
        nivelHeroi = "Platina"
    break

    case xpHeroi >= 8001 && xpHeroi < 9000:
        nivelHeroi = "Ascendente"
    break

    case xpHeroi >= 9001 && xpHeroi < 10001:
        nivelHeroi = "Imortal"
    break

    case xpHeroi >= 10001:
        nivelHeroi = "Radiante"
    break
}
// nova saida
console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi + " com " + xpHeroi + " pontos de experiência")
