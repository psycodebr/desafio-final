class HeroiDaAventura {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = '';

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

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

// Exemplo de uso da classe
let magoAventura = new HeroiDaAventura('Merlin', 100, 'Mago');
let guerreiroAventura = new HeroiDaAventura('Conan', 35, 'Guerreiro');

magoAventura.atacar();
guerreiroAventura.atacar();
