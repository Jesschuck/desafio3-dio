class heroi{
    constructor(nomeHeroi, idadeHeroi, tipoHeroi){
        this.nomeHeroi = nomeHeroi;
        this.idadeHeroi = idadeHeroi;
        this.tipoHeroi = tipoHeroi;
    }

    atacar() {
        let ataque;
        switch (this.tipoHeroi) {
          case "mago":
            ataque = "magia";
            break;
          case "guerreiro":
            ataque = "espada";
            break;
          case "monge":
            ataque = "artes marciais";
            break;
          case "ninja":
            ataque = "shuriken";
            break;
          default:
            ataque = "um ataque genérico";
        }
        return(`O ${this.tipoHeroi} atacou usando ${ataque}`);
    }
}

let mago = new heroi("Gandalf", 3.000, "mago")
let guerreiro = new heroi("Aragorn", 45, "guerreiro")
let monge = new heroi("Buda", 80, "monge")
let ninja = new heroi("Naruto", 18, "ninja")

console.log(mago.atacar())
console.log(guerreiro.atacar())
console.log(monge.atacar())
console.log(ninja.atacar())
