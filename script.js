// Receber um valor inserido pelo usuário para calcular o tempo no estacionamento. 

// Definir tempos baseados no valor inserido:

// Calcular e exibir o tempo correspondente e o troco (se houver). 

// Exibir uma mensagem de "Valor insuficiente" caso o valor seja menor que R$1,00.

class Parquimetro{
    #saldo
    constructor(saldo, tempo){
        this.#saldo = 0;
        this.tempo = tempo;
    }

    depositar(valor){
        const valor = parseFloat(document.getElementById("valor").value);
        this.#saldo += valor;
    }

    get saldo(){
        return this.#saldo;
    }

    minutos(){
        if(valor < 1){
            this.tempo = 'Valor insuficiente';
        } else if (valor == 1)
    }

}