//Exercício de Estrutura de Repetição - Soma dos Números Pares: 
//Escreva um programa que soma todos os números pares de 1 a 100 e exiba o resultado. 

namespace exercicio3{
    let soma:number=0;
    let i:number=1;
    do{
        if(i % 2 == 0){
            soma = soma + i;
        }
        i++
    } while (i<=100);
    console.log(`A soma dos números pares no invervalo 1 a 100 é: ${soma}`);
}