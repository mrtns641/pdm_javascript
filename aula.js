function calculoRapido (n) {
    return Promise.resolve((n * (n + 1)) /2)
}

function f (n) {
    return new Promise((resolve, reject) => {
        resolve((n * (n + 1)) /2)
    }) 
}

calculoRapido(10).then (res => console.log(res))
f(10).then (res => console.log(res))

//1 + 2 + ... + n-1 + n
// function calculoDemorado (n) { //maneira assincrona
//     let p = new Promise((resolve, reject) => {
//         if (n < 0) {
//             reject('Somente valores positivos')
//         }
//         else {
//             let res = 0
//             for (let i = 1; i <= n; i++)
//                 res += i
//             resolve(res)
//         }
            
//     })
//     return p
// }

// calculoDemorado(-10)
// .then ((res) => {
//     console.log("Ok deu certo: " + res)
// })
// .catch (erro => {
//     console.log("Falhou: " + erro)
// })

// const resultadoFuturo = calculoDemorado(10)
// resultadoFuturo.then((res) => console.log(res))


// function exemplo(){
//     //função associada a computação(sequencia de passos? não me lembro ao certo) dessa promise
//     let p = new Promise(function(resolve, reject){ //resolve = sucesso e reject = possivel erro
//         resolve(1)

//     })
//     return p 
// }

// const resultadoFuturo = exemplo()
// resultadoFuturo.then((resultado) => console.log(resultado))
// console.log(resultadoFuturo)

// function exemplo () {
//     return 1
// }

// const resultado = exemplo()
// console.log(resultado)


// const fs = require('fs')
// const abrirArquivo = function (nomeArquivo) {
//     const exibirConteudo = function (erro, conteudo) {
//         if (erro) {
//             console.log("Deu erro: " + erro)
//         }
//         else {
//             console.log(conteudo.toString())
//             //processamento
//             const dobro = 2 * +conteudo.toString() //+conteudo -> conversao de texto para numero

//             const finalizar = function (erro) {
//                 if (erro) {
//                     console.log("Deu erro: " + erro)
//                 }
//                 else {
//                     console.log("Salvou o dobro com sucesso")
//                 }
//             }
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar) //writeFile IO Bound
//         }
//     }
//     //segundo parâmetro: função callback 
//     fs.readFile(nomeArquivo, exibirConteudo)
// }

// abrirArquivo('arquivo.txt')

// IO Bound -> entrada e saida de dados
// CPU Bound -> caracterizado pelo uso da cpu


// const nome = "João"
// const idade = 17

// //atalho
// const objeto = { nome, idade }

// const objeto2 = {
//     nome: nome,
//     idade: idade
// }


// let calc = {
//     soma: (a, b) => a + b,
//     subtracao: function (a, b) {
//         return a - b
//     }
// }
// console.log(calc.soma(2,3))
// console.log(calc.subtracao(5,4))



// // //uma concessionaria que tem cnpj e endereco
// // e carros em estoque
// // cada carro tem marca, modelo e ano de fab
// let c = {
//     cnpj: '1111111111111111-45',
//     endereco: {
//         logradouro: 'Rua A',
//         numero: 10,
//         bairro: "Vila J"
//     },
//     veiculo: [
//         {
//             marca: 'Ford',
//             modelo: 'Ka',
//             ano: 2012,
//             revisoes: [
//                 {
//                     data: '12/02/2013',
//                     consultor: "Andre"
//                 }, 
//                 {
//                     data: '14/02/2014',
//                     consultor: 'Pedro'
//                 }
//             ]
//         }, 
//         {
//             marca: 'Volks',
//             modelo: 'Nivus',
//             ano: 2020
//         }, 
//         {
//             marca: 'Chevrolet',
//             modelo: 'Onix',
//             ano: 2021
//         }
//     ]
// }


// //exibir nome pedro
// console.log(c.veiculo[0].revisoes[1].consultor)


// let p = {
//     nome: "Maria",
//     idade: 22,
//     endereco: {
//         logradouro: "Rua B",
//         numero: 12
//     }
// }
// console.log(p.nome)
// console.log(p['idade'])
// console.log(p.endereco.logradouro)
// console.log(p['endereco'].numero)
// console.log(p['endereco']['numero'])
// console.log(p.endereco['numero'])

