// 2. Criar um array e percorrê-lo utilizando o loop for of
// a. Crie um array com o nome "numeros" e adicione 5 números de
// sua escolha
// b. Utilize o loop for of para percorrer o array e exibir a soma dos
// números na tela

let array = [1,2,3,4,5,6,7,8,9,10]

for (let numeros of array) {
    console.log(numeros)
}

console.log('<----------->')

let numeros = [1,2,3,4,5]
let soma = 0
for (const i of numeros) {
    soma += i
}

console.log(soma)