// FUNÇÕES

const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]

//arrow function (expressão lambda =>)
//() => {}

//estamos verificando se o nome começa com A
const resultante = nomes.filter((n) => {
    return n.startsWith("A")
})
console.log(resultante)

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