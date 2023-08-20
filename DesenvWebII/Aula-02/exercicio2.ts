namespace exercicio2 {
    // Aula 02 - exercício 02 - média ponderada e conceitos
    let trabLab: number, avaliaSem: number, exameFinal: number;
    const pesoTrabLab: number = 2, pesoAvaliaSem: number = 3, pesoExameFinal: number = 5;
    trabLab = 8, avaliaSem = 7, exameFinal = 6;
    const mediaPond: number = ((trabLab * pesoTrabLab) + (avaliaSem * pesoAvaliaSem) + (exameFinal * pesoExameFinal)) / (pesoTrabLab + pesoAvaliaSem + pesoExameFinal);
    console.log(`A média ponderada das três notas foi: ${mediaPond}.`)
    if (mediaPond >= 8 && mediaPond <= 10) {
        console.log(`Você ficou com conceito A!`)
    } else if (mediaPond >= 7 && mediaPond < 8) {
        console.log(`Você ficou com conceito B!`)
    } else if (mediaPond >= 6 && mediaPond < 7) {
        console.log(`Você ficou com conceito C!`)
    } else if (mediaPond >= 5 && mediaPond < 6) {
        console.log(`Você ficou com conceito D!`)
    } else {
        console.log(`Você ficou com conceito E!`)
    }
}