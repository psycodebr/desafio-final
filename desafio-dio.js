// Importa o módulo 'readline' para interação com o usuário
const readline = require('readline');
// Cria uma interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Define a classe HeroiDaAventura
class HeroiDaAventura {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para realizar um ataque
    atacar() {
        let ataque = '';

        // Determina o tipo de ataque com base no tipo de herói
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque desconhecido';
        }

        // Exibe a mensagem de ataque
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

// Pede ao usuário para fornecer informações sobre o herói
rl.question('Digite o nome do herói: ', (nome) => {
    rl.question('Digite a idade do herói: ', (idade) => {
        // Pede ao usuário para escolher o tipo de herói
        rl.question('Escolha um tipo de herói:\n1: Guerreiro\n2: Mago\n3: Monge\n4: Ninja\n5: Aleatório\n', (opcao) => {
            let tipoHeroi;
            
            // Determina o tipo de herói com base na opção escolhida pelo usuário
            switch (opcao) {
                case '1':
                    tipoHeroi = 'Guerreiro';
                    break;
                case '2':
                    tipoHeroi = 'Mago';
                    break;
                case '3':
                    tipoHeroi = 'Monge';
                    break;
                case '4':
                    tipoHeroi = 'Ninja';
                    break;
                case '5':
                    // Se a opção for 5, escolhe um tipo aleatório entre os tipos possíveis
                    const tiposPossiveis = ['Guerreiro', 'Mago', 'Monge', 'Ninja'];
                    tipoHeroi = tiposPossiveis[Math.floor(Math.random() * tiposPossiveis.length)];
                    break;
                default:
                    // Se a opção for inválida, exibe uma mensagem e encerra a execução
                    console.log('Opção inválida');
                    rl.close();
                    return;
            }

            // Cria um herói com base nas informações fornecidas pelo usuário
            let heroiSelecionado = new HeroiDaAventura(nome, idade, tipoHeroi);
            // Chama o método de ataque do herói
            heroiSelecionado.atacar();
            // Fecha a interface de leitura/escrita
            rl.close();
        });
    });
});
