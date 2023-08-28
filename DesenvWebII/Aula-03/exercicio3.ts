/*namespace exercicio3 {
    let num : number = 30;
    let i : number = 0
    for(i=0; i<(num+1); i++){
        if(i % 3 == 0){
            console.log(i)
        }
    }
}*/

namespace exercicio2correcao{
    let num: number = 100;
    let index: number = 1;
    let arrayDiv3: number[] = [];

    do{
        if(index % 3 == 0){
            console.log(index);
            arrayDiv3.push(index); //para adicionar os números divisíveis por 3 em um vetor
        }
        index++
    } while(index <= num)
    console.log(arrayDiv3)
    for(let i=0; i<=arrayDiv3.length; i++){
        console.log(arrayDiv3[i]);
    }
}