// 1 - Dado o array numbers = [1, 2, 3, 4, 5], utilize o método map para criar 
// um novo array contendo o dobro de cada elemento. Até o número um
const numbers = [1, 2, 3, 4, 5]
let num_final = numbers.map((nf) => nf * 2)
console.log(num_final);
// 1

// 2 - Dado o array numbers = [1, 2, 3, 4, 5], utilize o método filter para criar 
// um novo array contendo apenas os números pares
const num2 = [1, 2, 3, 4, 5]
let num2_final = numbers.filter((nf2) => nf2%2==0 )
console.log(num2_final);
// 2

// 3 - Dado o array fruits = ['apple', 'banana', 'orange', 'kiwi'], utilize o método 
// forEach para exibir cada fruta no console.
fruits = ['apple', 'banana', 'orange', 'kiwi']
let fruitf = fruits.forEach((A) =>{ console.log(`As frutas são: ${A}`)})
// 3

// 4 - Dado o array students = [
//     { name: 'John', age: 20 },
//     { name: 'Jane', age: 25 }, 
//     { name: 'Mark', age: 22 }
//     ], 
//     Utilize o método forEach para exibir o nome e a idade de cada aluno no 
//     console. Até o número 4
students = [
         { name: 'John', age: 20 },
         { name: 'Jane', age: 25 }, 
         { name: 'Mark', age: 22 }
 ]
 let stuf= students.forEach((estu) =>{ console.log(`Os nomes são: ${estu.name}`), console.log(`As idades são: ${estu.age}`);})
// 4
// 5 - Dado o array students = [
//     { name: 'John', age: 20 },
//     { name: 'Jane', age: 25 },
//     { name: 'Mark', age: 22 }
//     ], 
//     Utilize o método map para criar um novo array contendo apenas os nomes 
//     dos alunos. Até o número cinco
students2 = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 25 },
    { name: 'Mark', age: 22 }
    ]
    let stu2f= students2.map((sf2) => console.log(`Os nomes são:${sf2.name}`))
console.log(stu2f);
// 5