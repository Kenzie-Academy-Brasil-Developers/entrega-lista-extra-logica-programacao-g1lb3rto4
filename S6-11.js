// exercicico 1 e 2
function calculateSalary(valorFixo, valorVendas){
  let total = 0
  if(valorVendas <= 1200){
    total = valorFixo + ((valorVendas / 100 )* 3)
    }

    else if(valorVendas > 1200){
    let a = ((1200 / 100 )* 3)
    let b = (((valorVendas - 1200)/100)*5)
    total = valorFixo + a + b
    }
    return total
}
 console.log((calculateSalary(1000,1450)))


// notas de 200

let total = calculateSalary(1000,1450)
let nota200 = 200

function notas(valorTotal, notaDuzentos){

  let contador200 = 0

for(let i = 0; i < valorTotal; i++){
      contador200 = i / notaDuzentos
  }
  return parseInt(contador200)
}

console.log(notas(total, nota200))

let totaDe200 = notas(total, nota200) * nota200

// notas de 10

let sobrasDe200 = total - totaDe200

let nota10 = 10

function notas(sobrasDuzentos, notaDez){

  let contador10 = 0

for(let i = 0; i < sobrasDuzentos; i++){
      contador10 = i / notaDez
  }
  return parseInt(contador10)
}

console.log(notas(sobrasDe200, nota10))


// notas de 5

let sobraNotas = sobrasDe200 - (notas(sobrasDe200, nota10) * nota10) 

let nota5 = 5

function notas(SobraNotas, notasCinco){

  let contador5 = 0

for(let i = 0; i < SobraNotas; i++){
      contador5 = i / notasCinco
  }
  return parseInt(contador5)
}

console.log(notas(sobraNotas, nota5))

// troco

let troco = sobraNotas - (notas(sobraNotas, nota5) * nota5)

console.log("Valor do troco " + troco)


//// funcao apos o saque 

let quantidade = [1, 2, 1]

let Saque = (quantidade[0] * nota200 + (quantidade[1] * (nota200 / 2) + (quantidade[2] * (nota200 / 4))))

function cashMachine(valorSaque, valorFixo, valorVendas){

  let total = calculateSalary(valorFixo,valorVendas)
  return "Sobra depois do saque: " + (total - valorSaque) + " reais"
}

console.log(cashMachine(Saque, 1000, 1450))
console.log("total saque " + Saque + ".00 reais")


// exercicicio 3

let estoque = 6
let quantidadeMaxima = 8
let quantidadeMinima = 0

function calculateStock(estoque, maxima, minima){

 let quantidadeMedia = ((maxima + minima)/2)

    if(estoque >= quantidadeMedia){
      return `Não efetuar compra`
    }
    else if(estoque < quantidadeMedia){
      return `Efetuar compra`
  
    }
  }
console.log(calculateStock(estoque,quantidadeMaxima,quantidadeMinima))

// exercicio 4
let anoAtual = 2022
let anoNascimento = 1998

function calculateAge(ano, nascimento){
if(idade = ano - nascimento){
  return `Eu tenho ${idade} anos, ou ${idade * 12} meses de idade, ou ${idade * 365} dias de idade, ou ${idade * 52} semanas de idade`
}
}
console.log(calculateAge(anoAtual, anoNascimento))

//exercicio 5
let matrizQuadrada =[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
function getDiagonal(matriz){
 let resultado = []
for(let x = 0; x < matriz.length; x++){
  resultado.push(matriz[x][x])
  
}
return resultado 
}
console.log(getDiagonal(matrizQuadrada))




 