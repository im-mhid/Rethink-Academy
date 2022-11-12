const pessoas = [
  { name: 'Fabiana Araújo', age: 33 },
  { name: 'Gabriel Gomes', age: 25 },
  { name: 'Fernando Henrique', age: 17 },
  { name: 'Ana Luiza', age: 2 },
  { name: 'Geralda do Nascimento', age: 93 },
  { name: 'Miguel Souza', age: 70 },
  { name: 'Antonio Miguel', age: 69 }
]

//Desafio 2
console.log('Desafio 2')
pessoas.unshift({ name: 'Henrique Inácio', age: 22 })
pessoas.push({ name: 'Matheus Dias', age: 21 })
console.log(`Há ${pessoas.length} pessoas cadastradas no sistema, elas são:`)
pessoas.forEach(function (item, indice, array) {
  console.log(item, indice)
})

//Desafio 3
console.log('Desafio 3')
function search(lista, nome) {
  let resultadoBusca = pessoas.filter(lista => lista.name == nome)
  resultadoBusca.forEach(element => {
    console.log(element)
  })
}

search(pessoas, 'Gabriel Gomes')

//Desafio 4
console.log('Desafio 4')
let listaNomes = []
pessoas.forEach(element => {
  let nome = element.name
  let primeiroNome = nome.split(' ')[0]
  listaNomes.push(primeiroNome)
})
console.log(listaNomes)
//Desafio 5
console.log('Desafio 5')
pessoas.forEach(function (item, indice) {
  item.id = indice + 1
})

//Desafio 6
console.log('Desafio 6')
function cnh() {
  let resultadoBusca = pessoas.filter(lista => lista.age >= 18)
  resultadoBusca.forEach(element => {
    console.log(element)
  })
}
cnh()

//Desafio 7
console.log('Desafio 7')
function mediaIdade() {
  let soma = 0
  let totalPessoas = 0
  pessoas.forEach(element => {
    soma += element.age
    totalPessoas++
  })
  let media = soma / totalPessoas
  console.log(media)
}
mediaIdade()
