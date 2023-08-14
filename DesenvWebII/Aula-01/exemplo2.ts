namespace exemplo2 {
    //tipos de variáveis: var global, let privado para função que ela está, const constante e não muda de valor
    let numero: number;
    numero = 5;
    let resultado: number;
    resultado = numero + numero;
    console.log("A soma entre " + numero + " com " + numero + " é igual a: " + resultado);
    resultado = numero - 4;
    console.log(`A subtração entre ${numero} com 4 é igual a: ${resultado}`);
    resultado = numero * numero;
    console.log(`A multiplicação de ${numero} x ${numero} é igual a: ${resultado}`);
    resultado = numero / numero;
    console.log(`A divisão de ${numero} por ${numero} é igual a: ${resultado}`);

    //algoritmo recebe 4 números inteiros
    let numero1, numero2, numero3, numero4, soma : number;
    numero1 = 3;
    numero2 = 5;
    numero3 = 7;
    numero4 = 8;
    soma = numero1 + numero2 + numero3 + numero4
    console.log(`A soma entre ${numero1}, ${numero2}, ${numero3} e ${numero4} é de: ${soma} `);

    // algoritmo três notas e média aritmética
    let nota1, nota2, nota3, media : number;
    nota1 = 3;
    nota2 = 5;
    nota3 = 7;
    media = (nota1 + nota2 + nota3) / 3;
    console.log(`A média aritmética das notas ${nota1}, ${nota2} e ${nota3} é de: ${media} `);

    // algoritmo três notas e média ponderada
    media = ((nota1 * 1) + (nota2 * 2) + (nota3 * 3)) / 3;
    console.log(`A média ponderada das notas ${nota1}, ${nota2} e ${nota3} é de: ${media} `);

    // algoritmo salário e aumento
    let salario, aumento, novosalario : number;
    salario = 1000;
    aumento = 25;
    novosalario = salario + (salario * (aumento/100))
    console.log(`O salário de ${salario} teve aumento de ${aumento}%, portanto, o novo salário será de: ${novosalario}`);
}