namespace exercicio3{
    // algoritmo três notas e média ponderada
    let nota1 : number, nota2 : number, nota3 : number;
    const peso1 : number = 3, peso2 : number = 5, peso3 : number = 2;
    nota1 = 8, nota2 = 6, nota3 = 0;
    let situacao : boolean = nota3 == 0 ? false : true; 
    //mesma coisa que:
    // if(nota3 = 0){
    //     situacao = false;
    // } else {
    //     situacao = true;
    // }
    if (situacao && nota2 >= 5){
        let media : number = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3))/(peso1 + peso2 + peso3);
        console.log(`A média ponderada das notas é: ${media}. Aprovado!`);
    } else{
        console.log(`Aluno não entregou trabalho e sua media foi: 0`)
    }
}