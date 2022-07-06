// exercicico 1 e 2
let totalFixo = 1000
let valorVendas = 500

function calculateSalary(x,y){
  let total = 0
  if(y <= 1200){
    total = x + ((y / 100 )* 3)
    }

    else if(y > 1200){
    total = x + ((y / 100 )* 5)
    }
    return total
}
 console.log((calculateSalary(totalFixo,valorVendas)))



let valorSaque = [200, 200, 100, 50]

function cashMachine(z){
    let resultado = 0
  
    let total = calculateSalary(totalFixo,valorVendas)

    for(let i = 0; i < z.length; i++) {
      resultado += z[i]
    }
    return total - resultado 
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




 