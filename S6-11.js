// exercicico 1 e 2
let totalFixo = 1000
let valorVendas = 1450

function calculateSalary(x,y){
  let total = 0
  if(y <= 1200){
    total = x + ((y / 100 )* 3)
    }

    else if(y > 1200){
    let a = ((y / 100 )* 3)
    let b = (((y - 1200)/100)*5)
    total = x + a + b
    }
    return total
}
 console.log((calculateSalary(totalFixo,valorVendas)))


// notas de 200

let total = calculateSalary(totalFixo,valorVendas)
let nota200 = 200

function notas(x,y){

  let contador200 = 0

for(let i = 0; i < x; i++){
      contador200 = i / y
  }
  return parseInt(contador200)
}

console.log(notas(total, nota200))

let totaDe200 = notas(total, nota200) * 200

// notas de 10

let sobrasDe200 = total - totaDe200

let nota10 = 10

function notas(q,w){

  let contador10 = 0

for(let i = 0; i < q; i++){
      contador10 = i / w
  }
  return parseInt(contador10)
}

console.log(notas(sobrasDe200, nota10))


// notas de 5

let total10 = notas(sobrasDe200, nota10)

let sobraNotas = sobrasDe200 - (total10 * 10) 

let nota5 = 5

function notas(a,b){

  let contador5 = 0

for(let i = 0; i < a; i++){
      contador5 = i / b
  }
  return parseInt(contador5)
}

console.log(notas(sobraNotas, nota5))

// troco

let valor5 = notas(sobraNotas, nota5)

let troco = sobraNotas - (valor5 * 5)

console.log("Valor do troco " + troco)


//// funcao apos o saque 

let duzentos = nota200

let cem = nota200 / 2

let cinquenta = nota200 / 4

let quantidade = [1,2,1]

let valorSaque = (quantidade[0] * duzentos + (quantidade[1] * cem + (quantidade[2] * cinquenta)))

console.log("total saque " + valorSaque + ".00 reais")

function cashMachine(z){
  
    let total = calculateSalary(totalFixo,valorVendas)

    return "Sobra depois do saque: " + (total - z) + " reais"
  }
  console.log(cashMachine(valorSaque))


  
// exercicicio 3

let estoque = 6
let quantidadeMaxima = 8
let quantidadeMinima = 0

function calculateStock(a,b,c){

 let quantidadeMedia = ((b + c)/2)

    if(a >= quantidadeMedia){
      return `Não efetuar compra`
    }
    else if(a < quantidadeMedia){
      return `Efetuar compra`
  
    }
  }
console.log(calculateStock(estoque,quantidadeMaxima,quantidadeMinima))



// exercicio 4
let anoAtual = 2022
let anoNascimento = 1998

function calculateAge(x,y){
if(idade = x - y){
  return `Eu tenho ${idade} anos, ou ${idade * 12} meses de idade, ou ${idade * 365} dias de idade, ou ${idade * 52} semanas de idade`
}
}
console.log(calculateAge(anoAtual,anoNascimento))

//exercicio 5
let matrizQuadrada =[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
function getDiagonal(a){
 let resultado = []
for(let x = 0; x < a.length; x++){
  resultado.push(a[x][x])
  
}
return resultado 
}
console.log(getDiagonal(matrizQuadrada))




 