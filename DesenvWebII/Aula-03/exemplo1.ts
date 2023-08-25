namespace exemplo1 {
    //DO WHILE
    let num: number = 18;
    let i: number = 0;
    do{
        //console.log("Entrou no DO WHILE");
        console.log(i);
        i++;// i = i + 1
        num = i == 11 ? 19 : 18;
    } while (num <= 18);

    //WHILE (enquanto)
    while(i <= 20){
        //console.log("Entrou no WHILE");
        console.log(i);
        i++
    }
    //FOR (para)
    for(i = 0; i <= 30; i++) { // para(ponto inicia; ponto final; o que será executado)
        console.log(i);
    }

}
