// exercicico 1 e 2
let totalVendas = 1000
let comissao1porcento = totalVendas / 100 

function calculateSalary(x){
    if(totalVendas <= 1200){
    let total1 = totalVendas + (comissao1porcento * 3)
    return total1
    }
    else if(totalVendas > 1200){
    let total2 = totalVendas + (comissao1porcento * 5)  
    return total2
    }
}
 console.log(calculateSalary(totalVendas))


let valorSaque = [200, 200, 100, 50]

function cashMachine(x){
    let resultado = 0
  
    for(let i = 0; i < x.length; i++) {
      resultado += x[i]
    }
    return resultado 
  }
  console.log(cashMachine(valorSaque))


// exercicicio 3
let estoque = ["televisão", "centrifuga", "forno", "radio", "ventilador", "bicicleta"]
let quantidadeMaxima = 8
function calculateStock(x){
  for(let i = 0; i < x.length; i++){
    if(i >= quantidadeMaxima){
      return `Não efetuar compra`
    }
    else if(i >= 1 && i < quantidadeMaxima){
      return `Efetuar compra`
    }
  }
}
console.log(calculateStock(estoque))

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
let matrizQuadrada = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
]

function getDiagonal(x){
  let resultado = []
  resultado.push(x[0][0], x[1][1], x[2][2]) 

return resultado
}
console.log(getDiagonal(matrizQuadrada))
 
