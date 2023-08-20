/* 4-) Faça um programa que recebe um número inteiro e verifique se 
esse número é par ou ímpar.*/

namespace exercicio4 {
    let numInt: number;
    numInt = 787
    let verifica: boolean = numInt % 2 == 0 ? true : false;
    if (verifica) {
        console.log(`Número par`)
    } else {
        console.log(`Número impar`)
    }
}