namespace exercicio4 {
    // algoritmo salário e aumento
    let salario, aumento, novosalario : number;
    salario = 1000;
    aumento = 25;
    novosalario = salario + (salario * (aumento/100))
    console.log(`O salário de ${salario} teve aumento de ${aumento}%, portanto, o novo salário será de: ${novosalario}`);
}