const {createApp} = Vue;
createApp({
    data(){
        return{
            display:"0",
            numeroAtual: null,
            numeroAnterior: null,
            operador: null,
        }
    },
    methods: {
        lidarBotao(botao){
            //console.log(botao)
            switch(botao){
                case "+":
                case "-":
                case "*":
                case "/":
                    this.lidarBotao(botao);
                    break;
                case "=":
                    this.lidarBotao(botao);
                    break;
                case ".":
                    this.lidarDecimal(botao);
                    break;
                default:
                    this.lidarNumeros(botao);
                    break;
            }
        },
        lidarNumeros(numero){
            if(this.display === "0"){
                //console.log("Teste")
                //this.display= "teste"
            }else{
                this.display += numero.toString();
                
            }

        }
    }
}).mount("#app")