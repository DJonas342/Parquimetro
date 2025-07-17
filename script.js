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
        //Pegar o valor de input e somar ao valor de #saldo
        const valor = parseFloat(document.getElementById("valor").value);
        //Condição de avisar sobre valor insuficiente se não bater o valor minimo
        if(valor < 1){
            document.getElementById("deposito").textContent= 'Saldo: R$ Valor insuficiente';
        }else{
        this.#saldo = valor;
        //Exibição de saldo atualizado na pagina e formatação de "." para "," nas casas decimais
        document.getElementById("deposito").textContent = `Saldo: ${this.#saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
        //Chamada de metodo para calcular o tempo
        this.minutos()
        }
    }

    minutos(){
        //Deixando em branco o campo input
        document.getElementById("valor").value= '';
        //Condições baseada na variavel #saldo

  }
}

// instância global
const p = new Parquimetro();
p.depositar()