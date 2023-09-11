//Exercício de Funções com Retorno - Fatorial: 
//Escreva uma função que calcula o fatorial de um número inteiro. 

namespace exercicio6{
    let num:number=4;
    let resultado:number=0;
    let i:number=num
    for (let i=1; i<num; i++){
        resultado = resultado + (num*(num-1));
        num=num-1;
    };
    console.log(resultado);
}