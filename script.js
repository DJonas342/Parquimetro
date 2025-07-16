// Receber um valor inserido pelo usuário para calcular o tempo no estacionamento. 

// Definir tempos baseados no valor inserido:

// Calcular e exibir o tempo correspondente e o troco (se houver). 

// Exibir uma mensagem de "Valor insuficiente" caso o valor seja menor que R$1,00.

class Parquimetro {
    #saldo
    constructor(saldo, tempo){
        this.#saldo = 0;
        this.tempo = "";
    }

    depositar(){
        const valor = parseFloat(document.getElementById("valor").value);
        this.#saldo += valor;
        document.getElementById("deposito").textContent = 'Saldo: R$'+ this.#saldo + `,00`;
    }
    minutos(){

    console.log("Método minutos() chamado");
    // sua lógica aqui
  }
}

// instância global
const p = new Parquimetro();
p.minutos();