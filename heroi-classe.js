class HeroiDaAventura {
    constructor(guerreiro, mago, monge, ninja) {
        this.guerreiro = guerreiro;
        this.mago = mago;
        this.monge = monge;
        this.ninja = ninja;
        this.herois = {
            1: guerreiro,
            2: mago,
            3: monge,
            4: ninja
        };
        this.heroiSelecionado = null;
    }

    selecionarHeroi(numero) {
        // Verifica se o número fornecido está entre as opções disponíveis
        if (this.herois[numero] !== undefined) {
            this.heroiSelecionado = this.herois[numero];
            console.log(`Herói selecionado: ${this.heroiSelecionado}`);
        } else if (numero === 5) {
            // Se o usuário escolher 5, seleciona um herói aleatório
            const heroisArray = Object.values(this.herois);
            this.heroiSelecionado = heroisArray[Math.floor(Math.random() * heroisArray.length)];
            console.log(`Herói aleatório selecionado: ${this.heroiSelecionado}`);
        } else {
            console.log('Número inválido');
        }
    }
}

let guerreiroSelecionado = new HeroiDaAventura('Guerreiro', 'Mago', 'Monge', 'Ninja');

// Pede ao usuário para selecionar um herói usando números
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Escolha um herói (1: Guerreiro, 2: Mago, 3: Monge, 4: Ninja, 5: Aleatório): ', (resposta) => {
    guerreiroSelecionado.selecionarHeroi(parseInt(resposta));
    // Imprime o herói selecionado
    console.log(`Herói final selecionado: ${guerreiroSelecionado.heroiSelecionado}`);
    rl.close();
});
