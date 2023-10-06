const express = require('express');
const res = require('express/lib/response');

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("O servidor está ativo na porta 3000")
})

let nomes = []; // banco de dados
//criação crud
//CREATE
app.post ("/testePOST", (req, res) => {
    const { nome, sobrenome} = req.body;
    console.log(`Nome: ${nome} \n Sobrenome: ${sobrenome}`);
    nomes.push(nome);
    res.sendStatus(200);
})

//READ
app.get("/testeGET", (req, res) => {
    console.log(nomes);
    res.send(nomes);
})

//UPDATE
app.put("/testePUT", (req, res) => {
//encontrar como que faz para alterar o vetor, como que pega o indice dele para alterar
})

//DELETE
app.delete("/testeDELETE", (req, res) => {
//encontrar como que faz para alterar o vetor, como que pega o indice dele para alterar
})
