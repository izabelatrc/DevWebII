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
}
