namespace exercicio2{
    // algoritmo três notas e média aritmética
    let nota1, nota2, nota3 : number;
    nota1 = 9, nota2 = 7, nota3 = 8;
    const media : number = (nota1 + nota2 + nota3) / 3;
    console.log(`A média aritmética das notas ${nota1}, ${nota2} e ${nota3} é de: ${media} `);
    if(media >= 7){
        console.log(`Aprovado!`)
    } else if (media > 3) {
        console.log(`Recuperação!`)
    } else{
        console.log(`Reprovado!`)
    } 
}
