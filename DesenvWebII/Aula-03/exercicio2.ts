namespace exercicio2{
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
}