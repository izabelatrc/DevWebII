/*namespace exercicio2{
    let lista : number[] = [1, 9, 3, 6]
    if(lista[0]>lista[1] && lista[0]>lista[2] && lista[0]>lista[3]){
        console.log(lista[1])
    } else if(lista[1]>lista[0] && lista[1]>lista[2] && lista[1]>lista[3]){
        console.log(lista[1])
    } else if(lista[2]>lista[0] && lista[2]>lista[1] && lista[2]>lista[3]){
        console.log(lista[2])
    } else {
        console.log(lista[3])
    }
}*/

namespace exercicio2correcao{
    let lista : number[] = [2, 7, -1, 3, 40, 12];
    let maior: number = lista[0]
    
    for(let i = 1; i <= lista.length; i++){
        if(maior < lista[i]){
            maior = lista[i];

        }
    }
    console.log(maior)
}

//console.log(`O maior valor é:${Math.max(... lista)}`)