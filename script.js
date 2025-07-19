// Receber um valor inserido pelo usuário para calcular o tempo no estacionamento. 

// Definir tempos baseados no valor inserido:

// Calcular e exibir o tempo correspondente e o troco (se houver). 

// Exibir uma mensagem de "Valor insuficiente" caso o valor seja menor que R$1,00.

class Parquimetro {
    #saldo;
    constructor(saldo, tempo){
        this.#saldo = 0;
        this.tempo = "";
    }

    depositar(){
        //Pegar o valor de input e somar ao valor de #saldo
        const valor = parseFloat(document.getElementById("valor").value);
        const troco = 0;
        //Condição de avisar sobre valor insuficiente se não bater o valor minimo
        if(valor < 1){
            document.getElementById("deposito").textContent= 'Saldo: R$ Valor insuficiente';
        } else if(valor == 1){
            this.troco = 0
            this.#saldo = valor;
            //Exibição de saldo atualizado na pagina e formatação de "." para "," nas casas decimais
            document.getElementById("deposito").textContent = `Saldo: ${this.#saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            document.getElementById("troco").textContent = `Troco: ${this.troco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            //Chamada de metodo para calcular o tempo
            this.minutos()
        } else if (valor > 1 && valor < 1.75){
            const preco = 1;
            this.troco = valor - preco;
            this.#saldo = preco
            document.getElementById("deposito").textContent = `Saldo: ${this.#saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            document.getElementById("troco").textContent = `Troco: ${this.troco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            this.minutos();
        } else if (valor == 1.75){
            this.troco = 0
            this.#saldo = valor;
            document.getElementById("deposito").textContent = `Saldo: ${this.#saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            document.getElementById("troco").textContent = `Troco: ${this.troco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            this.minutos();
        } else if (valor > 1.75 && valor < 3){
            const preco = 1.75;
            this.troco = valor - preco;
            this.#saldo = preco
            document.getElementById("deposito").textContent = `Saldo: ${this.#saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            document.getElementById("troco").textContent = `Troco: ${this.troco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            this.minutos();
        } else if (valor == 3){
            this.troco = 0
            this.#saldo = valor;
            document.getElementById("deposito").textContent = `Saldo: ${this.#saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            document.getElementById("troco").textContent = `Troco: ${this.troco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            this.minutos();
        }
    }

    minutos(){
        //Deixando em branco o campo input
        document.getElementById("valor").value= '';
        //Condições baseada na variavel #saldo
        if (this.#saldo == 1){
            this.tempo = "30 minutos"
            document.getElementById("tempo").textContent = `Tempo: ${this.tempo}`
        } else if (this.#saldo == 1.75){
            this.tempo = "1 Hora (60 minutos)"
            document.getElementById("tempo").textContent = `Tempo: ${this.tempo}`
        } else if (this.#saldo == 3){
            this.tempo = "2 Horas (120 minutos)"
            document.getElementById("tempo").textContent = `Tempo: ${this.tempo}`
        }
  }
}

// instância global
const p = new Parquimetro();
p.depositar();