// JavaScript Object Notification
// JSON
//pares chaves/valor
// let pessoa = {
//     nome: "João",
//     idade: 17
// }

// console.log(pessoa.nome)
// console.log(pessoa['idade'])


// const triplo = (n) => {
//     const r = n + n
//     r = r + n
//     return (r + 2 + 
//         r + 2 + r + 2);
// }

// const triplo = n => { n * 3 } //sem return implicito -> undefined 
// console.log(triplo(2))

// const dobro = n => n * 2 //return implicito
// const dobro = function (n) {
//         return 2 * n
//     }
// console.log(dobro(5))

//arrow functions
// const hello = () => ("Hello")
// console.log(hello())

// const triplo = function (n = 1) { // n = 1 -> valor padrão para evitar undefined 
//     return n * 3
// }
// console.log(triplo())
// console.log(triplo(2)) //sobrecarga de metodo



// const dobro = function (n) {
//     return 2 * n
// }
// console.log(dobro (5))

// function soma (a, b) {
//     return a + b  
// }

// const res = soma (2, 3)
// console.log (res)


// function hello () {
//     console.log("Oi")
// }

// hello()

// function hello (nome) {
//     console.log("Hello, " + nome)
// }

// hello("João")

// const valores = [1, 2, 3, 4]
// //reduce
// const soma = valores.reduce((ac, v) => ac + v)
// console.log(soma)

// FUNÇÕES

// const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]

// const todosComecamComA = nomes.every ((n) => n.startsWith("A"))
// console.log(todosComecamComA)

// utilizando a map, escreva um trecho de código que produz 
// um vetor que contém os comprimentos das strings existentes
// [9, 7, 7, 4, 8]
// const res = nomes.map((x) => x.length)
// console.log (res)

// const res = nomes.map((nome) => nome.charAt(0))
// console.log (res)

//arrow function (expressão lambda =>)
//() => {}

//estamos verificando se o nome começa com A
// const resultante = nomes.filter((n) => {
//     return n.startsWith("A")
// })
// console.log(resultante)

// class Pessoa {
//     public void andar () {

//     }
//     variavel = andar;
// }

// void f (int a,float b) {

// }
// f(1,2)

// const nomes = [1, 2]//constante não vai fazer referencia a outro objeto
// console.log (nomes)
// nomes[0] = 3
// console.log (nomes)
//nomes[225] = "oi"
//console.log(nomes.length)
// nome = "oi"

//int v [10];
// v1 = []
// v1[0] = 3.4
// v1[10] = 2
// v1[2] = "abc"

// VARIÁVEIS
// console.log(v1.length)
// console.log(v1)

// for (let i = 0; i < v1.length; i++) {
//     console.log (v1[i])
// }

// const a = []
// const b = a
// console.log(a === b)

// Thread.stop()

//retrocompatibilidade
// console.log([] === [])

// console.log (1 == ["1"])

// console.log (1 == [1, 1])

// console.log ([] == false)

// console.log (null == undefined)

// console.log (null == null)

// console.log(1 == [1])

// console.log(true == 1)

// console.log(1 == 1)
// console.log(1 == "1") //tipos diferentes - conversão implicita
// console.log(1 === 1) //"dupla pergunta"
// console.log(1 === "1") //sem conversão -> verifica pelo tipo

// const n1 = 2
// const n2 = "3"
// const n3 = n1 + n2
// // console.log(n3)

// const n4 = n1 + Number(n2)
// console.log(n4)

// var idade = 18
// console.log("Oi, " + nome)
// if (idade >= 18){
//     //içamento = hoist
//     var nome = "José"
//     console.log("Parabéns, " + nome + ", você pode dirigir")
// }
// console.log("Até, " + nome)
//dupla passagem
//a atribuição não acontece na primeira passagem 
// undefined != null

// var linguagem= "Java"
// console.log (`Aprendendo`+ linguagem)
// var linguagem = "Javascript"
// // printf ("Aprendendo %s", linguagem);
// console.log (`Aprendendo ${linguagem}`)

// const nome = "José"
// // nome = "Ana"
// // const n
// const endereco = 'Rua K, 10'
// const sobrenome = `Silva` 

// let a = 2
// let b = "abc"
// a = true
// a = "abc"

// var c = 2 + 3
// var d = "abcd"