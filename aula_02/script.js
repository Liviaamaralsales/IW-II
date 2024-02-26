//console.log("Olá JS!")

let c1 = "Vermelho"
let c2 = "Azul"
let c3 = "Amarelo"
let c4 = "Roxo"
let c5 = "Branco"

//Array - vetor

const dados = [c1, c2, c3, c4, c5]

//Comparar um objeto dentro de um mega vetor

let cor = "Branco"

for (let i=0; i<dados.length; i++){

    if(cor == dados[i]){
        console.log("Encontrado!" + i)
        break
    } else {
        console.log("Não encontrado")
    }

}

