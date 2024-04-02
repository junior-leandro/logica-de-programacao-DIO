/* 

** Resolvendo o problema usando "IF's" **

*/

// variavel para guardar o nome do Heroi
let nomeHeroi = "Felipão da Muralha"

// variavel para guardar a XP do Heroi 
// (Utilizei uma formula para declarar o XP aleatoriamente entre 10 e 15.000)
let xpHeroi = Math.floor(Math.random() * (15000 - 10) + 10)

// variavel para guardar o nível
let nivelHeroi = "" 


if(xpHeroi <=1000){ 
    nivelHeroi = "Ferro"
}
// verifica se é maior que 1.001 e menor que 2.000
else if(xpHeroi >=1001 && xpHeroi<=2000){ 
    nivelHeroi = "Bronze"
}
// verifica se é maior que 2..001 e menor que 5.000
else if(xpHeroi >=2001 && xpHeroi<=5000){ 
    nivelHeroi = "Prata"
}
// verifica se é maior que 5.001 e menor que 7.000
else if(xpHeroi >=5001 && xpHeroi<=7000){ 
    nivelHeroi = "Ouro"
}
// verifica se é maior que 7.001 e menor que 8.000
else if(xpHeroi >=7001 && xpHeroi<=8000){
    nivelHeroi = "Platina"
}
// verifica se é maior que 8.001 e menor que 9.000
else if(xpHeroi >=8001 && xpHeroi<=9000){ 
    nivelHeroi = "Ascendente"
}
// verifica se é maior que 9.001 e menor que 10.000
else if(xpHeroi >=9001 && xpHeroi<=10000){ 
    nivelHeroi = "Imortal"
}
// se não for nenhum dos anteriores, é mais do que 10.001 então...
else {
    nivelHeroi = "Radiante"
}

// saida
console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi + " com " + xpHeroi + " pontos de experiência")

